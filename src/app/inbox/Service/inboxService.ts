import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { HistoryModel } from "../Models/HistoryModel";


@Injectable({"providedIn": "root"})
export class inboxService{


    constructor(private http:HttpClient){}

    getFlightsBookedByPnr(emailOrPNR :String) :Observable<HistoryModel[]>{
       
        return this.http.get<HistoryModel[]>("http://184.72.67.167:8085/FlightBooking/getHistoryByemailId?emailId="+ emailOrPNR);
    }

}