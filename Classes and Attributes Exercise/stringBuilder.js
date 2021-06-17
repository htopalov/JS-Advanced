class StringBuilder {
    constructor(string) {
        if (string !== undefined) {
            StringBuilder._vrfyParam(string);
            this._stringArray = Array.from(string);
        } else {
            this._stringArray = [];
        }
    }

    append(string) {
        StringBuilder._vrfyParam(string);
        for (let i = 0; i < string.length; i++) {
            this._stringArray.push(string[i]);
        }
    }

    prepend(string) {
        StringBuilder._vrfyParam(string);
        for (let i = string.length - 1; i >= 0; i--) {
            this._stringArray.unshift(string[i]);
        }
    }

    insertAt(string, startIndex) {
        StringBuilder._vrfyParam(string);
        this._stringArray.splice(startIndex, 0, ...string);
    }

    remove(startIndex, length) {
        this._stringArray.splice(startIndex, length);
    }

    static _vrfyParam(param) {
        if (typeof param !== 'string') throw new TypeError('Argument must be а string');
    }

    toString() {
        return this._stringArray.join('');
    }
}

//UNIT TEST START FROM HERE

const { expect, assert } = require('chai');

describe('Tests for StringBuilder class', function () {
    let globalInstance = undefined;
    this.beforeEach(function () {
        globalInstance = new StringBuilder('hel');
    });
    it('check if works without param', function () {
        globalInstance = new StringBuilder();
        assert.equal(globalInstance._stringArray.length, 0);
    });
    it('check if works with param', function () {
        assert.equal(globalInstance._stringArray.length, 3);
    });
    it('check if creates array', function () {
        globalInstance = new StringBuilder();
        assert.equal(Array.isArray(globalInstance._stringArray), true);
    });
    it('check if throws error when param is not a string', function () {
        assert.throw(function () {
            globalInstance = new StringBuilder(12);
        }, Error);
    });
    it('check if append throws error if input is not a string', function () {
        assert.throw(function () {
            globalInstance = new StringBuilder();
            instance.append(1123);
        }, Error);
    });
    it('check if appends correctly', function () {
        let expected = ['h', 'e', 'l'];
        globalInstance = new StringBuilder();
        globalInstance.append('hel');
        expect(globalInstance._stringArray).deep.to.equal(expected);
    });
    it('check if throws error if param is not a string-prepend', function () {
        assert.throw(function () {
            globalInstance.prepend(213);
        },Error);
    });
    it('check if prepend works',function(){
        globalInstance = new StringBuilder('str');
        globalInstance.prepend('hel');
        assert.equal(globalInstance._stringArray.slice(0,3).join(''), ['hel']);
    });
    it('check if insert At throw error when param not string',function(){
        assert.throw(function(){
            globalInstance.insertAt(123,1);
        },Error);
    });
    it('check if insertAt works correctly', function(){
        globalInstance.insertAt('H', 1);
        assert.equal(globalInstance._stringArray[1], 'H');
    });
    it('check if remove works correctly', function(){
        globalInstance.remove(0,2);
        expect(globalInstance._stringArray).deep.to.equal(['l']);
    });
    it('check if toString returs correct string', function(){
        assert.equal(globalInstance.toString(), 'hel');
    });
});