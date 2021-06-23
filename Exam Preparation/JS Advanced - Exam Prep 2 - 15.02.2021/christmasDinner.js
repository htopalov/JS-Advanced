class ChristmasDinner {
    constructor(budget){
        this._budget = budget;
        this.dishes = [];
        this.products = [];
        this.guests = {};
    }
    get budget(){
        return this._budget;
    }
    set budget(value){
        if (value < 0) {
            throw new Error("The budget cannot be a negative number");
        }
        this._budget = value;
    }
    shopping(arr){
        let productName = arr[0];
        let price = Number(arr[1]);
        if (price > this._budget) {
            throw new Error("Not enough money to buy this product");
        } 
        this._budget -= price;
        this.products.push(productName);
        return `You have successfully bought ${productName}!`;
    }
    recipes(obj){
        let recipeName = obj.recipeName;
        let recipeProductsArr = obj.productsList;
        for (const product of recipeProductsArr) {
            if (!this.products.includes(product)) {
                throw new Error("We do not have this product");
            }
        }
        this.dishes.push(obj);
        return `${recipeName} has been successfully cooked!`;
    }
    inviteGuests(name, dish){
        let currentDish = this.dishes.find(x=>x.recipeName == dish);
        if (currentDish === undefined) {
            throw new Error("We do not have this dish");
        }
        if (name in this.guests) {
            throw new Error("This guest has already been invited");
        }
        this.guests[name] = dish;
        return `You have successfully invited ${name}!`;
    }
    showAttendance(){
        let result = '';
        Object.keys(this.guests).forEach(name => {
            let dish = this.guests[name];
            let products = [];
            this.dishes.forEach((curDish) => {
                if (curDish.recipeName === dish) {
                    products = curDish.productsList;
                }
            });
            result += `${name} will eat ${dish}, which consists of ${products.join(', ')}\n`;
        });
        return result.trim();
    }
}

let dinner = new ChristmasDinner(300);

dinner.shopping(['Salt', 1]);
dinner.shopping(['Beans', 3]);
dinner.shopping(['Cabbage', 4]);
dinner.shopping(['Rice', 2]);
dinner.shopping(['Savory', 1]);
dinner.shopping(['Peppers', 1]);
dinner.shopping(['Fruits', 40]);
dinner.shopping(['Honey', 10]);

dinner.recipes({
    recipeName: 'Oshav',
    productsList: ['Fruits', 'Honey']
});
dinner.recipes({
    recipeName: 'Folded cabbage leaves filled with rice',
    productsList: ['Cabbage', 'Rice', 'Salt', 'Savory']
});
dinner.recipes({
    recipeName: 'Peppers filled with beans',
    productsList: ['Beans', 'Peppers', 'Salt']
});

dinner.inviteGuests('Ivan', 'Oshav');
dinner.inviteGuests('Petar', 'Folded cabbage leaves filled with rice');
dinner.inviteGuests('Georgi', 'Peppers filled with beans');

console.log(dinner.showAttendance());

