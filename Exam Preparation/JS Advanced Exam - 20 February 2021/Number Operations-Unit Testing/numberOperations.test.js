const{expect,assert} = require('chai');
const numberOperations = require('./numberOperations');

describe('Unit Tests for Number Operations', function(){
    describe('powNumer function tests', function(){
        it('check if works correctly', function(){
            assert.equal(numberOperations.powNumber(2), 4);
            assert.equal(numberOperations.powNumber(4), 16);
            assert.equal(numberOperations.powNumber(8), 64);
            assert.equal(numberOperations.powNumber(3.5), 12.25);
        });
    });
    describe('number checker function tests', function (){
       it('check if throws error for wrong input', function (){
          assert.throw( function (){
              numberOperations.numberChecker('sss');
              },Error);
       });
        it('check if works when number is below 100', function () {
            assert.equal(numberOperations.numberChecker(50), 'The number is lower than 100!');
            assert.equal(numberOperations.numberChecker(50.5), 'The number is lower than 100!');
        });
        it('check if works when number is equal to 100', function () {
            assert.equal(numberOperations.numberChecker(100), 'The number is greater or equal to 100!');
        });
        it('check if works when number is bigger than 100', function () {
            assert.equal(numberOperations.numberChecker(101), 'The number is greater or equal to 100!');
            assert.equal(numberOperations.numberChecker(201), 'The number is greater or equal to 100!');
        });
    });
    describe('sum arrays function tests', function (){
        it('check if works with arrays with equal lenghts', function () {
            expect(numberOperations.sumArrays([1,2,3],[4,5,6])).deep.to.equal([5,7,9]);
        });
        it('check if works with first array lenght is less than second', function () {
            expect(numberOperations.sumArrays([1,2,3],[1,2,3,4,5])).deep.to.equal([2,4,6,4,5]);
        });
        it('check if works with second array lenght is less than first', function () {
            expect(numberOperations.sumArrays([1,2,3,5,8],[1,2,3])).deep.to.equal([2,4,6,5,8]);
        });
        it('check if works with first array array empty and second filled', function () {
            expect(numberOperations.sumArrays([],[1,2,3])).deep.to.equal([1,2,3]);
        });
        it('check if works with second array empty and first filled', function () {
            expect(numberOperations.sumArrays([1,2,3],[])).deep.to.equal([1,2,3]);
        });
    });
})