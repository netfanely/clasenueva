import {CalcModel} from "../model";

export class CalcController{

    Model : CalcModel | undefined;

    Equals(a:number, b:number, op:string)
    {
        switch (op)
        {
            case "+":
               return this.Model.sum(a,b);
            
            case "-":
                return this.Model.sub(a,b);
            
            case "/":
                return this.Model.div(a,b);
            
            case "*":
                return this.Model.mult(a,b);
            
        }
    }



}