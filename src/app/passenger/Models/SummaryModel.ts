import { FinalAmount } from "./FinalAmount";
import { PassangerModel } from "./PassangerModel";

export class SummaryModel{

    public passangerList: PassangerModel[];
    // public get passangerList(): PassangerModel[] {
    //     return this._passangerList;
    // }
    // public set passangerList(value: PassangerModel[]) {
    //     this._passangerList = value;
    // }
	
	public amount: FinalAmount;
    // public get amount(): FinalAmount {
    //     return this._amount;
    // }
    // public set amount(value: FinalAmount) {
    //     this._amount = value;
    // }


}