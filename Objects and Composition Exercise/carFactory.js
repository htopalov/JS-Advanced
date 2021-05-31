function factory(order) {
    let engines = [{ power: 90, volume: 1800 }, { power: 120, volume: 2400 }, { power: 200, volume: 3500 }];
    let carriages = [{ type: 'hatchback', color: '' }, { type: 'coupe', color: '' }];
    let wheels = [];
    wheels.length = 4;
    let car = {
        model: order.model,
        engine: undefined,
        carriage: undefined,
        wheels: wheels
    };
    if (order.power <= 90) {
        car.engine = engines[0];
    } else if (order.power > 90 && order.power <= 120) {
        car.engine = engines[1];
    } else if (order.power > 120 && order.power <= 200) {
        car.engine = engines[2];
    }

    if (order.carriage == 'hatchback') {
        car.carriage = carriages[0];
    } else if (order.carriage == 'coupe') {
        car.carriage = carriages[1];
    }

    car.carriage.color = order.color;

    if (order.wheelsize % 2 == 0) {
        car.wheels.fill(order.wheelsize - 1);
    } else {
        car.wheels.fill(order.wheelsize);
    }

    return car;
}

console.log(factory({
    model: 'VW Golf II',
    power: 90,
    color: 'blue',
    carriage: 'hatchback',
    wheelsize: 14
}
));

console.log(factory({
    model: 'Opel Vectra',
    power: 110,
    color: 'grey',
    carriage: 'coupe',
    wheelsize: 17
}
));