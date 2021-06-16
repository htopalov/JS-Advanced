class Hex{
    constructor(number){
        this.number = Number(number);
    }

    valueOf(){
        return this.number;
    }

    toString(){
        return `0x${this.number.toString(16).toUpperCase()}`;
    }

    plus(input){
        let res = 0;
        if (typeof input == 'number') {
            res = this.number + input;
        } else {
            let parsed = parseInt(input.toString(),16);
            res = this.number + parsed;         
        }
        return new Hex(res);
    }

    minus(input){
        let res = 0;
        if (typeof input == 'number') {
            res = this.number - input;
        } else {
            let parsed = parseInt(input.toString(),16);
            res = this.number - parsed;
        }
        return new Hex(res);
    }

    parse(input){
        return parseInt(input,16);
    }
}

let FF = new Hex(255);
console.log(FF.toString());
FF.valueOf() + 1 == 256;
let a = new Hex(10);
let b = new Hex(5);
console.log(a.plus(b).toString());
console.log(a.plus(b).toString()==='0xF');