import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { User } from '../../models/user';
import { UserService } from '../../services/user.service'
 
@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css']
})
export class AccountComponent implements OnInit {

  id: number;
  accountuser: User;
  private subscription: Subscription;
  constructor(private activateRoute: ActivatedRoute, private userservice: UserService) { 
    this.subscription = activateRoute.params.subscribe(params => this.id = params['id']);
  }

  ngOnInit(): void {
    this.userservice.getUser(this.id)
    .subscribe((data: User)=> {
      this.accountuser = data;
    })
  }
}
