import { TicketModel } from "./TicketModel";


export class HistoryModel{

    public pnrNo: Number;
	public  tickets : TicketModel[];
	public  status:String;
	public ticketNo :Number;
	public passangeName :String;
	public age :Number;
	public gender :String;
	public mealsType :String;
	public isBusinessClass: String ;
	public amount :Number;
	public journeyDate :String;
	public fromToLocation :String;

}