const {expect,assert} = require('chai');
const dealership = require('./dealership');

describe('Unit Test for dealership object', function(){
    describe('Test for newCarCost method',function(){
        it('check if works without discount',function(){
            assert.equal(dealership.newCarCost('Opel Omega', 20000), 20000);
            assert.equal(dealership.newCarCost('Opel Astra', 10000), 10000);
        });
        it('check if works with discount',function(){
            assert.equal(dealership.newCarCost('Audi A4 B8', 20000), 5000);
            assert.equal(dealership.newCarCost('Audi TT 8J', 30000), 16000);
        });
        it('check if works with discount and with less money than discount=>should return negative',function(){
            assert.equal(dealership.newCarCost('Audi A4 B8', 14000), -1000);
        });
        it('check if works with discount and same money as discount=>should return 0',function(){
            assert.equal(dealership.newCarCost('Audi A4 B8', 15000), 0);
        });
    });
    describe('Tests for carEquipment function', function (){
        it('check if works correctly', function () {
            assert.deepEqual(dealership.carEquipment(['heated seats', 'sliding roof', 'sport rims', 'navigation'],[2,3]),['sport rims','navigation']);
            assert.deepEqual(dealership.carEquipment(['heated seats', 'sliding roof', 'sport rims', 'navigation'],[0,3]),['heated seats','navigation']);
        });
        it('check if works with empty arrays', function () {
            assert.deepEqual(dealership.carEquipment([],[]),[]);
        });
    });
    describe('Tests for euroCategory function', function (){
        it('check if works when category is less than 4 and there is no discount', function () {
            assert.equal(dealership.euroCategory(3), 'Your euro category is low, so there is no discount from the final price!');
        });
        it('check if works when category is equal to 4 and there is discount', function () {
            assert.equal(dealership.euroCategory(4), 'We have added 5% discount to the final price: 14250.');
        });
        it('check if works when category is more than 4 and there is discount', function () {
            assert.equal(dealership.euroCategory(8), 'We have added 5% discount to the final price: 14250.');
        });
    });
})