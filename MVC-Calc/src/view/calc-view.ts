import { CalcController} from "../controller";

export class CalcView{
    private _input1:number = 0;
    private _input2:number = 0;

    Controller : CalcController | undefined;

    Equals(a:number, b:number, op:string)
    {
        return this.Controller.Equals(a,b,op);
    }
}