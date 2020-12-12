import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { User } from '../../models/user';
import { UserService } from '../../services/user.service'
import { Router } from "@angular/router"
 
@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css']
})
export class AccountComponent implements OnInit {

  id: number;
  accountuser: User;
  cardName: string;
  private subscription: Subscription;
  constructor(private activateRoute: ActivatedRoute, private userservice: UserService, private router: Router) { 
    this.subscription = activateRoute.params.subscribe(params => this.id = params['id']);
  }

  ngOnInit(): void {
    this.userservice.getUser(this.id)
    .subscribe((data: User)=> {
      this.accountuser = data;
      this.cardName = this.accountuser.firstName + " " + this.accountuser.lastName;
    })
  }

  requestopen(){
    this.router.navigate(['requests', this.id.toString()]);
  }

  approveopen(){
    this.router.navigate(['userreqs', this.id.toString()]);
  }
}
