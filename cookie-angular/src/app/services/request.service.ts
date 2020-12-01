import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Request } from '../models/request'

@Injectable({
  providedIn: 'root'
})
export class RequestService {

  private url = "https://localhost:5001/api/requests"
  constructor(private http: HttpClient) { }

  getRequests() {
    return this.http.get(this.url);
  }

  getRequest(id: number) {
    return this.http.get(this.url + '/' + id);
  }

  createRequest(request: Request) {
    return this.http.post(this.url, request);
  }

  updateRequest(request: Request) {
    return this.http.put(this.url, request);
  }
  
  deleteRequest(id: number) {
    return this.http.delete(this.url + '/' + id);
  }
}
