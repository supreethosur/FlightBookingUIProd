import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { userModel } from "../Models/userModel";
import { Observable } from "rxjs";
import { adminModel } from "../Models/adminModel";


@Injectable({"providedIn": "root"})
export class UserService{


    adminLogin(admin: adminModel) {
        console.log(admin)
        // return this.http.post("http://localhost:8084/authenticate", admin);
        return this.http.post("http://184.72.67.167:8085/Admin/authenticate", admin);
        
    }


    constructor(private http:HttpClient){}

    addUser(user:userModel) :Observable<userModel>{
        // return this.http.post<userModel>("http://localhost:8081/addUser", user);
        return this.http.post<userModel>("http://184.72.67.167:8085/FlightBooking/addUser", user);

        
    }

}