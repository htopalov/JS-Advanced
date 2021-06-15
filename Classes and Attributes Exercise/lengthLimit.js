class Stringer{
    constructor(str,length){
        this.innerString  = str;
        this.innerLength = Number(length);
    }
    increase(length){
        this.innerLength += Number(length);
    }
    decrease(length){
        if ((this.innerLength - Number(length)) < 0) {
            this.innerLength = 0;
        } else {
            this.innerLength -= Number(length);
        }
    }
    toString(){
        if (this.innerString.length > this.innerLength) {
            let diff = this.innerString.length - this.innerLength;
            return this.innerString.slice(0,-diff)+'...';
        } else if (this.innerLength == 0) {
            return '...';
        } else {
            return this.innerString;
        }
    }
}

let test = new Stringer("Test", 5);
console.log(test.toString()); // Test

test.decrease(3);
console.log(test.toString()); // Te...

test.decrease(5);
console.log(test.toString()); // ...

test.increase(4); 
console.log(test.toString()); // Test


