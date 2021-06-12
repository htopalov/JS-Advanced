const isSymmetric = require('./checkForSymmetry');
const {assert,expect} = require('chai');

describe('Test group', ()=>{
   it('works correctly', ()=>{
       expect(isSymmetric([1,1])).to.be.true;
   });

   it('check if returns true when elements are strings',()=>{
      assert.equal(isSymmetric(['1','1']), true);
   });

   it('check if returns false if not symmetric', ()=>{
      assert.equal(isSymmetric([1,1,2]),false);
   });
   it('check if returns false if input is not correct',()=>{
      assert.equal(isSymmetric('randomInput'),false);
   });
   it('check if', ()=>{
      assert.equal(isSymmetric(['dasdasd', 1, 2]),false);
   });
   // // //
    it('should return true on isSymmetric([1,2,1])', () => {
        expect(isSymmetric([1, 2, 1])).to.be.true;
    });

    // even count - numbers only
    it('should return false on isSymmetric([1,2,-1])', () => {
        expect(isSymmetric([1, 2, -1])).to.be.false;
    });

    // odd count - numbers only
    it('should return true on isSymmetric([10,20,20,10])', () => {
        expect(isSymmetric([10, 20, 20, 10])).to.be.true;
    });

    // even count - numbers only
    it('should return false on isSymmetric([10,20,30,10])', () => {
        expect(isSymmetric([10, 20, 30, 10])).to.be.false;
    });

    // odd count - mixed types
    it('should return true on isSymmetric(["pesho",new Date(2016,8,15),false,new Date(2016,8,15), "pesho"])', () => {
        expect(isSymmetric(["pesho", new Date(2016, 8, 15), false, new Date(2016, 8, 15), "pesho"])).to.be.true;
    });

    // even count - mixed types
    it('should return false on isSymmetric(["pesho",new Date(2016,8,15),false,new Date(2016,8,15), "pesho"])', () => {
        expect(isSymmetric(["pesho", new Date(2016, 8, 15), false, "pesho"])).to.be.false;
    });
});