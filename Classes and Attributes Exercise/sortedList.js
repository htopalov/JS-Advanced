class List{
    constructor(){
        this.arr = [];
        this.size = this.arr.length;
    }

    add(value){
        this.arr.push(Number(value));
        this.arr.sort((a,b) => a-b);
        this.size++;
    }
    remove(index){
        if (Number(index) < 0 || Number(index) > this.arr.length - 1) {
            throw new Error();
        }
        this.arr.splice(index,1);
        this.arr.sort((a,b) => a-b);
        this.size--;
    }
    get(index){
        if (Number(index) < 0 || Number(index) > this.arr.length - 1) {
            throw new Error();
        }
        return this.arr[index];
    }
}

let list = new List();
list.add(5);
list.add(6);
list.add(7);
console.log(list.get(1)); 
list.remove(1);
console.log(list.get(1));
