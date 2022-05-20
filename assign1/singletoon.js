var OnlyOneChild = /** @class */ (function () {
    function OnlyOneChild(name) {
        this.name = name;
    }
    OnlyOneChild.getChild = function () {
        if (this.Child == null)
            this.Child = new OnlyOneChild("Ahmed");
        return this.Child;
    };
    OnlyOneChild.Child = null;
    return OnlyOneChild;
}());
var obj = OnlyOneChild.getChild();
console.log(obj);
var obj2 = OnlyOneChild.getChild();
console.log(obj2);
console.log(obj == obj2);
