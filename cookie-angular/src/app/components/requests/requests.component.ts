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
  descmode: boolean = false;
  descmodearr: boolean[] = [];
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
      for(var i=0;i<this.myrequests.length;i++){
        this.descmodearr.push(false);
      }
      console.log(this.myrequests[0].status);
      console.log("Request");
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
