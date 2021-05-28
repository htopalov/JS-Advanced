function solve(arr) {

    function sorter(a, b) {
        if (a.length > b.length) {
            return 1;
        } else if (a.length == b.length) {
            return a.localeCompare(b);
        } else {
            return -1;
        }
    }

    arr.sort(sorter);

    for (const el of arr) {
        console.log(el);
    }
}

solve(['alpha',
    'beta',
    'gamma']);

solve(['Isacc',
    'Theodor',
    'Jack',
    'Harrison',
    'George']);

solve(['test',
    'Deny',
    'omen',
    'Default']);