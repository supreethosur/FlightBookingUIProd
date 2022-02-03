import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-submit-flight',
  templateUrl: './submit-flight.component.html',
  styleUrls: ['./submit-flight.component.scss']
})
export class SubmitFlightComponent implements OnInit {

  pnr:Number =0;

  constructor(private activatedRoute: ActivatedRoute) {
    this.activatedRoute.params.subscribe((params)=>{
      // console.log("param changed");
      this.pnr= params['pnr'];
    })
  }

  ngOnInit(): void {
  }

}
