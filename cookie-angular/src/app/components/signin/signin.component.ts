import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service'
import { AccountService } from '../../services/account.service'
import { User } from '../../models/user'
import { Useraccess } from '../../models/useraccess'
import { Router } from '@angular/router'

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css'],
  providers: [UserService, AccountService]
})
export class SigninComponent implements OnInit {
  user: User = new User();
  users: User[];
  useraccess: Useraccess;
  constructor(private userservice: UserService, private accountservicce: AccountService, private router: Router) { }

  ngOnInit(): void {
    //this.loadUsers();
    this.user.email="youremail@gmail.com";
    this.user.password="yourpassword";
    console.log("some text")
  }

  loadUsers() {
    this.userservice.getUsers()
        .subscribe((data: User[]) => this.users = data);
  }
  login(loguser: User){
    if(loguser!=null){
      console.log(loguser.email);
      loguser.password="_Aa123456";
      this.accountservicce.loginuser(loguser)
        .subscribe((data: Useraccess) => {
          this.useraccess = data;
          console.log(this.useraccess.user.email);
          localStorage.setItem("currentuser",this.useraccess.user.email);
          localStorage.setItem("token", this.useraccess.accessToken)
        });
    }
    else{
      console.log("user is null");
    }
  }
  getcurrentuser(){
    console.log(localStorage.getItem("currentuser"));
    console.log(localStorage.getItem("token"));
  }
  controllergetuser(){
    var token = localStorage.getItem("token");
    this.userservice.getCurrenUser(token)
    .subscribe((data: User) => {
      console.log(data.email);
    })
  }

  accountlogin(){
    if(this.user!=null){
      console.log(this.user.email);
      console.log(this.user.password);
      //loguser.password="_Aa123456";
      this.accountservicce.loginuser(this.user)
        .subscribe((data: Useraccess) => {
          this.useraccess = data;
          console.log(this.useraccess.user.email);
          localStorage.setItem("currentuser",this.useraccess.user.email);
          localStorage.setItem("token", this.useraccess.accessToken);
          this.router.navigate(['account', this.useraccess.user.id]);
        });
    }
    else{
      console.log("user is null");
    }    
  }
}
