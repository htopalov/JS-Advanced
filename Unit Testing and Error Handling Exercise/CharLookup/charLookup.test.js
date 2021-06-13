const {expect} = require('chai');
const lookupChar = require('./charLookup');

describe('Test group for lookupChar func', function (){
    it('check if function works correctly with correct params', function () {
        expect(lookupChar('thisIsString',3)).to.be.equal('s');
    });
    it('check if returns undefined when input string is not string', function () {
        expect(lookupChar(2,1)).to.be.equal(undefined);
    });
    it('check if returns undefined when input index is not a number', function () {
        expect(lookupChar('string', 'str')).to.be.equal(undefined);
    });
    it('check if returns undefined when input index is floating number', function () {
        expect(lookupChar('string', 3.19)).to.be.equal(undefined);
    });
    it('check if returns "Incorrect index" when passing index less than 0 ', function () {
        expect(lookupChar('str', -1)).to.be.equal('Incorrect index');
    });
    it('check if returns "Incorrect index" when passing index bigger than string length ', function () {
        expect(lookupChar('str', 40)).to.be.equal('Incorrect index');
    });
    it('check if returns "Incorrect index" when passing index equal to the length of string(not length -1) ', function () {
        expect(lookupChar('str', 3)).to.be.equal('Incorrect index');
    });
});