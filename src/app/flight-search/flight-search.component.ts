import { Component, OnInit } from '@angular/core';
import { FlightModel } from './Models/FlightModel';
import { ActivatedRoute, Router } from '@angular/router';
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { FlightSearchService } from './Service/FlightSearchService';
import { ProceedBookingModel } from './Models/ProceedBookingModel';
import { JourneyInputModel } from './Models/JourneyInputModel';
import { SearchFlightModel } from './Models/SearchFlightModel';
import { BookingHeader } from './Models/BookingHeader';


@Component({
  selector: 'app-flight-search',
  templateUrl: './flight-search.component.html',
  styleUrls: ['./flight-search.component.scss']
})
export class FlightSearchComponent implements OnInit {

  // userId:number=0;

  searchForm: FormGroup;
  ListFlightsForm: FormGroup;
  tripType: String = "";
  fromLocation: String = ""; 
  toLocation: String = "";
  startDate: String = "";
  returnDate: String = "";
  journeyId: Number = 0;
  selectedDepartureDate : String= "";
  userId: Number = 0;
  proceedIpModel: ProceedBookingModel = new ProceedBookingModel();
  journeyInputModelList: Array<JourneyInputModel> = [];
  journeyIpModel: JourneyInputModel=new JourneyInputModel;
  searchFlightModel: SearchFlightModel;
  flightList: FlightModel[]  = [];
  flightsOutPut: Map<string, FlightModel[]>;
  bookingHeaderList: BookingHeader[] = [];
  dataAvailable: boolean=true;

  constructor(private activatedRoute: ActivatedRoute,
    private router: Router,
    private flightservice: FlightSearchService) {
    console.log("Hello");
    this.searchForm = new FormGroup({
      // tripType: new FormControl("", [
      //   Validators.required
      // ]),
      fromLocation: new FormControl("", [
        Validators.required
      ]),
      toLocation: new FormControl("", [
        Validators.required
      ]),
      startDate: new FormControl("", [
        Validators.required
      ]),
      returnDate: new FormControl("", [
        // Validators.required
      ])
    });
    this.ListFlightsForm = new FormGroup({
      // tripType: new FormControl("", [
      //   Validators.required
      // ]),
      fromLocation: new FormControl("", [
        Validators.required
      ]),
      toLocation: new FormControl("", [
        Validators.required
      ]),
      startDate: new FormControl("", [
        Validators.required
      ]),
      returnDate: new FormControl("", [
        // Validators.required
      ])
    });

    this.activatedRoute.params.subscribe((params) => {
      // console.log("param changed");

      this.userId = params['userId'];
      console.log(this.userId + "from flightSearch");
    })


  }

  ngOnInit(): void {
  }

  trip_Type = [
    'One Way',
    'Two Way'
  ];

  getFlights(trip_Type: String, fromLocation: String, toLocation: String, startDate: String, returnDate: String) {
    console.log("search Flights");
    this.tripType = trip_Type;
    this.fromLocation = fromLocation;
    this.toLocation = toLocation;
    this.startDate = startDate;
    this.returnDate = returnDate;

    this.searchFlightModel = new SearchFlightModel(startDate, returnDate, fromLocation, toLocation, (this.tripType === 'One Way') ? true : false);
    console.log("service op before" + this.flightsOutPut);
    console.log(JSON.stringify(this.searchFlightModel));
    this.flightservice.SearchFlight(this.searchFlightModel).subscribe({
      next: (res: any) => {
        this.flightsOutPut = res;
        // let temp: FlightModel[] |undefined =;
        console.log(res['1']);
        this.flightList = res['1'];
        this.dataAvailable=true;
        
        if(this.flightList.length==0){
          console.log("empty");
          this.dataAvailable=false;
        }
      }
    })
    console.log("service op after" + this.flightsOutPut);
    console.log(trip_Type + " " + fromLocation + " " + toLocation + " " + startDate + " " + returnDate);
  }





  proceedforBooking() {
    console.log(this.userId +"before");
    this.proceedIpModel.userId =this.userId; //this.userId;
    console.log(this.userId + " after")
    if (this.tripType == "One Way") {
      this.proceedIpModel.oneWaytrip = true;
    }
    else {
      this.proceedIpModel.oneWaytrip = false;
    }
    this.journeyIpModel.journeyId=this.journeyId;
    this.journeyIpModel.journeyDate=this.selectedDepartureDate;
    this.journeyInputModelList[0]=this.journeyIpModel;
    this.proceedIpModel.journeyInputModel=this.journeyInputModelList;
    console.log(JSON.stringify(this.proceedIpModel));
    this.flightservice.proceedWithFlight(JSON.parse(JSON.stringify(this.proceedIpModel).replace(/[_]/g, ""))).subscribe({
      next: (res: BookingHeader[]) => {
        console.log(res);
        this.bookingHeaderList=res;
        console.log(JSON.stringify(res) +" resp");
        console.log( JSON.stringify(this.bookingHeaderList) +" resp1");
        this.proceedIpModel.pnr=this.bookingHeaderList[0].pnrNumber;
        console.log(JSON.stringify(this.proceedIpModel));
        this.router.navigate(["passenger",JSON.stringify(this.proceedIpModel)]);
      }
    })
    
  }

  change(journeyId: any,departureDate :any) {
    this.journeyId = journeyId;
    this.selectedDepartureDate=departureDate;
    console.log(journeyId);
    console.log(departureDate)
  }
  cities: string[] = [];

  getCity(city: String) {

    this.flightservice.getCity(city).subscribe({
      next: (res: any) => {
        console.log("inside rest call")
        this.cities = res;
      }
    })
  }

  getInbox(){

    this.router.navigate(["inbox",this.userId]);


  }



}
