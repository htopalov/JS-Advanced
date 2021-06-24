class Vacationer {
    constructor(fullName, creditCard = [1111, '', 111]) {
        this.fullName = fullName;
        this.creditCard = this.addCreditCardInfo(creditCard);
        this.wishList = [];
        this.idNumber = this.generateIDNumber();
    }

    get fullName() {
        return this._fullName;
    }

    set fullName(value) {
        if (value.length !== 3) {
            throw new Error("Name must include first name, middle name and last name");
        }
        const regex = /^[A-Z][a-z]+ [A-Z][a-z]+ [A-Z][a-z]+$/g;
        if (!regex.test(value.join(' '))) {
            throw new Error("Invalid full name");
        }
        return this._fullName = { firstName: value[0], middleName: value[1], lastName: value[2] };
    }
    addDestinationToWishList(destination) {
        if (this.wishList.includes(destination)) {
            throw new Error("Destination already exists in wishlist");
        }
        this.wishList.push(destination);
        this.wishList = this.wishList.sort((a, b) => a.length - b.length);
    }
    addCreditCardInfo(value) {
        if (value.length !== 3) {
            throw new Error("Missing credit card information");
        }
        if (typeof value[0] !== 'number' || typeof value[2] !== 'number') {
            throw new Error("Invalid credit card details");
        }
        return { cardNumber: value[0], expirationDate: value[1], securityNumber: value[2] };
    }
    generateIDNumber() {
        let id = (231 * this.fullName.firstName.charCodeAt(0)) + (139 * this.fullName.middleName.length);
        let lastName = this.fullName.lastName;
        if (lastName[lastName.length - 1] == 'a' || lastName[lastName.length - 1] == 'e' ||
            lastName[lastName.length - 1] == 'o' || lastName[lastName.length - 1] == 'i' ||
            lastName[lastName.length - 1] == 'u') {
            id += '8';
        } else {
            id += '7';
        }
        return id;
    }

    getVacationerInfo() {
        return `Name: ${this.fullName.firstName} ${this.fullName.middleName} ${this.fullName.lastName}\nID Number: ${this.idNumber}\nWishlist:\n${this.wishList.length == 0 ? 'empty' : this.wishList.join(', ')}\nCredit Card:\nCard Number: ${this.creditCard.cardNumber}\nExpiration Date: ${this.creditCard.expirationDate}\nSecurity Number: ${this.creditCard.securityNumber}`;
    }
}

// Initialize vacationers with 2 and 3 parameters
let vacationer1 = new Vacationer(["Vania", "Ivanova", "Zhivkova"]);
let vacationer2 = new Vacationer(["Tania", "Ivanova", "Zhivkova"],
    [123456789, "10/01/2018", 777]);

// Should throw an error (Invalid full name)
try {
    let vacationer3 = new Vacationer(["Vania", "Ivanova", "ZhiVkova"]);
} catch (err) {
    console.log("Error: " + err.message);
}

// Should throw an error (Missing credit card information)
try {
    let vacationer3 = new Vacationer(["Zdravko", "Georgiev", "Petrov"]);
    vacationer3.addCreditCardInfo([123456789, "20/10/2018"]);
} catch (err) {
    console.log("Error: " + err.message);
}

vacationer1.addDestinationToWishList('Spain');
vacationer1.addDestinationToWishList('Germany');
vacationer1.addDestinationToWishList('Bali');

// Return information about the vacationers
console.log(vacationer1.getVacationerInfo());
console.log(vacationer2.getVacationerInfo());

