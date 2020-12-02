import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { RequestService } from '../../services/request.service';
import { Request } from '../../models/request';

@Component({
  selector: 'app-requests',
  templateUrl: './requests.component.html',
  styleUrls: ['./requests.component.css']
})
export class RequestsComponent implements OnInit {

  id: number;
  requests: Request[];
  myrequests: Request[];
  private subscription: Subscription;
  constructor(private activateRoute: ActivatedRoute, private requestService: RequestService) { 
    this.subscription = activateRoute.params.subscribe(params => this.id = params['id']);
  }

  ngOnInit(): void {
    console.log("Request");
    this.loadRequests();
    console.log("Request");
  }

  loadRequests(){
    this.requestService.getRequests()
    .subscribe((data: Request[]) => {
      this.requests=data;
      this.myrequests = this.requests.filter(request => request.idUser == this.id);
      //this.myrequests[0].createdate=new Date().toString();
      console.log(this.myrequests[0].endDate);
      console.log("Request");
    });
  }
}
