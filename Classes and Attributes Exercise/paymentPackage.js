class PaymentPackage {
    constructor(name, value) {
        this.name = name;
        this.value = value;
        this.VAT = 20;      // Default value    
        this.active = true; // Default value
    }

    get name() {
        return this._name;
    }

    set name(newValue) {
        if (typeof newValue !== 'string') {
            throw new Error('Name must be a non-empty string');
        }
        if (newValue.length === 0) {
            throw new Error('Name must be a non-empty string');
        }
        this._name = newValue;
    }

    get value() {
        return this._value;
    }

    set value(newValue) {
        if (typeof newValue !== 'number') {
            throw new Error('Value must be a non-negative number');
        }
        if (newValue < 0) {
            throw new Error('Value must be a non-negative number');
        }
        this._value = newValue;
    }

    get VAT() {
        return this._VAT;
    }

    set VAT(newValue) {
        if (typeof newValue !== 'number') {
            throw new Error('VAT must be a non-negative number');
        }
        if (newValue < 0) {
            throw new Error('VAT must be a non-negative number');
        }
        this._VAT = newValue;
    }

    get active() {
        return this._active;
    }

    set active(newValue) {
        if (typeof newValue !== 'boolean') {
            throw new Error('Active status must be a boolean');
        }
        this._active = newValue;
    }

    toString() {
        const output = [
            `Package: ${this.name}` + (this.active === false ? ' (inactive)' : ''),
            `- Value (excl. VAT): ${this.value}`,
            `- Value (VAT ${this.VAT}%): ${this.value * (1 + this.VAT / 100)}`
        ];
        return output.join('\n');
    }
}


// UNIT TESTING FROM THIS POINT

const { assert, expect } = require('chai');

describe('Payment Package tests for functionality', function () {
    let instance = undefined;
    this.beforeEach(function () {
        instance = new PaymentPackage('HR Services', 1500);
    });

    it('check if constructor sets properties of class', function () {
        assert.equal(instance.name, 'HR Services');
        assert.equal(instance.value, 1500);
        assert.equal(instance.VAT, 20);
        assert.equal(instance.active, true);
    });
    it('get name works', function () {
        assert.equal(instance.name, 'HR Services');
    });
    it('check if set name works', function () {
        instance.name = 'Some name';
        assert.equal(instance.name, 'Some name');
    });
    it('check if setting empty string for name throws error', function () {
        assert.throw(function () {
            instance.name = '';
        }, Error);
    });
    it('check if setting non string value for name throws error', function () {
        assert.throw(function () {
            instance.name = 9;
        }, Error);
    });
    it('check if get value works', function(){
        assert.equal(instance.value, 1500);
    });
    it('check if setting value less than 0 throws error', function(){
        assert.throw(function(){
            instance.value = -1;
        }, Error);
    });
    it('check if setting non number value throws error', function(){
        assert.throw(function(){
            instance.value = 'str';
        }, Error);
    });
    it('check if get VAT works', function(){
        assert.equal(instance.VAT, 20);
    });
    it('check if set VAT works', function(){
        instance.VAT = 300;
        assert.equal(instance.VAT, 300);
    });
    it('check if setting non number VAT throws error', function(){
        assert.throw(function(){
            instance.VAT = 'str';
        }, Error);
    });
    it('check if setting VAT less than 0 throws error', function(){
        assert.throw(function(){
            instance.VAT = -1;
        }, Error);
    });
    it('check if get active property works',function(){
        assert.equal(instance.active, true);
    });
    it('check if set active property works', function(){
        instance.active = false;
        assert.equal(instance.active, false);
    });
    it('check if setting active property with non boolean value throws error', function(){
        assert.throw(function(){
            instance.active = 25;
        }, Error);
    });
    it('check if toString returns correctly when active==true', function(){
        assert.equal(instance.toString(),`Package: HR Services\n- Value (excl. VAT): 1500\n- Value (VAT 20%): 1800`);
    });
    it('check if toString returns correctly when active == false', function(){
        instance.active = false;
        assert.equal(instance.toString(),`Package: HR Services (inactive)\n- Value (excl. VAT): 1500\n- Value (VAT 20%): 1800`);
    });
})