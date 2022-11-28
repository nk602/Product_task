import { Injectable } from '@angular/core';
import { InMemoryDbService} from 'angular-in-memory-web-api';
import { User } from './user.interface';

@Injectable({
  providedIn: 'root'
})
export class DataService implements InMemoryDbService{

  constructor() { }
  createDb() {
    let users:User[]=[
      {
        _id:1,
        Name:"shailesh Gupta",
        Mobile:7521011630,
        emailID:"guptashailesh@gmail.com",
       
      },
    ]
    return{users}
  }
}
