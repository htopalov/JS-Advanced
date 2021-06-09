function solve(...input) {
    let obj = {};
    let sorted = [];
    function innerFunc() {
        input.forEach(x => {
            console.log(`${typeof x}: ${x}`);
            if (obj[typeof x] !== undefined) {
                obj[typeof x] += 1;
            } else {
            obj[typeof x] = 1;
            }
        });
        for (const key in obj) {
            sorted.push([key,obj[key]]);
        }
        sorted.sort((a,b) => b[1] - a[1]);
        sorted.forEach(x=> console.log(x.join(' = ')));

    }
    innerFunc();
}


//solve('cat', 42, function () { console.log('Hello world!'); });
solve({ name: 'bob'}, 3.333, 9.999);