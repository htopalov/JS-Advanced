class Bank{
    constructor(bankName){
        this._bankName = bankName;
        this.allCustomers = [];
    }
    newCustomer(customer){
       
        if (this.allCustomers.some(x=>x.personalId == customer.personalId)) {
            throw new Error(`${customer.firstName} ${customer.lastName} is already our customer!`);
        }
        customer.totalMoney = 0;
        customer.transactions = [];
        customer.transactionNumber = 1;
        this.allCustomers.push(customer);
        return {firstName: customer.firstName,
            lastName: customer.lastName,
            personalId: customer.personalId
        };
    }
    depositMoney(personalId,amount){
        let currentCustomer = this._validateCustomer(personalId);
        currentCustomer.totalMoney += amount;
        currentCustomer.transactions.push(`${currentCustomer.transactionNumber++}. ${currentCustomer.firstName} ${currentCustomer.lastName} made deposit of ${amount}$!`);
        return `${currentCustomer.totalMoney}$`;
    }
    withdrawMoney(personalId,amount){
        let currentCustomer = this._validateCustomer(personalId);
        if (currentCustomer.totalMoney < amount) {
            throw new Error(`${currentCustomer.firstName} ${currentCustomer.lastName} does not have enough money to withdraw that amount!`);
        }
        currentCustomer.totalMoney -= amount;
        currentCustomer.transactions.push(`${currentCustomer.transactionNumber++}. ${currentCustomer.firstName} ${currentCustomer.lastName} withdrew ${amount}$!`);
        return `${currentCustomer.totalMoney}$`; 
    }
    customerInfo(personalId){
        let currentCustomer = this._validateCustomer(personalId);
        let result = '';
        result += `Bank name: ${this._bankName}\n`;
        result += `Customer name: ${currentCustomer.firstName} ${currentCustomer.lastName}\n`;
        result += `Customer ID: ${currentCustomer.personalId}\n`;
        result += `Total Money: ${currentCustomer.totalMoney}$\n`;
        result += `Transactions:\n`;
        for (const transaction of currentCustomer.transactions.reverse()) {
            result += transaction+`\n`;
        }
        return result.trim();
    }

    _validateCustomer(personalId){
        let currentCustomer = this.allCustomers.find(x=>x.personalId == personalId);
        if (currentCustomer === undefined) {
            throw new Error('We have no customer with this ID!');
        }
        return currentCustomer; 
    }
}


let bank = new Bank('SoftUni Bank');

console.log(bank.newCustomer({firstName: 'Svetlin', lastName: 'Nakov', personalId: 6233267}));
console.log(bank.newCustomer({firstName: 'Mihaela', lastName: 'Mileva', personalId: 4151596}));

bank.depositMoney(6233267, 250);
console.log(bank.depositMoney(6233267, 250));
bank.depositMoney(4151596,555);
console.log(bank.withdrawMoney(6233267, 125));
console.log(bank.customerInfo(6233267));