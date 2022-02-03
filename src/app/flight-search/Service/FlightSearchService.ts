import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { SearchFlightModel } from "../Models/SearchFlightModel";
import { Observable } from "rxjs/internal/Observable";
import { ProceedBookingModel } from "../Models/ProceedBookingModel";
import { BookingHeader } from "../Models/BookingHeader";
import { FlightModel } from "../Models/FlightModel";



@Injectable({"providedIn": "root"})
export class FlightSearchService{


    constructor(private http:HttpClient){}

    getCity(city :String){
       
        // return this.http.get("http://localhost:8081/getCityStartsWith/"+ city);
        return this.http.get("http://184.72.67.167:8085/FlightBooking/getCityStartsWith/"+ city);
    }
    // proceedWithFlight(city :String){
        
    //     return this.http.get("http://localhost:8081/getCityStartsWith/");
    // }

    SearchFlight(searchFlightModel :SearchFlightModel):Observable<Map<string, FlightModel[]>> {
        
        // return this.http.post<Map<string, FlightModel[]>>("http://localhost:8081/searchFlight",searchFlightModel);
        return this.http.post<Map<string, FlightModel[]>>("http://184.72.67.167:8085/FlightBooking/searchFlight",searchFlightModel);
        
    }


    proceedWithFlight(procedBookingModel :ProceedBookingModel):Observable<BookingHeader[]> {
        
        return this.http.post<BookingHeader[]>("http://184.72.67.167:8085/FlightBooking/proceedWithFlight",procedBookingModel);
    }
}