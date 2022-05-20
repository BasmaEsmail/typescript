"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
var IPrintable_interface_1 = require("./IPrintable.interface");
var Stack_1 = require("./Stack");
var Assign;
(function (Assign) {
    ///Interface Implementation
    var Rect = /** @class */ (function () {
        function Rect(w, h) {
            this.width = w;
            this.height = h;
        }
        Rect.prototype.Print = function () {
            console.log("You can print me ");
        };
        Rect.prototype.CalcCircumference = function () {
            return 2 * (this.width + this.height);
        };
        Rect.WhoAmI = function () {
            console.log("I am rectangle");
        };
        return Rect;
    }());
    var rec1 = new Rect(2, 3);
    console.log(rec1.CalcCircumference());
    Rect.WhoAmI();
    var Sqr = /** @class */ (function (_super) {
        __extends(Sqr, _super);
        function Sqr(l) {
            var _this = _super.call(this, 10, 10) || this;
            _this.len = l;
            return _this;
        }
        Sqr.prototype.CalcCircumference = function () {
            return this.len * 4;
        };
        Sqr.WhoAmI = function () {
            console.log("I'm Square");
        };
        return Sqr;
    }(Rect));
    var sqr1 = new Sqr(3);
    console.log(sqr1.CalcCircumference());
    Sqr.WhoAmI();
    ///////////////////Q2///////////////////////
    ///Type Annotaion 
    var firstName = "Mohamed";
    ///union type
    var flag;
    flag = 1;
    flag = true;
    ///Function with typed arguments and return type
    // function Calculate(x:number):number{
    //     return x+1;
    // }
    //////Generics & enums
    function Gen(arg) { return arg; }
    var gender;
    (function (gender) {
        gender[gender["male"] = 0] = "male";
        gender[gender["female"] = 1] = "female";
    })(gender || (gender = {}));
})(Assign || (Assign = {}));
console.log((0, IPrintable_interface_1.Calculate)(3));
//////////////////  STACK   //////////////////////////////
var myStack = new Stack_1.Stack(3);
myStack.push(100);
myStack.push(200);
myStack.push(300);
myStack.push(400);
myStack.push(500);
console.log(myStack);
console.log(myStack.pop());
console.log(myStack.pop());
