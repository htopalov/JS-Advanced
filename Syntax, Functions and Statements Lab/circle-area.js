function area(input){
    if (typeof(input) !== 'number') {
        console.log(`We can not calculate the circle area, because we receive a ${typeof(input)}.`);
    }
    else
    {
        console.log((Math.PI*Math.pow(input, 2)).toFixed(2));
    }
}

area(5);
area('name');