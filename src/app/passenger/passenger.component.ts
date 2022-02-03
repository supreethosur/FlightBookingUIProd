import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { ActivatedRoute, Router } from '@angular/router';
import { BookingHeader } from '../flight-search/Models/BookingHeader';
import { ProceedBookingModel } from '../flight-search/Models/ProceedBookingModel';
import { FinalAmount } from './Models/FinalAmount';
import { PassangerModel } from './Models/PassangerModel';
import { SummaryModel } from './Models/SummaryModel';
import { PassangerService } from './Service/PassangerService';
@Component({
  selector: 'app-passenger',
  templateUrl: './passenger.component.html',
  styleUrls: ['./passenger.component.scss']
})
export class PassengerComponent implements OnInit {

  ngOnInit(): void {
  }
submitted:Number=0;
  addPassanger: FormGroup;
  passangerName: String = "";
  gender: String = "";
  mealsType: String = "";
  journeyId:String="";
  isFormRequired:Number =0;
  addpassangerModel: PassangerModel =new PassangerModel();
  pnr:Number =29;
  userId:Number=0;
  summaryModel :SummaryModel= new SummaryModel();
  amount: FinalAmount=new FinalAmount();
  proceedIpModel: ProceedBookingModel = new ProceedBookingModel();
  pnrList :Number[]=[];
  finalSubmittedData :BookingHeader[]=[];
  constructor(private activatedRoute: ActivatedRoute,
    private passangerService: PassangerService,
    private router: Router) {

    this.addPassanger = new FormGroup({
      passangerName: new FormControl("", [
        Validators.required
      ]),
      gender: new FormControl("", [
        Validators.required
      ]),
      mealsType: new FormControl("", [
        Validators.required
      ]),
      isBusinessClass: new FormControl("", [
        Validators.required
      ]),
      age: new FormControl("", [
        Validators.required
      ])

    })
    this.activatedRoute.params.subscribe((params)=>{
      // console.log("param changed");
      
      this.proceedIpModel = JSON.parse(params['jsonValue']);
      console.log(JSON.stringify(this.proceedIpModel) + "from passanger");
      console.log(this.proceedIpModel.pnr+" pnr");
      console. dir(this.proceedIpModel +" obj")
      this.pnr=this.proceedIpModel.pnr;
      this.userId=this.proceedIpModel.userId;

    })
  }
  Classes = [
    'Business',
    'Non-Business'
  ];
  genderType = [
    'Male',
    'Female'
  ];

  MealsType = [
    'Veg',
    'Non-Veg'
  ];

  savePassangerDetails(passangerName: String,age: String, gender: String, MealsType: String, isBusinessClass: String) {

    console.log(passangerName + " " + gender + " " + MealsType+" "+ age +" "+isBusinessClass+" "+this.pnr)

    this.addpassangerModel.passangerName=passangerName;
    this.addpassangerModel.age=Number(age);
    this.addpassangerModel.gender=gender;
    this.addpassangerModel.mealsType=MealsType;
    if(isBusinessClass=="Business"){
      this.addpassangerModel.businessClass=true;
    }
    else{
      this.addpassangerModel.businessClass=false;
    }
    this.addpassangerModel.userId=this.userId
    this.addpassangerModel.pnrNumber=this.pnr;
    console.log(JSON.stringify(this.addpassangerModel)+ " before");
    
      this.passangerService.savePassangerDetails(this.addpassangerModel).subscribe({
        next: (res: any) => {
          console.log(JSON.stringify(res))
          this.loadSummary(this.pnr);
          this.generateForm();
        }
      })
  }

  loadSummary(pnr:Number){
    this.passangerService.getSummary(pnr).subscribe({
      next: (res:any) => {
        console.log()
        console.log("summary  fetched")
        this.summaryModel = res;
        this.amount=this.summaryModel.amount;
        console.log(JSON.stringify(this.summaryModel))
      },
      error: (err) => {
        console.log("something went wrong")
        console.log(err)
      }
    })
  }

  generateForm(){
    console.log(this.userId);
    console.log(this.pnr);

    if(this.isFormRequired==0){
      this.isFormRequired=1;
    }
    else{
      this.isFormRequired=0;
    }
  }



  deleteTicket(ticketNo:Number){
    console.log(ticketNo);
    this.passangerService.deleteTicket(ticketNo).subscribe({
      next: (res: any) => {
        console.log(JSON.stringify(res))
        this.loadSummary(this.pnr);
      }
    })
  }

  finalSubmission(){
    this.pnrList[0]=this.pnr;
    this.passangerService.finalSubmission(this.pnrList).subscribe({
      next: (res: any) => {
        console.log(JSON.stringify(res))
        if(res!=null){
          this.finalSubmittedData=res

          this.router.navigate(["submit",this.finalSubmittedData[0].pnrNumber]);

        }
      }
    })
  }

}
