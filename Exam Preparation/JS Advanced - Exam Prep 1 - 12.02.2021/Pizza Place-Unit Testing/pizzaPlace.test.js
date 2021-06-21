const { expect, assert } = require('chai');
const pizzUni = require('./pizzaPlace');

describe('Tests for Pizza Place problem', function () {
    describe('Tests for make and order function', function () {
        it('check if throws error when no pizza is passed', function () {
            let obj = {};
            assert.throw(function () {
                pizzUni.makeAnOrder(obj);
            }, Error)
        });
        it('check if throws error when param is not an order object',function(){
            assert.throw(function(){
                pizzUni.makeAnOrder(3);
            },Error);
        });
        it('check if works with correct object input', function () {
            let order = {
                orderedPizza: 'Peperoni',
                orderedDrink: 'Coke'
            };
            let secondOrder = {
                orderedPizza: 'Caprichoza',
                orderedDrink: 'Orange juice'
            };
            assert.equal(pizzUni.makeAnOrder(order), `You just ordered Peperoni and Coke.`);
            assert.equal(pizzUni.makeAnOrder(secondOrder), `You just ordered Caprichoza and Orange juice.`);
        });
        it('check if works correctly with order object including only pizza', function(){
            let obj = {
                orderedPizza: 'Peperoni'
            };
            assert.equal(pizzUni.makeAnOrder(obj), 'You just ordered Peperoni');
        });
        it('check if throws error when only drink is passed as parameter', function(){
            let obj = {
                orderedDrink: 'Sprite'
            };
            assert.throw(function () {
                pizzUni.makeAnOrder(obj);
            }, Error)
        });
        it('check if works when object with more properties is passed', function(){
            let obj = {
                orderedPizza: 'Salamka',
                orderedDrink: 'Sprite',
                orderSecondMeal: 'Meatballs'
            };
            assert.equal(pizzUni.makeAnOrder(obj), `You just ordered Salamka and Sprite.`);
        });
    });
    describe('Test for get function remaining', function(){
        it('check if works correctly with correct param array', function(){
            let pizzaArr = [{pizzaName: 'Peperoni', status: 'ready'},{pizzaName:'Salamka', status: 'preparing'}];
            assert.equal(pizzUni.getRemainingWork(pizzaArr), 'The following pizzas are still preparing: Salamka.');
        });
        it('check if works with multiple remaining pizza and none ready', function(){
            let pizzaArr = [{pizzaName: 'Peperoni', status: 'preparing'},{pizzaName:'Salamka', status: 'preparing'},{pizzaName:'Hawaii', status: 'preparing'}];
            assert.equal(pizzUni.getRemainingWork(pizzaArr), 'The following pizzas are still preparing: Peperoni, Salamka, Hawaii.');
        });
        it('check if works when every pizza is ready', function(){
            let pizzaArr = [{pizzaName: 'Peperoni', status: 'ready'},{pizzaName:'Salamka', status: 'ready'}];
            assert.equal(pizzUni.getRemainingWork(pizzaArr), 'All orders are complete!');
        });
        it('check if works when we pass objects with different params than ready and remaining', function(){
            let pizzaArr = [{pizzaName: 'Peperoni', status: 'frozen'},{pizzaName:'Salamka', status: 'delivery'}];
            assert.equal(pizzUni.getRemainingWork(pizzaArr), 'The following pizzas are still preparing: Peperoni, Salamka.');
        });
        it('check if works when input array is empty', function(){
            let pizzaArr = [];
            assert.equal(pizzUni.getRemainingWork(pizzaArr), 'All orders are complete!');
        });
        it('check if works when incorrect properties of objects are passed', function(){
            //not correct case due to no error checking.
            let pizzaArr = [{pizzaName:  {}, status: 9},{pizzaName:'Salamka', status: 'ready'}];
            assert.equal(pizzUni.getRemainingWork(pizzaArr), 'The following pizzas are still preparing: [object Object].');
        });
    });
    describe('Test for order type function', function(){
        it('check if function works correctly with Delivery param', function(){
            assert.equal(pizzUni.orderType(100,'Delivery'), 100);
            assert.equal(pizzUni.orderType(15,'Delivery'), 15);
            assert.equal(pizzUni.orderType(8.5,'Delivery'), 8.5);
        });
        it('check if function works correctly with Carry Out param', function(){
            assert.equal(pizzUni.orderType(100,'Carry Out'), 90);
            assert.equal(pizzUni.orderType(10,'Carry Out'), 9);
            assert.equal(pizzUni.orderType(82,'Carry Out'), 73.8);
            assert.equal(pizzUni.orderType(13.5,'Carry Out'), 12.15);
        });
        it('check function returns undefined when delivery param is not correct', function(){
            assert.equal(pizzUni.orderType(100, 'Helicopter Delivery'), undefined);
        });
    });
});