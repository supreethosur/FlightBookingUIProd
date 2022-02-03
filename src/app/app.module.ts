import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FlightSearchComponent } from './flight-search/flight-search.component';
import { LoginComponent } from './login/login.component';
import { UserFlightDisplayComponent } from './user-flight-display/user-flight-display.component';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { RouterModule, Routes } from "@angular/router";
import { PassengerComponent } from './passenger/passenger.component';
import { HttpClientModule } from "@angular/common/http";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ScrollingModule} from  '@angular/cdk/scrolling';
import { SubmitFlightComponent } from './submit-flight/submit-flight.component';
import { AdminComponent } from './admin/admin.component';
import { InboxComponent } from './inbox/inbox.component';
const routes:Routes = [
  { path: "Login", component: LoginComponent },
  { path: "FlightSearch/:userId", component: FlightSearchComponent },
  { path: "passenger/:jsonValue", component: PassengerComponent },
  { path: "UserFlightDisplay", component: UserFlightDisplayComponent },
  { path: "submit/:pnr", component: SubmitFlightComponent},
  { path: "admin/", component: AdminComponent},
  { path: "inbox/:userId", component: InboxComponent},
  { path: "**", redirectTo: "Login" }
]

@NgModule({
  declarations: [
    AppComponent,
    FlightSearchComponent,
    LoginComponent,
    UserFlightDisplayComponent,
    PassengerComponent,
    SubmitFlightComponent,
    AdminComponent,
    InboxComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    RouterModule.forRoot(routes),
    HttpClientModule, 
    BrowserAnimationsModule,
    ScrollingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
