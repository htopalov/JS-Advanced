const {expect, assert} = require('chai');
const sum = require('./sumOfNumber');

describe('Tests group', ()=>{
   it('Check if works correctly', ()=>{
       assert.equal(sum([1,2,3]),6);
   }) ;
   it('Check if returns NaN', ()=>{
      expect(sum(['rndInput'])).to.be.NaN;
   });
});