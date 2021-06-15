function solve(ticketDataArr, criteria) {
    let ticketDB = [];
    class Ticket {
        constructor(destination, price, status) {
            this.destination = destination;
            this.price = price;
            this.status = status;
        }
    }
    for (const ticket of ticketDataArr) {
        let [ticketDest, ticketPrice, ticketStatus] = ticket.split('|');
        ticketDB.push(new Ticket(ticketDest, Number(ticketPrice), ticketStatus));
    }

    function compare(a, b) {
        if (a[criteria] > b[criteria]) {
            return 1;
        } else if (a[criteria] < b[criteria]) {
            return - 1
        } else {
            return 0;
        }
    }
    return ticketDB.sort(compare);
}

solve(['Philadelphia|94.20|available',
    'New York City|95.99|available',
    'New York City|95.99|sold',
    'Boston|126.20|departed'],
    'destination'
);

solve(['Philadelphia|94.20|available',
'New York City|95.99|available',
'New York City|95.99|sold',
'Boston|126.20|departed'],
'status'
);