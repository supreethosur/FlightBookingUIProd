import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { HistoryModel } from './Models/HistoryModel';


import { inboxService } from './Service/inboxService';

@Component({
  selector: 'app-inbox',
  templateUrl: './inbox.component.html',
  styleUrls: ['./inbox.component.scss']
})
export class InboxComponent implements OnInit {
userId: Number=0;
historyModel :HistoryModel[]=[]
searchBarForm :FormGroup;
dataAvailable: boolean=true;

  constructor(private activatedRoute: ActivatedRoute,private inboxservice:inboxService) { 
    this.searchBarForm = new FormGroup({
      searchByPNRbar: new FormControl("", [
      ])
    });

    this.activatedRoute.params.subscribe((params) => {
      this.userId = params['userId'];
      console.log(this.userId + "from flightSearch");
    })
  }

  ngOnInit(): void {
  }

  getFlightStatus(pnr:String ){

    this.inboxservice.getFlightsBookedByPnr(pnr).subscribe({
      next: (res: any) => {
        this.historyModel = res;
        console.log(JSON.stringify(res))
        console.log(JSON.stringify(this.historyModel))
        this.dataAvailable=true;
        if(this.historyModel==null){
          this.dataAvailable=false;
        }
      }
    })

  }

}
