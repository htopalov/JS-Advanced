class Parking {
    constructor(capacity) {
        this.capacity = Number(capacity);
        this.vehicles = [];
    }
    addCar(carModel, carNumber) {
        if (this.capacity <= this.vehicles.length) {
            throw new Error('Not enough parking space.');
        } else {
            let car = { carModel: carModel, carNumber: carNumber, payed: false };
            this.vehicles.push(car);
            return `The ${carModel}, with a registration number ${carNumber}, parked.`;
        }
    }
    removeCar(carNumber) {
        let carToRemove = this.vehicles.find(x => x.carNumber == carNumber);
        if (carToRemove == undefined) {
            throw new Error(`The car, you're looking for, is not found.`);
        } else if (carToRemove.payed == false) {
            throw new Error(`${carToRemove.carNumber} needs to pay before leaving the parking lot.`);
        } else {
            this.vehicles = this.vehicles.filter(x=>x !== carToRemove);
            return `${carToRemove.carNumber} left the parking lot.`;
        }
    }
    pay(carNumber){
        let carToPay = this.vehicles.find(x => x.carNumber == carNumber);
        if (carToPay == undefined) {
            throw new Error(`${carNumber} is not in the parking lot.`);
        } else if (carToPay.payed == true) {
            throw new Error(`${carToPay.carNumber}'s driver has already payed his ticket.`);
        } else {
            carToPay.payed = true;
            return `${carToPay.carNumber}'s driver successfully payed for his stay.`;
        }
    }
    getStatistics(carNumber){
        if (typeof carNumber !== 'undefined') {
            let car = this.vehicles.find(x => x.carNumber == carNumber);
            let payedStatus = car.payed ? 'payed' : 'Not payed';
            return `${car.carModel} == ${car.carNumber} - ${payedStatus}`;
        } else {
            let resultStr = `The Parking Lot has ${this.capacity - this.vehicles.length} empty spots left.`;
            let sorted = this.vehicles.sort((a,b) => a.carModel.localeCompare(b.carModel));
            for (const car of sorted) {
                let payedStatus = car.payed ? 'payed' : 'Not payed';
                resultStr += `\n${car.carModel} == ${car.carNumber} - ${payedStatus}`;
            }

            return resultStr;
        }
    }
}

const parking = new Parking(12);

console.log(parking.addCar("Colvo t600", "TX3691CA"));
parking.addCar('Zazka', 'ST1345SA');
parking.addCar('Audi', 'ST1345S3');
parking.addCar('BMW', 'ST1345Sf');
parking.addCar('Giat', 'ST1345Sq');
parking.pay('TX3691CA');
parking.removeCar('TX3691CA')
console.log(parking.getStatistics());

