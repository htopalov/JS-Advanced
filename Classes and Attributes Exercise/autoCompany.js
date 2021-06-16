function solve(inputArr) {
    let collection = new Map();
    inputArr.forEach(e => {
        let [carBrand, carModel, producedCars] = e.split(' | ');
        let innerCollection = new Map();
        if (collection.has(carBrand) == false) {
            collection.set(carBrand, innerCollection.set(carModel, Number(producedCars)));
        } else {
            if (collection.get(carBrand).has(carModel) == false) {
                collection.get(carBrand).set(carModel, Number(producedCars));
            } else {
                collection.get(carBrand).set(carModel, collection.get(carBrand).get(carModel) + Number(producedCars));
            }
        }
    });

    for (const [carBrand, models] of collection) {
        console.log(carBrand);
        for (const [model,quantity] of models) {
            console.log(`###${model} -> ${quantity}`);
        }
    }
}

solve(['Audi | Q7 | 1000',
'Audi | Q6 | 100',
'BMW | X5 | 1000',
'BMW | X6 | 100',
'Citroen | C4 | 123',
'Volga | GAZ-24 | 1000000',
'Lada | Niva | 1000000',
'Lada | Jigula | 1000000',
'Citroen | C4 | 22',
'Citroen | C5 | 10']
);