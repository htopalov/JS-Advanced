const {expect} = require('chai');
const mathEnforcer = require('./mathEnforcer');

describe('Tests of mathEnforcer function', function (){
    describe('Tests for addFive function', function (){
        it('check if returns undefined when param is not number', function () {
            expect(mathEnforcer.addFive('string')).to.be.equal(undefined);
        });
        it('check if returns correct result when param is int', function () {
            expect(mathEnforcer.addFive(5)).to.be.equal(10);
        });
        it('check if returns correct result when param is float', function () {
            expect(mathEnforcer.addFive(1.3)).to.be.equal(6.3);
        });
        it('check if returns correct result when param is negative', function () {
            expect(mathEnforcer.addFive(-1)).to.be.equal(4);
        });
    });
    describe('Tests for subtractTen function', function (){
        it('check if returns undefined when param is not number', function () {
            expect(mathEnforcer.subtractTen('string')).to.be.equal(undefined);
        });
        it('check if returns correct result when passing int as param', function () {
            expect(mathEnforcer.subtractTen(100)).to.be.equal(90);
        });
        it('check if returns correct result when passing negative int param', function () {
            expect(mathEnforcer.subtractTen(-15)).to.be.equal(-25); //???should it be -5????
        });
        it('check if returns correct result when passing positive float number as param', function () {
            expect(mathEnforcer.subtractTen(2.5)).to.be.equal(-7.5);
        });
        it('check if returns correct result when passign negative float as param', function () {
            expect(mathEnforcer.subtractTen(-1.67)).to.be.equal(-11.67);
        });
    });
    describe('Tests for sum function', function (){
        it('check if returns undefined when passing non number params', function () {
            expect(mathEnforcer.sum('str1','str2')).to.be.equal(undefined);
        });
        it('chekc if returns undefined when passing first param non number', function () {
            expect(mathEnforcer.sum([],2)).to.be.equal(undefined);
        });
        it('check if returns undefined when passing second param non number', function () {
            expect(mathEnforcer.sum(2,'second')).to.be.equal(undefined);
        });
        it('check if returns correctly when passing two positive integers', function () {
            expect(mathEnforcer.sum(1,2)).to.be.equal(3);
        });
        it('check if returns correctly when passing two negative integers', function () {
            expect(mathEnforcer.sum(-1,-2)).to.be.equal(-3);
        });
        it('check if returns correctly when passing two positive floats', function () {
            expect(mathEnforcer.sum(1.25, 2.35)).to.be.equal(3.6);
        });
        it('check if returns correctly when passing two negative floats', function () {
            expect(mathEnforcer.sum(-1.25,-2.35)).to.be.equal(-3.6);
        });
    });
});