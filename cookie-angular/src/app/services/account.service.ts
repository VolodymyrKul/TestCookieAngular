import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { User } from '../models/user'

@Injectable({
  providedIn: 'root'
})
export class AccountService {
  private url = "https://localhost:5001/api/auth";

  constructor(private http: HttpClient) { }

  registeruser(user: User){
    return this.http.post(this.url + '/' + "register", user);
  }

  loginuser(user: User){
    return this.http.post(this.url + '/' + "login", user);
  }
  refreshtoken(){
    return this.http.post(this.url + '/' + "refresh", null);
  }
}
