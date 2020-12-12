import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { RequestService } from '../../services/request.service';
import { UserreqService } from '../../services/userreq.service'
import { Request } from '../../models/request';
import { Userreq } from '../../models/userreq'

@Component({
  selector: 'app-approvereq',
  templateUrl: './approvereq.component.html',
  styleUrls: ['./approvereq.component.css']
})
export class ApprovereqComponent implements OnInit {

  id: number;
  requests: Request[];
  myrequests: Request[] = [];
  userreqs: Userreq[];
  myuserreqs: Userreq[];
  descmode: boolean = false;
  descmodearr: boolean[] = [];
  private subscription: Subscription;
  constructor(private activateRoute: ActivatedRoute, private requestService: RequestService, private userreqService: UserreqService) { 
    this.subscription = activateRoute.params.subscribe(params => this.id = params['id']);
  }

  ngOnInit(): void {
    console.log("Request");
    this.loadRequests();
    console.log("Request");
  }

  loadRequests(){
    this.userreqService.getUserreqs()
    .subscribe((data: Userreq[]) => {
      this.userreqs=data;
      this.myuserreqs = this.userreqs.filter(userreq => userreq.idApproveUser == this.id);
      this.requestService.getRequests()
        .subscribe((data: Request[]) => {
          this.requests=data;
          this.myuserreqs.forEach(item => {
            this.myrequests.push(this.requests.find(req => req.id == item.idRequest));
          })
          for(var i=0;i<this.myrequests.length;i++){
            this.descmodearr.push(false);
          }
          console.log(this.myrequests[0].userEmail);
          console.log("Request");
        });
    });
  }

  changemode(){
    this.descmode = !this.descmode;
  }

  changemodearr(r: Request){
    console.log(this.descmodearr.length);
    this.descmodearr[this.myrequests.indexOf(r)] = !this.descmodearr[this.myrequests.indexOf(r)];
    console.log(this.myrequests.indexOf(r));
  }
}
