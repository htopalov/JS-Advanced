class Rectangle{
    constructor(width,height,color){
        this.width = width;
        this.height = height;
        this.color = color;
    }
    get widthProp(){
        return this.width;
    }
    set widthProp(value){
        if (typeof value !== 'number') {
            throw new Error();
        }
        this.width = value;
    }
    get heightProp(){
        return this.height;
    }
    set heightProp(value){
        if (typeof value !== 'number') {
            throw new Error();
        }
        this.height = value;
    }
    get colorProp(){
        return this.color;
    }
    set colorProp(value){
        this.color = value[0]+value.slice(1).toLowerCase();
    }

    calcArea(){
        return this.width*this.height;
    }
}

let rect = new Rectangle(4, 5, 'Red');
console.log(rect.width);
console.log(rect.height);
console.log(rect.color);
console.log(rect.calcArea());