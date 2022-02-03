import { Component, Injectable, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { Router } from '@angular/router';
import { adminModel } from './Models/adminModel';
import { userModel } from './Models/userModel';
import { UserService } from './Service/UserService';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;
  adminloginForm: FormGroup;
  userName: String = "";
  emailId: String = "";
  adminId: String = "";
  password: String = "";
  userModelop : userModel ;
  unAuthorisedError:boolean=false;
 
  // private router: Router=new Router();
  // constructor (private router: Router){
  // }
  userId :number=0;

  ngOnInit(): void {
  }

  constructor(private router:Router,private userDetails :UserService) {
    console.log("Hello");
    this.loginForm = new FormGroup({
      username: new FormControl("", [
        // Validators.pattern(""),
        Validators.required,
        Validators.minLength(4),
        Validators.maxLength(8)
      ]),
      emailId: new FormControl("", [
        Validators.required,
        Validators.pattern("[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$")
      ])
    });

    this.adminloginForm = new FormGroup({
      adminId: new FormControl("", [
        // Validators.pattern(""),
        Validators.required,
      ]),
      password: new FormControl("", [
        Validators.required,
      ])
    });
  }
  

  getLogin(username: String, emailId: String) {
    this.userName = username;
    this.emailId = emailId;
    let user = new userModel(0,this.userName,this.emailId);
    console.log(user)
    this.userDetails.addUser(user).subscribe({
      next: (res: any) => {
        console.log("inside ajax call");
        console.log(res);
        this.userModelop=res;
        if(this.userModelop !=null){
          this.router.navigate(["FlightSearch", this.userModelop.userId]);
        }
      }
    })
    console.log("after ajax call")
  }


  getAdminLogin(adminId: String, password: String) {
    this.adminId = adminId;
    this.password = password;
    let admin = new adminModel(adminId,password);
    console.log(JSON.stringify(admin));
    this.userDetails.adminLogin(admin).subscribe({
      next: (res: any) => {
        console.log(res['token']);
        this.router.navigate(["admin", ""]);
        localStorage.setItem("token", res['token']);
      },
      error: (err) => {
        console.log("unauthorised")
        this.unAuthorisedError=true;
        console.log(err)
      }
    })

    
    console.log(adminId);
    console.log(password);
  }

}
