import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class UserService {

  private api = 'http://localhost:3000/api'

  constructor(private http: HttpClient) { }

  displayAllUsers(url:any){
    // console.warn(user)
    return this.http.get(`${this.api+url}`)
  }

  addNewUser(url:any , user:any){
    console.warn(user)
    return this.http.post(`${this.api+url}`,user)
  }

  updateUserData(url:any , userData:any){
    console.warn(userData)
    return this.http.put(`${this.api+url}`,userData)
  }

  deleteUser(url:any ){
    // console.warn(user)
    return this.http.delete(`${this.api+url}`)
  }
}
