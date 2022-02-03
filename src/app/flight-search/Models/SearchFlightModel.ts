export class SearchFlightModel{
	public travelStartDate: String;
    // public gettravelStartDate(): String {
    //     return this.travelStartDate;
    // }
    // public settravelStartDate(value: String) {
    //     this.travelStartDate = value;
    // }
	public travelReturnDate: String;
    // public gettravelReturnDate(): String {
    //     return this.travelReturnDate;
    // }
    // public settravelReturnDate(value: String) {
    //     this.travelReturnDate = value;
    // }
	public fromPlace: String;
    // public getfromPlace(): String {
    //     return this.fromPlace;
    // }
    // public setfromPlace(value: String) {
    //     this.fromPlace = value;
    // }
	public toPlace: String;
    // public gettoPlace(): String {
    //     return this.toPlace;
    // }
    // public settoPlace(value: String) {
    //     this.toPlace = value;
    // }
	public oneWayTrip: boolean;
    // public getisOneWayTrip(): boolean {
    //     return this.oneWayTrip;
    // }
    // public setisOneWayTrip(value: boolean) {
    //     this.oneWayTrip = value;
    // }


constructor(travelStartDate: String,travelReturnDate: String,fromPlace: String,toPlace: String,oneWayTrip: boolean){
this.travelStartDate=travelStartDate;
this.travelReturnDate=travelReturnDate;
this.fromPlace=fromPlace;
this.toPlace=toPlace;
this.oneWayTrip=oneWayTrip;


}


}