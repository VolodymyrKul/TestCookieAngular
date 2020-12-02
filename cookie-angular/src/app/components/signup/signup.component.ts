import { Component, OnInit } from '@angular/core';
import { User } from '../../models/user';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  user: User = new User(); 
  users: User[];

  constructor(private userservice: UserService) { }

  ngOnInit(): void {
  }

  register(): void {
    this.user.iduserrole=3;
    this.user.notificationPermission="+";
    this.user.registerDate = new Date().toUTCString();
    this.userservice.createUser(this.user);
    console.log("Register complete");
  }
}
