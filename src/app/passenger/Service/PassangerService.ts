import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs/internal/Observable";


import { PassangerModel } from "../Models/PassangerModel";
import { TicketDetailsModel } from "../Models/TicketDetailsModel";
import { SummaryModel } from "../Models/SummaryModel";
import { BookingHeader } from "src/app/flight-search/Models/BookingHeader";



@Injectable({"providedIn": "root"})
export class PassangerService{


    constructor(private http:HttpClient){}

    

    savePassangerDetails(passengerModel :PassangerModel):Observable<TicketDetailsModel> {
        console.log(JSON.stringify(passengerModel))
        // return this.http.post<TicketDetailsModel>("http://localhost:8081/addPassanger",passengerModel);
        return this.http.post<TicketDetailsModel>("http://184.72.67.167:8085/FlightBooking/addPassanger",passengerModel);
    }


    getSummary(pnr:Number):Observable<SummaryModel>{
        // return this.http.get<SummaryModel>("http://localhost:8081/getSummary?pnrNumber="+pnr);
        return this.http.get<SummaryModel>("http://184.72.67.167:8085/FlightBooking/getSummary?pnrNumber="+pnr);
    }

    deleteTicket(ticketno:Number) {
        
        // return this.http.post("http://localhost:8081/deletePassanger?ticketNo="+ticketno,null);
        return this.http.post("http://184.72.67.167:8085/FlightBooking/deletePassanger?ticketNo="+ticketno,null);
    }
    finalSubmission(pnrList:Number[]):Observable<BookingHeader[]> {
        
        // return this.http.post<BookingHeader[]>("http://localhost:8081/finalSubmission",pnrList);
        return this.http.post<BookingHeader[]>("http://184.72.67.167:8085/FlightBooking/finalSubmission",pnrList);
    }

}