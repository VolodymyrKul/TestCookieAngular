import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Userreq } from '../models/userreq'

@Injectable({
  providedIn: 'root'
})
export class UserreqService {

  private url = "https://localhost:5001/api/userrequests"
  constructor(private http: HttpClient) { }

  getUserreqs() {
    return this.http.get(this.url);
  }

  getUserreq(id: number) {
    return this.http.get(this.url + '/' + id);
  }

  createUserreq(userreq: Userreq) {
    return this.http.post(this.url, userreq);
  }
  
  updateUserreq(userreq: Userreq) {
    return this.http.put(this.url, userreq);
  }

  deleteUserreq(id: number) {
    return this.http.delete(this.url + '/' + id);
  }
}
