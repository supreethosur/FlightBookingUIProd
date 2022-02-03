export class FlightModel{

    public flightId: Number;
   
  
	public journeyId: Number;
   
    
	public flightName: String; 
   
   
	public airline: String;
    
    
   
	public departureDate: String;
    
   
	public departureTime: String;
    
    
	public arrivalDate: String;
    
    
	public arrivalTime: String;
    
    
	public fromLocation: String;
    
    
	public toLocation: String;
    
    
	public businessSeats: Number;
    
    
	public nonBusinessSeats: Number;
    
    
	public scheduleType: String;
    
    
	public amount: Number;
    
    


constructor(airline: String,fromLocation: String,toLocation :String,flightName :String ,journeyId :Number,
    departureDate:String,departureTime:String,arrivalDate:String,arrivalTime:String,
    businessSeats:Number,nonBusinessSeats:Number,amount:Number,scheduleType: String){
        this.airline=airline;
        this.fromLocation=fromLocation;
        this.toLocation=toLocation;
        this.flightName=flightName;
        this.journeyId=journeyId;
        this.departureDate=departureDate;
        this.departureTime=departureTime;
        this.arrivalDate=arrivalDate;
        this.arrivalTime=arrivalTime;
        this.businessSeats=businessSeats;
        this.nonBusinessSeats=nonBusinessSeats;
        this.amount=amount;
        this.scheduleType=scheduleType;
    }







    // private airline: String;
    // private fromLocation: String;
    // private toLocation :String;
    // private flightName :String;
    // private journeyId :String;

    // public getairline(): String {
    //     return this.airline;
    // }
    // public setairline(value: String) {
    //     this.airline = value;
    // }

    // public getfromLocation(): String {
    //     return this.fromLocation;
    // }
    // public setfromLocation(value: String) {
    //     this.fromLocation = value;
    // }

    // public gettoLocation(): String {
    //     return this.toLocation;
    // }
    // public settoLocation(value: String) {
    //     this.toLocation = value;
    // }

    // public getflightName(): String {
    //     return this.flightName;
    // }
    // public setflightName(value: String) {
    //     this.flightName = value;
    // }
    // public getjourneyId(): String {
    //     return this.journeyId;
    // }
    // public setjourneyId(value: String) {
    //     this.journeyId = value;
    // }

    // constructor(airline: String,fromLocation: String,toLocation :String,flightName :String ,journeyId :String){
    //     this.airline=airline;
    //     this.fromLocation=fromLocation;
    //     this.toLocation=toLocation;
    //     this.flightName=flightName;
    //     this.journeyId=journeyId;
    // }
    


}