const { assert, expect, AssertionError } = require('chai');
const ChristmasMovies = require('./christmasMovies');

describe('Unit Tests for ChristmasMovies class', function () {
    let instance = undefined;
    this.beforeEach(function () {
        instance = new ChristmasMovies();
    });
    describe('Tests for constructor and initialization', function () {
        it('check if instance has internal properties set up', function () {
            let props = Object.keys(instance);
            let expected = ['movieCollection', 'watched', 'actors'];
            assert.equal(props.includes(expected[0]), true);
            assert.equal(props.includes(expected[1]), true);
            assert.equal(props.includes(expected[2]), true);
            assert.equal(instance instanceof ChristmasMovies, true);
        });
    });
    describe('Tests for buyMovie function', function () {
        it('check if works correctly', function () {
            assert.equal(instance.buyMovie('Last Christmas', ['Madison Ingoldsby', 'Emma Thompson', 'Boris Isakovic', 'Madison Ingoldsby']),
                `You just got Last Christmas to your collection in which Madison Ingoldsby, Emma Thompson, Boris Isakovic are taking part!`);
            assert.equal(instance.buyMovie('Terminator', ['Arnold', 'John Conor']),
                `You just got Terminator to your collection in which Arnold, John Conor are taking part!`);
            assert.equal(instance.movieCollection.length, 2);
        });
        it('check if throws error if we already have the movie in the movie collection', function () {
            instance.buyMovie('Terminator', ['Arnold', 'John Conor']);
            assert.throw(function () {
                instance.buyMovie('Terminator', ['Arnold', 'John Conor']);
            }, Error);
        });
    });
    describe('Tests for discardMovie function', function () {
        it('check if throws error if movies is not in the collection', function () {
            assert.throw(function () {
                instance.discardMovie('Green Mile');
            }, Error);
        });
        it('check if function removes movie from collection when we have it and its watched', function () {
            instance.buyMovie('Terminator', ['Arnold', 'John Conor']);
            instance.watchMovie('Terminator');
            assert.equal(instance.movieCollection.length, 1);
            instance.discardMovie('Terminator');
            assert.equal(instance.movieCollection.length, 0);
        });
        it('check if returns proper message after deletion',function(){
            instance.buyMovie('Terminator', ['Arnold', 'John Conor']);
            instance.watchMovie('Terminator');
            assert.equal(instance.discardMovie('Terminator'), `You just threw away Terminator!`);
        });
        it('check if discarded movie is not present in watched list', function(){
            instance.buyMovie('Terminator', ['Arnold', 'John Conor']);
            instance.watchMovie('Terminator');
            instance.discardMovie('Terminator');
            assert.equal(instance.watched['Terminator'], undefined);
        });
        it('check if function throws error when removes movie from collection when we have it and its not watched', function () {
            instance.buyMovie('Terminator', ['Arnold', 'John Conor']);
            assert.throw(function () {
            instance.discardMovie('Terminator');
            }, Error);
        });
        //may need more tests
    });
    describe('Tests for watchMovie function', function(){
        it('check if adds movie to watched movies when it is in the collection',function(){
            instance.buyMovie('Terminator', ['Arnold', 'John Conor']);
            instance.watchMovie('Terminator');
            assert.equal(instance.watched['Terminator'], 1);
        });
        it('check if increases movie watched times when it is already in watched list',function(){
            instance.buyMovie('Terminator', ['Arnold', 'John Conor']);
            instance.watchMovie('Terminator');
            instance.watchMovie('Terminator');
            assert.equal(instance.watched['Terminator'], 2);
        });
        it('check if throws error when trying to watch movie which is not in the collection',function(){
            assert.throw(function(){
                instance.watchMovie('The Matrix');
            });
        },Error);
    });
    describe('Tests for favourite movie function',function(){
        it('check if throws an error when movies arent watched=>empty watch list',function(){
            assert.throw(function(){
                instance.favouriteMovie();
            },Error);
        });
        it('check if works correctly',function(){
            instance.buyMovie('Terminator', ['Arnold', 'John Conor']);
            instance.buyMovie('The Matrix', ['Kianu Reeves', 'Carry Ann Moss']);
            instance.buyMovie('Greenland', ['Gerard Butler', 'Some kid']);
            instance.watchMovie('The Matrix');
            instance.watchMovie('The Matrix');
            instance.watchMovie('Terminator');
            instance.watchMovie('Greenland');
            assert.equal(instance.favouriteMovie(), `Your favourite movie is The Matrix and you have watched it 2 times!`)
        });
        it('check if works correctly when movies are watched even times',function(){
            instance.buyMovie('Terminator', ['Arnold', 'John Conor']);
            instance.buyMovie('The Matrix', ['Kianu Reeves', 'Carry Ann Moss']);
            instance.buyMovie('Greenland', ['Gerard Butler', 'Some kid']);
            instance.watchMovie('The Matrix');
            instance.watchMovie('The Matrix');
            instance.watchMovie('Terminator');
            instance.watchMovie('Terminator');
            instance.watchMovie('Greenland');
            instance.watchMovie('Greenland');
            assert.equal(instance.favouriteMovie(), `Your favourite movie is The Matrix and you have watched it 2 times!`)
        });
    });
    describe('Tests for mostStarredActor function',function(){
        it('check if throws error when no movies are watched', function(){
            assert.throw(function(){
                instance.mostStarredActor();
            },Error);
        });
        it('check if works correctly', function(){
            instance.buyMovie('Terminator', ['Arnold', 'John Conor']);
            instance.buyMovie('The Matrix', ['Kianu Reeves', 'Carry Ann Moss']);
            instance.buyMovie('Greenland', ['Gerard Butler', 'Some kid']);
            instance.buyMovie('John Wick',['Kianu Reeves','Some other guys']);
            instance.buyMovie('John Wick2',['Kianu Reeves','Some other guys']);
            instance.buyMovie('John Wick3',['Kianu Reeves','Some other guys']);
            instance.buyMovie('Speed',['Kianu Reeves','Some other guys']);
            assert.equal(instance.mostStarredActor(), `The most starred actor is Kianu Reeves and starred in 5 movies!`)
        });
        it('check if works correctly when actors starred equal times', function(){
            instance.buyMovie('Terminator', ['Arnold', 'John Conor1']);
            instance.buyMovie('Terminator 2', ['Arnold', 'John Conor2']);
            instance.buyMovie('Greenland', ['Gerard Butler', 'Some kid1']);
            instance.buyMovie('Greenland 2', ['Gerard Butler', 'Some kid2']);
            instance.buyMovie('John Wick',['Kianu Reeves','Some other guy1']);
            instance.buyMovie('John Wick 2',['Kianu Reeves','Some other guy2']);
            assert.equal(instance.mostStarredActor(), `The most starred actor is Arnold and starred in 2 movies!`)
        });
    });
});