import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { FlightModel } from '../flight-search/Models/FlightModel';

import { adminService } from './Service/adminService';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {
  searchFlightsForm: FormGroup;
  addFlight: FormGroup;
  isFormRequired: Number =0;
  flightModel:FlightModel;
  token:string|null = null;
  constructor(private adminservice:adminService) { 
    this.searchFlightsForm = new FormGroup({
      searchbar: new FormControl("", [
        // Validators.pattern(""),
        
      ])
    });

    this.addFlight = new FormGroup({
      flightName: new FormControl("", [
      ]),
      airline: new FormControl("", [
      ]),
      // departureDate: new FormControl("", [
      // ]),
      departureTime: new FormControl("", [
      ]),
      arrivalTime: new FormControl("", [
      ]),
      arrivalDate: new FormControl("", [
      ]),
      fromLocation: new FormControl("", [
      ]),
      toLocation: new FormControl("", [
      ]),
      businessSeats: new FormControl("", [
      ]),
      nonBusinessSeats: new FormControl("", [
      ]),
      scheduleType: new FormControl("", [
      ]),
      amount: new FormControl("", [
      ])
    })
    this.getFlights("");
    this.token = localStorage.getItem("token");
  }
  flightsList:  FlightModel[];
  ngOnInit(): void {
   
  }
  schedule_Type = [
    'Daily',
    'Week-Days',
    'Week-Ends'
  ];



  addNewFlight(flightName:String,airline:String,departureDate:String,
    departureTime:String,arrivalDate:String,arrivalTime:String,fromLocation:String,
    toLocation:String,businessSeats:String,
    nonBusinessSeats:String,scheduleType:String,amount:String){
    console.log(JSON.stringify(scheduleType))
    this.flightModel=new FlightModel(airline,fromLocation,toLocation ,flightName  ,0 
      ,departureDate,departureTime+".00",arrivalDate,arrivalTime+".00",Number(businessSeats),
      Number(nonBusinessSeats),Number(amount),scheduleType);
    console.log("inside service")
    console.log(JSON.stringify(this.flightModel))
    this.adminservice.addNewFlight(this.flightModel).subscribe({
      next: (res: FlightModel) => {
        console.log(res);
        this.getFlights("");
      }
    })
  }

  


  getFlights(flightName:String){
    console.log("hello");
    this.adminservice.getFlights(flightName).subscribe({
      next: (res: any) => {
        this.flightsList = res;
        // let temp: FlightModel[] |undefined =;
      }
    })

  }


  generateForm(){

    if(this.isFormRequired==0){
      this.isFormRequired=1;
    }
    else{
      this.isFormRequired=0;
    }
  }


  deleteFlight(flightid:Number){
    console.log(flightid)
    this.adminservice.deleteFlight(flightid).subscribe({
      next: (res: any) => {
        this.getFlights("");
      }
    })
  }


}
