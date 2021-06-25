class Kitchen {
    constructor(budget) {
        this.budget = budget;
        this.menu = new Map();
        this.productsInStock = {};
        this.actionsHistory = [];
    }

    loadProducts(productsArr) {
        productsArr.forEach(product => {
            let [productName, productQuantity, productPrice] = product.split(' ');
            productQuantity = Number(productQuantity);
            productPrice = Number(productPrice);
            if (productPrice <= this.budget) {
                if (this.productsInStock[productName] === undefined) {
                    this.productsInStock[productName] = productQuantity;
                } else {
                    this.productsInStock[productName] += productQuantity;
                }
                this.budget -= productPrice;
                this.actionsHistory.push(`Successfully loaded ${productQuantity} ${productName}`);
            } else {
                this.actionsHistory.push(`There was not enough money to load ${productQuantity} ${productName}`);
            }
        });

        return this.actionsHistory.join('\n').trim();
    }
    addToMenu(meal, neededProductsArr, price) {
        if (!this.menu.has(meal)) {
            this.menu.set(meal, { neededProducts: neededProductsArr, price: Number(price) });
            return `Great idea! Now with the ${meal} we have ${this.menu.size} meals in the menu, other ideas?`
        } else {
            return `The ${meal} is already in the our menu, try something different.`;
        }
    }
    showTheMenu() {
        let result = '';
        if (this.menu.size == 0) {
            return "Our menu is not ready yet, please come later...";
        } else {
            for (const [key, value] of this.menu) {
                result += `${key} - $ ${value.price}\n`;
            }
            return result.trim();
        }
    }
    makeAnOrder(meal) {
        if (!this.menu.has(meal)) {
            return `There is not ${meal} yet in our menu, do you want to order something else?`;
        } else {
            let mealProductsNeeded = this.menu.get(meal);
            let mealPrice = mealProductsNeeded.price;
            for (const product of mealProductsNeeded.neededProducts) {
                let productName = product.split(' ')[0];
                if (!Object.keys(this.productsInStock).includes(productName)) {
                    return `For the time being, we cannot complete your order (${meal}), we are very sorry...`;
                }
            }
            for (const product of mealProductsNeeded.neededProducts) {
                let [productName,quantity] = product.split(' ');
                if (this.productsInStock[productName] - Number(quantity) <= 0) {
                    delete this.productsInStock[productName];
                } else {
                    this.productsInStock[productName] -= Number(quantity);
                }
            }
            this.budget += mealPrice;

            return `Your order (${meal}) will be completed in the next 30 minutes and will cost you ${mealPrice}.`;

        }
    }
}

let kitchen = new Kitchen(1000);
console.log(kitchen.loadProducts(['Banana 10 5', 'Banana 20 10', 'Strawberries 50 30', 'Yogurt 10 10', 'Yogurt 500 1500', 'Honey 5 50']));
console.log(kitchen.addToMenu('frozenYogurt', ['Yogurt 1', 'Honey 1', 'Banana 1', 'Strawberries 10'], 9.99));
console.log(kitchen.addToMenu('Pizza', ['Flour 0.5', 'Oil 0.2', 'Yeast 0.5', 'Salt 0.1', 'Sugar 0.1', 'Tomato sauce 0.5', 'Pepperoni 1', 'Cheese 1.5'], 15.55));
console.log(kitchen.showTheMenu());
console.log(kitchen.makeAnOrder('frozenYogurt'));
console.log(kitchen.makeAnOrder('Pizza'));
