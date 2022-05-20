import { IPrintable,Calculate } from './IPrintable.interface';
import { Stack } from './Stack';
namespace Assign {
///Interface Implementation
class Rect implements IPrintable{
    width:number;
    height:number;
    constructor(w:number,h:number){
        this.width=w;
        this.height=h;
    }
    Print(): void {
       console.log("You can print me ");
    }
    CalcCircumference() :number{
        return 2*(this.width+this.height);
    }
    static WhoAmI():void{
        console.log("I am rectangle");
    }
}
let rec1:Rect=new Rect(2,3);
console.log(rec1.CalcCircumference())
Rect.WhoAmI();

class Sqr extends Rect{
    len:number;
    constructor(l:number){
        super(10,10)
        this.len=l
    }
    override CalcCircumference(): number {
        return this.len*4;
    }
    static override  WhoAmI(): void {
        console.log("I'm Square")
    }
}
let sqr1:Sqr=new Sqr(3);
console.log(sqr1.CalcCircumference());
Sqr.WhoAmI();
///////////////////Q2///////////////////////
///Type Annotaion 
let firstName:string="Mohamed"
///union type
let flag:number|boolean;
flag=1;
flag=true;
///Function with typed arguments and return type
// function Calculate(x:number):number{
//     return x+1;
// }
//////Generics & enums
function Gen<T>(arg:T):T{return arg}
enum gender{
male=0,female=1   
}
}
console.log(Calculate(3));
//////////////////  STACK   //////////////////////////////
let myStack:Stack=new Stack(3);
myStack.push(100);
myStack.push(200);
myStack.push(300);
myStack.push(400);
myStack.push(500);
console.log(myStack);
console.log(myStack.pop())
console.log(myStack.pop())


export{}