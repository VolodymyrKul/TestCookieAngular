import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Userrole } from '../models/userrole'

@Injectable({
  providedIn: 'root'
})
export class UserroleService {
  private url = "https://localhost:5001/api/userroles"
  constructor(private http: HttpClient) { }

  getUserroles() {
    return this.http.get(this.url);
  }

  getUserrole(id: number) {
    return this.http.get(this.url + '/' + id);
  }

  createUserrole(userrole: Userrole) {
    return this.http.post(this.url, userrole);
  }

  updateUserrole(userrole: Userrole) {
    return this.http.put(this.url, userrole);
  }
  
  deleteUserrole(id: number) {
    return this.http.delete(this.url + '/' + id);
  }
}
