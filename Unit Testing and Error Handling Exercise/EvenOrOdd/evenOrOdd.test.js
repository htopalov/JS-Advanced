const {assert,expect} = require('chai');
const isOddOrEven = require('./evenOrOdd');

describe('Test function isOddOrEven', function (){
    it('passing param which is not string 1', function () {
        expect(isOddOrEven(1)).to.be.equal(undefined);
    });
    it('passing param which is not string 2', function () {
        expect(isOddOrEven(['string','param'])).to.be.equal(undefined);
    });
    it('passing param string with even length expecting to return even', function () {
        expect(isOddOrEven('free')).to.be.equal('even');
    });
    it('passing param string with odd length expecting to return odd', function () {
        expect(isOddOrEven('try')).to.be.equal('odd');
    });
});