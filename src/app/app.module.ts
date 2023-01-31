import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {ReactiveFormsModule} from "@angular/forms"
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegistrationformComponent } from './registrationform/registrationform.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HttpClientModule } from '@angular/common/http';
import {BrowserAnimationsModule} from "@angular/platform-browser/animations"
import {ToastrModule} from "ngx-toastr";
@NgModule({
  declarations: [
    AppComponent,
    RegistrationformComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,   //make navbar 
    ReactiveFormsModule,
    HttpClientModule,    //make web api 
    BrowserAnimationsModule,  //Animations ke liye use hota h
    ToastrModule.forRoot()   //Animations ke liye use hota h
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
