class Restaurant {
  constructor(budgetMoney) {
    this.budgetMoney = Number(budgetMoney);
    this.menu = {};
    this.stockProducts = {};
    this.history = [];
  }

  loadProducts(products) {
    for (const entry of products) {
      let line = entry.split(" ");
      let price = Number(line.pop());
      let quantity = Number(line.pop());
      let product = line.join(" ");
      if (this.budgetMoney - price >= 0) {
        if (this.stockProducts[product])
          this.stockProducts[product] += quantity;
        else this.stockProducts[product] = quantity;
        this.budgetMoney -= price;
        this.history.push(`Successfully loaded ${quantity} ${product}`);
      } else {
        this.history.push(
          `There was not enough money to load ${quantity} ${product}`
        );
      }
    }
    return this.history.join("\n").trim();
  }

  addToMenu(meal, products, price) {
    // if (!this.menu.hasOwnProperty(meal) && Object.keys(this.menu).length > 1) {
    //   this.menu[meal] = { products: products, price: +price };
    //   return `Great idea! Now with the ${meal} we have ${Object.keys(this.menu).length} meals in the menu, other ideas?`;
    // } else if (!this.menu.hasOwnProperty(meal)) {
    //   this.menu[meal] = { products: products, price: +price };
    //   return `Great idea! Now with the ${meal} we have 1 meal in the menu, other ideas?`
    // } else if (this.menu.hasOwnProperty(meal)) {
    //   return `The ${meal} is already in our menu, try something different.`;
    // } else if (Object.keys(this.menu).length == 1) {
    //   return `Great idea! Now with the ${meal} we have 1 meal in the menu, other ideas?`;
    // }
    if (!this.menu.hasOwnProperty(meal)) {
      this.menu[meal] = { products: products, price: +price };
      if (Object.keys(this.menu).length == 1) {
        return `Great idea! Now with the ${meal} we have 1 meal in the menu, other ideas?`;
      } else if (Object.keys(this.menu).length > 1) {
        return `Great idea! Now with the ${meal} we have ${Object.keys(this.menu).length} meals in the menu, other ideas?`;
      }
    } else {
      return `The ${meal} is already in our menu, try something different.`;
    }
  }

  showTheMenu() {
    if (Object.keys(this.menu).length === 0) {
      return `Our menu is not ready yet, please come later...`;
    } else {
      let result = [];
      for (const currentMeal of Object.keys(this.menu)) {
        result.push(`${currentMeal} - $ ${this.menu[currentMeal].price}`);
      }
      return result.join("\n").trim(); // ??? +'\n\
    }
  }

  makeTheOrder(meal) {
    if (!this.menu.hasOwnProperty(meal)) {
      return `There is not ${meal} yet in our menu, do you want to order something else?`;
    }
    let neededIngredients = this.menu[meal].products;
    for (let item of neededIngredients) {
      item = item.split(" ");
      let quantity = Number(item.pop());
      let product = item.join(" ");
      if (
        this.stockProducts[product] < quantity ||
        !this.stockProducts[product]
      ) {
        return `For the time being, we cannot complete your order (${meal}), we are very sorry...`;
      }
    }
    for (let item of neededIngredients) {
      item = item.split(" ");
      let quantity = Number(item.pop());
      let product = item.join(" ");
      this.stockProducts[product] -= quantity;
    }
    this.budgetMoney += this.menu[meal].price;
    return `Your order (${meal}) will be completed in the next 30 minutes and will cost you ${this.menu[meal].price}.`;
  }
}

let kitchen = new Restaurant(1000);
kitchen.loadProducts(['Yogurt 30 3', 'Honey 50 4', 'Strawberries 20 10', 'Banana 5 1']);
kitchen.addToMenu('frozenYogurt', ['Yogurt 1', 'Honey 1', 'Banana 1', 'Strawberries 10'], 9.99);
console.log(kitchen.makeTheOrder('frozenYogurt'));


