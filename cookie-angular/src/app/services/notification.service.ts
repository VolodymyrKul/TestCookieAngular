import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Notification } from '../models/notification'

@Injectable({
  providedIn: 'root'
})
export class NotificationService {

  private url = "https://localhost:5001/api/notifications"
  constructor(private http: HttpClient) { }

  getNotifications() {
    return this.http.get(this.url);
  }

  getNotification(id: number) {
    return this.http.get(this.url + '/' + id);
  }

  createNotification(notification: Notification) {
    return this.http.post(this.url, notification);
  }

  updateNotification(notification: Notification) {
    return this.http.put(this.url, notification);
  }
  
  deleteNotification(id: number) {
    return this.http.delete(this.url + '/' + id);
  }
}
