import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { FlightModel } from "src/app/flight-search/Models/FlightModel";
import { Observable } from "rxjs";




@Injectable({"providedIn": "root"})
export class adminService{
  token:string|null = null;
  constructor(private http:HttpClient){}
  

    addNewFlight(flightModel: FlightModel) :Observable<FlightModel>{
      this.token = localStorage.getItem("token");
      // return this.http.post<FlightModel>("http://localhost:8084/addFlights", flightModel, {headers: {"Authorization": "Bearer "+this.token}});
      return this.http.post<FlightModel>("http://184.72.67.167:8085/Admin/addFlights", flightModel, {headers: {"Authorization": "Bearer "+this.token}});
    }

    getFlights(flightName:String) : Observable<FlightModel[]>{
        // return this.http.get<FlightModel[]>("http://localhost:8082/GetAllFlights?FlightName="+flightName);
        return this.http.get<FlightModel[]>("http://184.72.67.167:8085/Flight/GetAllFlights?FlightName="+flightName);
    }

    deleteFlight(flightId:Number){
      this.token = localStorage.getItem("token");
      return this.http.delete("http://184.72.67.167:8085/Admin/deleteFlight/"+flightId, {headers: {"Authorization": "Bearer "+this.token}});
  }
}