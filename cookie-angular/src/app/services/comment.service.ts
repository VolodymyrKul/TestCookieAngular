import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Comment } from '../models/comment'

@Injectable({
  providedIn: 'root'
})
export class CommentService {
  private url = "https://localhost:5001/api/comments"
  constructor(private http: HttpClient) { }

  getComments() {
    return this.http.get(this.url);
  }

  getComment(id: number) {
    return this.http.get(this.url + '/' + id);
  }

  createComment(comment: Comment) {
    return this.http.post(this.url, comment);
  }

  updateComment(comment: Comment) {
    return this.http.put(this.url, comment);
  }
  
  deleteComment(id: number) {
    return this.http.delete(this.url + '/' + id);
  }
}
