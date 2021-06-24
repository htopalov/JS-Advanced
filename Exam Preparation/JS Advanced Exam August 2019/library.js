class Library {
    constructor(libraryName) {
        this.libraryName = libraryName;
        this.subscribers = [];
        this.subscriptionTypes = {
            normal: libraryName.length,
            special: libraryName.length * 2,
            vip: Number.MAX_SAFE_INTEGER,
          };
    }

    subscribe(name, type){
        if (type !== 'normal' && type !== 'special' && type !=='vip') {
            throw new Error(`The type ${type} is invalid`);
        }
        let person = this.subscribers.find(x=>x.name == name);
        if (person === undefined) {
            person = {
                name: name,
                type: type,
                books: []
            };
            this.subscribers.push(person);
        } else {
            person.type = type;
        }

        return person;
    }

    unsubscribe(name){
        let person = this.subscribers.find(x=>x.name == name);
        if (person === undefined) {
            throw new Error(`There is no such subscriber as ${name}`);
        }
        let index = this.subscribers.indexOf(person);
        this.subscribers.splice(index,1);
        return this.subscribers;
    }
    receiveBook(subscriberName, bookTitle, bookAuthor){
        let person = this.subscribers.find(x=>x.name == subscriberName);
        if (person === undefined) {
            throw new Error(`There is no such subscriber as ${subscriberName}`);
        }
        if (person.books.length < this.subscriptionTypes[person.type]) {
            person.books.push({title: bookTitle, author: bookAuthor});
        } else {
            throw new Error(`You have reached your subscription limit ${this.subscriptionTypes[person.type]}!`);
        }

        return person;
    }
    showInfo(){
        if (this.subscribers.length == 0) {
            return `${this.libraryName} has no information about any subscribers`;
        }
        let result = '';
        for (const person of this.subscribers) {
            result += `Subscriber: ${person.name}, Type: ${person.type}\n`;
            result += `Received books: `;
            for (const book of person.books) {
                result += `${book.title} by ${book.author}, `;
            }
            result +='\n';       
        }

        return result;
    }
}

let lib = new Library('Lib');

lib.subscribe('Peter', 'normal');
lib.subscribe('John', 'special');

lib.receiveBook('John', 'A Song of Ice and Fire', 'George R. R. Martin');
lib.receiveBook('Peter', 'Lord of the rings', 'J. R. R. Tolkien');
lib.receiveBook('John', 'Harry Potter', 'J. K. Rowling');

console.log(lib.showInfo());

