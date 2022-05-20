class OnlyOneChild {
    name:string;
    private constructor(name:string){
        this.name=name;
    }
    static Child:OnlyOneChild=null;

    static getChild():OnlyOneChild
    {
        if(this.Child==null)
            this.Child= new OnlyOneChild("Ahmed")
        return this.Child;
    }

}
let obj:OnlyOneChild=OnlyOneChild.getChild();
console.log(obj)
let obj2:OnlyOneChild=OnlyOneChild.getChild();
console.log(obj2)
console.log(obj==obj2);