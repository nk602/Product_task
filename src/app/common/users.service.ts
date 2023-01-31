import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from './user.interface';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  //  private API_BASE_PATH: string = "http://localhost:4200/api/"
  private API_BASE_PATH =  "http://localhost:5000/product/"

  constructor(private httpClient: HttpClient) { }

  getAllUsers(){
    return this.httpClient.get(this.API_BASE_PATH)      
  }
  // getUserById(id: number) {
  //   return this.httpClient.get(`${this.API_BASE_PATH}users/${id}`)
  // }
  addUser(user: User) {
    return this.httpClient.post(`${this.API_BASE_PATH}signup`, user)
  }
  updateUser(user: User) {
    return this.httpClient.put(`${this.API_BASE_PATH}${user._id}`,user)
  }
  deleteUser(userId:User) {
    return this.httpClient.delete(`${this.API_BASE_PATH}${userId}`)
  }
}
