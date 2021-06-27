const {assert, expect} = require('chai');
const testNumbers = require('./testNumbers');

describe('Unit tests', function(){
    describe('Tests for sumNumbers function', function(){
        it('check if works correctly with integers',function(){
            assert.equal(testNumbers.sumNumbers(1,2), 3);
        });
        it('check if works correctly with doubles',function(){
            assert.equal(testNumbers.sumNumbers(1.60,1.53), 3.13);
        });
        it('check if works correctly with positive and negative',function(){
            assert.equal(testNumbers.sumNumbers(-1,2), 1);
        });
        it('check if works correctly with positive and negative2',function(){
            assert.equal(testNumbers.sumNumbers(1,-2), -1);
        });
        it('check if works correctly with both negative',function(){
            assert.equal(testNumbers.sumNumbers(-1,-2), -3);
        });
        it('check if returns undefined when param is not a number',function(){
            assert.equal(testNumbers.sumNumbers('str',2), undefined);
        });
        it('check if returns undefined when param is not a number2',function(){
            assert.equal(testNumbers.sumNumbers(1,'str'), undefined);
        });
        it('check if returns result fixed to 2',function(){
            assert.equal(testNumbers.sumNumbers(1.350,0.150), 1.50);
        });
    });
    describe('Tests for numberChecker function', function(){
        it('check if throws error if param is not a number', function(){
            assert.throw(function(){
                testNumbers.numberChecker('str');
            },Error);
        });
        it('check if number is even returns corretly', function(){
            assert.equal(testNumbers.numberChecker(2), 'The number is even!');
        });
        it('check if number is odd returns corretly', function(){
            assert.equal(testNumbers.numberChecker(3), 'The number is odd!');
        });
    });
    describe('Tests for averageArraySum function', function(){
        it('check if works correctly', function(){
            assert.equal(testNumbers.averageSumArray([3,3,3]), 3);
        });
        it('check if works correctly with odd count of numbers', function(){
            assert.equal(testNumbers.averageSumArray([1,2,3]), 2);
        });
        it('check if works correctly with even count of numbers', function(){
            assert.equal(testNumbers.averageSumArray([1,2]), 1.5);
        });
        it('check if works correctly with even count of double numbers', function(){
            assert.equal(testNumbers.averageSumArray([1.5,1.5]), 1.5);
        });
    });
});