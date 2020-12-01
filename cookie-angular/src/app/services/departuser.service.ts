import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Departuser } from '../models/departuser'

@Injectable({
  providedIn: 'root'
})
export class DepartuserService {

  private url = "https://localhost:5001/api/depusers"
  constructor(private http: HttpClient) { }

  getDepartusers() {
    return this.http.get(this.url);
  }

  getDepartuser(id: number) {
    return this.http.get(this.url + '/' + id);
  }

  createDepartuser(departuser: Departuser) {
    return this.http.post(this.url, departuser);
  }

  updateDepartuser(departuser: Departuser) {
    return this.http.put(this.url, departuser);
  }
  
  deleteDepartuser(id: number) {
    return this.http.delete(this.url + '/' + id);
  }
}
