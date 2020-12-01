import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Department } from '../models/department'

@Injectable({
  providedIn: 'root'
})
export class DepartmentService {
  private url = "https://localhost:5001/api/departments"
  constructor(private http: HttpClient) { }

  getDepartments() {
    return this.http.get(this.url);
  }

  getDepartment(id: number) {
    return this.http.get(this.url + '/' + id);
  }

  createDepartment(department: Department) {
    return this.http.post(this.url, department);
  }

  updateDepartment(department: Department) {
    return this.http.put(this.url, department);
  }

  deleteDepartment(id: number) {
    return this.http.delete(this.url + '/' + id);
  }
}
