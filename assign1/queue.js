var Queue = /** @class */ (function () {
    function Queue(size) {
        this.size = 0;
        this.count = 0;
        this.arr = [];
        this.start = 0;
        this.size = size;
        this.arr.length = this.size;
    }
    Queue.prototype.add = function (value) {
        if (this.count != this.size) {
            this.arr[this.count] = value;
            this.count++;
        }
        else {
            throw "Queue is Full";
        }
    };
    Queue.prototype.remove = function () {
        var res = 0;
        if (this.size != 0) {
            res = this.arr[this.start];
            this.size--;
            this.start++;
            return res;
        }
        else
            throw "Queue is empty";
    };
    return Queue;
}());
var Q1 = new Queue(2);
Q1.add(1000);
Q1.add(2000);
// console.log(Q1)
console.log(Q1.remove());
