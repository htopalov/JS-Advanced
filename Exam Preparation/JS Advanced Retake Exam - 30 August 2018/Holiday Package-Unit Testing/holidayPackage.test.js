const { assert, expect } = require('chai');
const HolidayPackage = require('./holidayPackage');

describe('Unit tests for HolidayPackage class', function () {
    let holidayPackage = undefined;
    this.beforeEach(function () {
        holidayPackage = new HolidayPackage('Stara planina', 'Winter');
    });
    describe('Tests for constructor and instantiation', function () {
        it('check if instace is correct', function () {
            assert.equal(holidayPackage instanceof HolidayPackage, true);
        });
        it('check properties of instance', function () {
            assert.equal(holidayPackage.destination, 'Stara planina');
            assert.equal(holidayPackage.season, 'Winter');
            assert.equal(holidayPackage.insuranceIncluded, false);
            assert.deepEqual(holidayPackage.vacationers, []);
        });
    });
    describe('Tests for getter and setter of insuranceIncluded', function () {
        it('check if getter works correctly', function () {
            assert.equal(holidayPackage.insuranceIncluded, false);
        });
        it('check if setter throws error if type of parameter is not boolean', function () {
            assert.throw(function () {
                holidayPackage.insuranceIncluded('str');
            }, Error);
            assert.throw(function () {
                holidayPackage.insuranceIncluded(1234);
            }, Error);
        });
        it('check if setter works correctly when parameter is correct', function () {
            holidayPackage.insuranceIncluded = true;
            assert.equal(holidayPackage.insuranceIncluded, true);
        });
    });
    describe('Tests for addVacationer function', function () {
        it('check if works correctly', function () {
            holidayPackage.addVacationer('Hristo Topalov');
            assert.equal(holidayPackage.vacationers.length, 1);
            assert.equal(holidayPackage.vacationers.includes('Hristo Topalov'), true);
        });
        it('check if throws error when parameter is not a string', function () {
            assert.throw(function () {
                holidayPackage.addVacationer(1234);
            }, Error);
        });
        it('check if throws error when parameter is white space string', function () {
            assert.throw(function () {
                holidayPackage.addVacationer(' ');
            }, Error);
        });
        it('check if throws error when parameter is empty string', function () {
            assert.throw(function () {
                holidayPackage.addVacationer('');
            }, Error);
        });
        it('check if throws error when parameter is more than first and last name', function () {
            assert.throw(function () {
                holidayPackage.addVacationer('Hristo Dobrinov Topalov');
            }, Error);
        });
        it('check if throws error when parameter is single name', function () {
            assert.throw(function () {
                holidayPackage.addVacationer('Hristo');
            }, Error);
        });
    });
    describe('Tests for showVacationers function', function () {
        it('check if returns correctly when there are vacationers added', function () {
            holidayPackage.addVacationer('Hristo Topalov');
            holidayPackage.addVacationer('Pesho Petrov');
            assert.equal(holidayPackage.showVacationers(),
`Vacationers:
Hristo Topalov
Pesho Petrov`);
        });
        it('check if returns correctly when no vacationers added', function () {
            assert.equal(holidayPackage.showVacationers(), 'No vacationers are added yet');
        });
    });
    describe('Tests for generateHolidayPackage function', function(){
        it('check if works correctly with summer season and enough vacationers', function(){
            let currentHolidayPackage = new HolidayPackage('Sunny beach', 'Summer');
            currentHolidayPackage.addVacationer('Hristo Topalov');
            currentHolidayPackage.addVacationer('Ivan Ivanov');
            currentHolidayPackage.addVacationer('Pesho Goshov');
            currentHolidayPackage.insuranceIncluded = true;
            assert.equal(currentHolidayPackage.generateHolidayPackage(), 
`Holiday Package Generated
Destination: Sunny beach
Vacationers:
Hristo Topalov
Ivan Ivanov
Pesho Goshov
Price: 1500`);
        });
        it('check if works correctly with winter season and enough vacationers', function(){
            let currentHolidayPackage = new HolidayPackage('Botev peak', 'Winter');
            currentHolidayPackage.addVacationer('Hristo Topalov');
            currentHolidayPackage.addVacationer('Ivan Ivanov');
            currentHolidayPackage.addVacationer('Pesho Goshov');
            currentHolidayPackage.insuranceIncluded = true;
            assert.equal(currentHolidayPackage.generateHolidayPackage(), 
`Holiday Package Generated
Destination: Botev peak
Vacationers:
Hristo Topalov
Ivan Ivanov
Pesho Goshov
Price: 1500`);
        });
        it('check if works correctly with winter season enough vacationers and no insurance', function(){
            let currentHolidayPackage = new HolidayPackage('Botev peak', 'Winter');
            currentHolidayPackage.addVacationer('Hristo Topalov');
            currentHolidayPackage.addVacationer('Ivan Ivanov');
            currentHolidayPackage.addVacationer('Pesho Goshov');
            assert.equal(currentHolidayPackage.generateHolidayPackage(), 
`Holiday Package Generated
Destination: Botev peak
Vacationers:
Hristo Topalov
Ivan Ivanov
Pesho Goshov
Price: 1400`);
        });
        it('check if works correctly with summer season and enough vacationers and no insurance', function(){
            let currentHolidayPackage = new HolidayPackage('Sunny beach', 'Summer');
            currentHolidayPackage.addVacationer('Hristo Topalov');
            currentHolidayPackage.addVacationer('Ivan Ivanov');
            currentHolidayPackage.addVacationer('Pesho Goshov');
            assert.equal(currentHolidayPackage.generateHolidayPackage(), 
`Holiday Package Generated
Destination: Sunny beach
Vacationers:
Hristo Topalov
Ivan Ivanov
Pesho Goshov
Price: 1400`);
        });
        it('check if works correctly with Spring season and enough vacationers and no insurance', function(){
            let currentHolidayPackage = new HolidayPackage('Vitosha', 'Spring');
            currentHolidayPackage.addVacationer('Hristo Topalov');
            currentHolidayPackage.addVacationer('Ivan Ivanov');
            currentHolidayPackage.addVacationer('Pesho Goshov');
            assert.equal(currentHolidayPackage.generateHolidayPackage(), 
`Holiday Package Generated
Destination: Vitosha
Vacationers:
Hristo Topalov
Ivan Ivanov
Pesho Goshov
Price: 1200`);
        });
        it('check if works correctly with Spring season and enough vacationers and insurance', function(){
            let currentHolidayPackage = new HolidayPackage('Vitosha', 'Spring');
            currentHolidayPackage.addVacationer('Hristo Topalov');
            currentHolidayPackage.addVacationer('Ivan Ivanov');
            currentHolidayPackage.addVacationer('Pesho Goshov');
            currentHolidayPackage.insuranceIncluded = true;
            assert.equal(currentHolidayPackage.generateHolidayPackage(), 
`Holiday Package Generated
Destination: Vitosha
Vacationers:
Hristo Topalov
Ivan Ivanov
Pesho Goshov
Price: 1300`);
        });
        it('check if throws error when vacationers are less than 1', function(){
            assert.throw(function(){
                holidayPackage.generateHolidayPackage();
            },Error);
        });
    });
});