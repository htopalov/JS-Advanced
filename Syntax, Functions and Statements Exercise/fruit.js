function solve(fruit, grams,price){
    let weight = grams / 1000;
    let money = price * weight;
    console.log(`I need $${money.toFixed(2)} to buy ${weight.toFixed(2)} kilograms ${fruit}.`);
}

solve('orange', 2500, 1.80);
solve('apple', 1563, 2.35);