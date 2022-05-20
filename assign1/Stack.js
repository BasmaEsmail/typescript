"use strict";
exports.__esModule = true;
exports.Stack = void 0;
var Stack = /** @class */ (function () {
    function Stack(arrSize) {
        this.count = 0;
        this.size = 0;
        this.arr = [this.size];
        this.size = arrSize;
    }
    Stack.prototype.push = function (value) {
        if (this.count != this.size) {
            this.arr[this.count] = value;
            this.count++;
        }
        else {
            console.log("Stack is Full");
        }
    };
    Stack.prototype.pop = function () {
        var res = 0;
        if (this.count > 0) {
            this.count--;
            res = this.arr[this.count];
            return res;
        }
        else {
            throw "the stack is empty";
        }
    };
    return Stack;
}());
exports.Stack = Stack;
