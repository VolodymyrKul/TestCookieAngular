import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { User } from '../models/user'

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private url = "https://localhost:5001/api/users";
  constructor(private http: HttpClient) {
  }

  getUsers() {
    return this.http.get(this.url);
  }

  getUser(id: number) {
    return this.http.get(this.url + '/' + id);
  }

  createUser(user: User) {
    return this.http.post(this.url, user);
  }

  updateUser(user: User) {
    return this.http.put(this.url, user);
  }

  deleteUser(id: number) {
    return this.http.delete(this.url + '/' + id);
  }

  getCurrenUser(Token: any){
    const header = {Authorization: `Bearer ${Token}`};
    return this.http.get(this.url+"/info",{headers: header})
  }
}
