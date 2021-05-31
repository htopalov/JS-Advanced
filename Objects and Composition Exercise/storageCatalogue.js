function storage(inputArr){
    let sorted = [];
    for (const current of inputArr) {
        sorted.push(current);
    }
    sorted.sort((a,b) => a.localeCompare(b));
    let letter;
    for(let i = 0; i< sorted.length; i++){
        let[name,price] = sorted[i].split(' : ');
        price = Number(price);
        if (name[0] != letter) {
            letter = name[0];
            console.log(letter);
        }
        console.log(`  ${name}: ${price}`);
    }
}


storage(['Appricot : 20.4',
'Fridge : 1500',
'TV : 1499',
'Deodorant : 10',
'Boiler : 300',
'Apple : 1.25',
'Anti-Bug Spray : 15',
'T-Shirt : 10']
);