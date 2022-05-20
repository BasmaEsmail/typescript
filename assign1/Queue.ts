class Queue{
    size:number=0;
    count:number=0;
    arr:number[]=[];
    start:number=0
    constructor(size:number)
    {
        this.size=size;
        this.arr.length=this.size;

    }

    add(value:number):void
    {
        if(this.count!=this.size)
        {
            this.arr[this.count]=value;
            this.count++;
        }
        else 
        {throw "Queue is Full"}
    }

    remove():number{
        let res=0;
        if(this.size!=0)
        {   
            res= this.arr[this.start];
            this.size--
            this.start++;
            return res;

        }
        else 
        throw "Queue is empty"
    }
}

let Q1:Queue=new Queue(2);
Q1.add(1000);
Q1.add(2000);
// console.log(Q1)
console.log(Q1.remove());

