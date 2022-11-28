import { Component, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { User } from '../common/user.interface';
import { UsersService } from '../common/users.service';
import Swal from 'sweetalert2';
import { DBOpration } from '../common/db-opration';
@Component({
  selector: 'app-registrationform',
  templateUrl: './registrationform.component.html',
  styleUrls: ['./registrationform.component.css']
})
export class RegistrationformComponent implements OnInit {
  addForm: FormGroup;
  submited: boolean = false
  buttonText: string  //button ka name change karne ke liye
  dbops: DBOpration   //button ka name change karne ke liye

  @ViewChild("nav") elfile: any
  users: any;
  constructor(private usersService: UsersService, private toster: ToastrService) { }
  ngOnInit(): void {
    this.setFormState()
    this.getUsers()
  }
  setFormState() {
    this.buttonText = "Submit"; //button ka name change karne ke liye
    //  this.dbops = DBOpration.submit;  //button ka name change karne ke liye

    this.addForm = new FormGroup({
      id: new FormControl(0),
      Name: new FormControl('', Validators.compose([Validators.required, Validators.pattern('^[a-zA-Z ]*$'), Validators.minLength(3), Validators.maxLength(20)])),
      Mobile: new FormControl('', Validators.compose([Validators.required, Validators.minLength(10), Validators.maxLength(10), Validators.pattern('^[0-9]*$')])),
      emailID: new FormControl('', Validators.compose([Validators.required, Validators.email])),

    },
    )
  }
  register() {
    this.submited = true
    if (this.addForm.invalid) {
      return;
    }
    this.usersService.addUser(this.addForm.value).subscribe(res => {
      this.toster.success("User Added !!", "User Registration")
      this.getUsers()
      this.resetForm()
      this.elfile.select('viewtab')
    })

  }
  resetForm() {
    this.submited = false
    this.addForm.reset()

    this.buttonText = "Save"; //button ka name change karne ke liye
    this.dbops = DBOpration.submit;  //button ka name change karne ke liye
  }
  getUsers() {
    this.usersService.getAllUsers().subscribe(res => {  // subscribe to an observable
      this.users = res;
      console.log(res);
    }
    );
  }
  edit(Id: number) {
    this.buttonText = "Update"; //button ka name change karne ke liye
    this.dbops = DBOpration.update;  //button ka name change karne ke liye
    let user = this.users.find((u:User) =>u._id === Id);
    console.log(user)
    this.addForm.patchValue(user);
    this.elfile.select("addtab");

    // this.addForm.get("password").setValue('')
    // this.addForm.get("confirmpassword").setValue('')
    // this.addForm.get("acceptTerms").setValue(false)
  }
  tabChange() {
    this.resetForm()
  }
  delete(Id: any) {
    Swal.mixin({
      customClass: {
        confirmButton: 'btn btn-success',
        cancelButton: 'btn btn-danger'
      },
      buttonsStyling: false
    })

    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Yes, delete it!',
      cancelButtonText: 'No, cancel!',
      reverseButtons: true
    }).then((result) => {
      if (result.isConfirmed) {
        this.usersService.deleteUser(Id).subscribe(res => {
          this.toster.success("Deleted Success !!", "User Deleted")
          this.getUsers();
        })
       
      } else if (
        result.dismiss === Swal.DismissReason.cancel
      ) {
        Swal.fire(
          'Cancelled',
          'Your imaginary file is safe :)',
          'error'
        )
      }
    })

    //  })

  }
  get f() { return this.addForm.controls; }

}
