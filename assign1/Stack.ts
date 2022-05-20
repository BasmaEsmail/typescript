export class Stack{
    count:number=0;
    size:number=0;
    arr:number[]=[this.size];

    constructor(arrSize){
        this.size=arrSize
    }
    push(value:number):void{
        if(this.count!=this.size)
        {
            this.arr[this.count]=value;
            this.count++;
        }
        else 
        { console.log( "Stack is Full")}
        
    }
    pop():number{
        let res=0;
        if(this.count>0)
        {
            this.count--;
            res= this.arr[this.count]
            return res;
        }
        else 
        {
            throw "the stack is empty"
        }
        
    }
}