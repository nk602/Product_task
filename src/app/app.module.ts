import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {NgSelectModule} from "@ng-select/ng-select"
import {FormsModule, ReactiveFormsModule} from "@angular/forms"

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegistrationformComponent } from './registrationform/registrationform.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HttpClientModule } from '@angular/common/http';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { DataService } from './common/data.service'
import {BrowserAnimationsModule} from "@angular/platform-browser/animations"
import {ToastrModule} from "ngx-toastr";
import { UsersService } from './common/users.service';
@NgModule({
  declarations: [
    AppComponent,
    RegistrationformComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgSelectModule,
    FormsModule,
    NgbModule,   //make navbar 
    ReactiveFormsModule,
    HttpClientModule,    //make web api 
   // HttpClientInMemoryWebApiModule.forRoot(DataService),  //create database data
    BrowserAnimationsModule,  //Animations ke liye use hota h
    ToastrModule.forRoot()   //Animations ke liye use hota h
    
  ],
  providers: [UsersService],
  bootstrap: [AppComponent]
})
export class AppModule { }
