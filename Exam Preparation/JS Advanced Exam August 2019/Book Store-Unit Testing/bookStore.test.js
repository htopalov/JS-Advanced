const { expect, assert } = require('chai');
const BookStore = require('./bookStore');

describe('Unit test for BookStore class', function () {
    let bookStore = undefined;
    this.beforeEach(function () {
        bookStore = new BookStore('Ramita');
    });
    it('check if constructor sets properties correctly', function () {
        assert.equal(bookStore.name, 'Ramita');
        assert.deepEqual(bookStore.books, []);
        assert.deepEqual(bookStore.workers, []);
    });
    it('check if workers getter works correctly', function () {
        assert.deepEqual(bookStore.workers, []);
    });
    describe('Test for stockBooks function', function () {
        it('check if returns correctly', function () {
            bookStore.stockBooks(['Book1-Author1', 'Book2-Author2', 'Book3-Author3']);
            assert.deepEqual(bookStore.books, [{ title: 'Book1', author: 'Author1' }, { title: 'Book2', author: 'Author2' }, { title: 'Book3', author: 'Author3' }]);
        });
        it('check if books count is correct', function () {
            bookStore.stockBooks(['Book1-Author1', 'Book2-Author2', 'Book3-Author3']);
            assert.deepEqual(bookStore.books.length, 3);
        });
    });
    describe('Tests for hire function', function () {
        it('check if works correctly', function () {
            bookStore.hire('Ivan', 'Salesman');
            assert.equal(bookStore.workers.length, 1);
        });
        it('check if returns correctly', function () {
            assert.equal(bookStore.hire('Ivan', 'Salesman'), 'Ivan started work at Ramita as Salesman');
        });
        it('check if throws error if worker already hired', function () {
            bookStore.hire('Ivan', 'Salesman');
            assert.throw(function () {
                bookStore.hire('Ivan', 'Salesman');
            }, Error);
        });
    });
    describe('Tests for fire function',function(){
        it('check if works correctly when bookStore has worker',function(){
            bookStore.hire('Ivan', 'Salesman');
            assert.equal(bookStore.workers.length, 1);
            bookStore.fire('Ivan');
            assert.equal(bookStore.workers.length, 0);
        });
        it('check if throws error if there is no worker with given name', function(){
            assert.throw(function(){
                bookStore.fire('Gosho');
            });
        });
        it('check if returns correctly', function(){
            bookStore.hire('Ivan', 'Salesman');
            assert.equal(bookStore.fire('Ivan'), 'Ivan is fired');
        });
    });
    describe('Tests for sellBook function', function(){
        it('check if throws error when book is missing', function(){
            assert.throw(function(){
                bookStore.sellBook('Book1','Pesho');
            });
        });
        it('check if throws error when worker is missing', function(){
            bookStore.stockBooks(['Book1-Author1', 'Book2-Author2', 'Book3-Author3']);
            assert.throw(function(){
                bookStore.sellBook('Book1','Pesho');
            });
        });
        it('check if sold book is remove from list', function(){
            bookStore.stockBooks(['Book1-Author1', 'Book2-Author2', 'Book3-Author3']);
            bookStore.hire('Ivan', 'Salesman');
            bookStore.sellBook('Book1', 'Ivan');
            assert.equal(bookStore.books.find(x=>x.title == 'Book1'),undefined);
        })
        it('check if workers sold books are incremented', function(){
            bookStore.stockBooks(['Book1-Author1', 'Book2-Author2', 'Book3-Author3']);
            bookStore.hire('Ivan', 'Salesman');
            bookStore.sellBook('Book1', 'Ivan');
            assert.equal(bookStore.workers.find(x=>x.name == 'Ivan').booksSold, 1);
        });
    });
    describe('Tests for printWorkers function', function(){
        it('check if returns correct string', function(){
            bookStore.stockBooks(['Book1-Author1', 'Book2-Author2', 'Book3-Author3']);
            bookStore.hire('Ivan', 'Salesman');
            bookStore.hire('Pesho', 'Salesman');
            bookStore.sellBook('Book1', 'Ivan');
            bookStore.sellBook('Book2', 'Pesho');
            assert.equal(bookStore.printWorkers(), ['Name:Ivan Position:Salesman BooksSold:1','Name:Pesho Position:Salesman BooksSold:1'].join('\n'));
        });
    });
})