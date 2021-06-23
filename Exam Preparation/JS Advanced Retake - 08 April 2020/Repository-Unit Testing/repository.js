class Repository {
    constructor(props) {
        this.props = props;
        this.data = new Map();

        let id = 0;
        this.nextId = function () {
            return id++;
        }
    }

    get count() {
        return this.data.size;
    }

    add(entity) {
        this._validate(entity);
        let id = this.nextId();
        this.data.set(id, entity);
        return id;
    }

    getId(id) {
        if (!this.data.has(id)) {
            throw new Error(`Entity with id: ${id} does not exist!`);
        }

        return this.data.get(id);
    }

    update(id, newEntity) {
        if (!this.data.has(id)) {
            throw new Error(`Entity with id: ${id} does not exist!`);
        }

        this._validate(newEntity);
        this.data.set(id, newEntity);
    }

    del(id) {
        if (!this.data.has(id)) {
            throw new Error(`Entity with id: ${id} does not exist!`);
        }

        this.data.delete(id);
    }

    _validate(entity) {
        //Validate existing property
        for (let propName in this.props) {
            if (!entity.hasOwnProperty(propName)) {
                throw new Error(`Property ${propName} is missing from the entity!`);
            }
        }

        //Validate property type
        for (let propName in entity) {
            let val = entity[propName];
            if (typeof val !== this.props[propName]) {
                throw new TypeError(`Property ${propName} is not of correct type!`);
            }
        }
    }
}


//UNIT TESTING FROM THIS POINT

const{assert,expect} = require('chai');

describe('Unit tests for Repository class', function(){
    let repo = undefined;
    let properties = undefined;
    this.beforeEach(function(){
        properties = {
            name: "string",
            age: "number",
            birthday: "object"
        };
        repo = new Repository(properties);
    });
    it('check if instantiating works', function(){
        assert.deepEqual(properties,repo.props);
        assert.equal(repo.data instanceof Map, true);
    });
    it('check if getter count works',function(){
        assert.equal(repo.count, 0);
        let entity = {
            name: "Pesho",
            age: 22,
            birthday: new Date(1998, 0, 7)
        };
        repo.add(entity);
        assert.equal(repo.count, 1);        
    });
    describe('Tests for add function', function(){
        it('check if add works correctly', function(){
            let entity = {
                name: "Pesho",
                age: 22,
                birthday: new Date(1998, 0, 7)
            };
            repo.add(entity);
            assert.equal(repo.count, 1);
        });
        it('check if add returns id', function(){
            let entity = {
                name: "Pesho",
                age: 22,
                birthday: new Date(1998, 0, 7)
            };
            assert.equal(repo.add(entity), 0);
            let entity2 = {
                name: "Gosho",
                age: 22,
                birthday: new Date(1998, 0, 7)
            };
            assert.equal(repo.add(entity2), 1);
            assert.equal(repo.count, 2);
        });
        it('check if validate throws error when missing property', function(){
            let entity = {
                name: "Pesho",
                age: 22
            };
            let entity2 = {
                name: "Pesho",
                birthday: new Date(1998, 0, 7)            
            };
            let entity3 = {
                age: 22,
                birthday: new Date(1998, 0, 7)
            };
            
            assert.throw(function(){
                repo.add(entity);
            },Error);
            assert.throw(function(){
                repo.add(entity2);
            },Error);
            assert.throw(function(){
                repo.add(entity3);
            },Error);
        });
        it('check if validate throws error when properties are not of the correct type',function(){
            let entity = {
                name: 123,
                age: 22,
                birthday: new Date(1998, 0, 7)
            };
            let entity2 = {
                name: 'Pesho',
                age: 'str',
                birthday: new Date(1998, 0, 7)
            };
            let entity3 = {
                name: 'Pesho',
                age: 22,
                birthday: 'str'
            };
                        
            assert.throw(function(){
                repo.add(entity);
            },TypeError);
            assert.throw(function(){
                repo.add(entity2);
            },TypeError);
            assert.throw(function(){
                repo.add(entity3);
            },TypeError);
        });
    });
    describe('tests for getId function',function(){
        it('check if returns entity correctly', function(){
            let entity = {
                name: "Pesho",
                age: 22,
                birthday: new Date(1998, 0, 7)
            };
            let entity2 = {
                name: "Gosho",
                age: 22,
                birthday: new Date(1998, 0, 7)
            };
            repo.add(entity);
            repo.add(entity2);
            assert.deepEqual(repo.getId(0), entity);    
            assert.deepEqual(repo.getId(1), entity2);        
        });
        it('check if throws error when id is missing', function(){
            assert.throw(function(){
                repo.getId(3);
            },Error);
            assert.throw(function(){
                repo.getId(-3);
            },Error);
        });
    });
    describe('tests for update function',function(){
        it('check if works correctly',function(){
            let entity = {
                name: "Pesho",
                age: 22,
                birthday: new Date(1998, 0, 7)
            };
            repo.add(entity);
            let newEntity = {
                name: "Gosho",
                age: 22,
                birthday: new Date(1998, 0, 7)
            };
            repo.update(0,newEntity);
            assert.deepEqual(repo.data.get(0), newEntity);        
        });
        it('check if throws error when id is not valid',function(){
            let newEntity = {
                name: "Gosho",
                age: 22,
                birthday: new Date(1998, 0, 7)
            };
            assert.throw(function(){
                repo.update(12,newEntity);
            },Error);
        });
        it('check if throws error when params of entity not enought',function(){
            let entity = {
                name: "Pesho",
                age: 22,
                birthday: new Date(1998, 0, 7)
            };
            let newEntity = {
                age: 22,
                birthday: new Date(1998, 0, 7)
            };
            repo.add(entity);
            assert.throw(function(){
                repo.update(0,newEntity);
            },Error);
        });
        it('check if throws error when params of entity not of the correct type',function(){
            let entity = {
                name: "Pesho",
                age: 22,
                birthday: new Date(1998, 0, 7)
            };
            let newEntity = {
                name: 'Gosho',
                age: 22,
                birthday: 'str'
            };
            repo.add(entity);
            assert.throw(function(){
                repo.update(0,newEntity);
            },TypeError);
        });
    });
    describe('tests for delete function', function(){
        it('check if works correctly', function(){
            let entity = {
                name: "Pesho",
                age: 22,
                birthday: new Date(1998, 0, 7)
            };
            repo.add(entity);
            assert.equal(repo.count, 1);
            repo.del(0);
            assert.equal(repo.count,0);            
        });
        it('check if throws error if id doesnt exist', function(){
            assert.throw(function(){
                repo.del(12);
            },Error);
            assert.throw(function(){
                repo.del(0);
            },Error);
        });
    });
})