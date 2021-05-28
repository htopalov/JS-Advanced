function solve(arr){
    let max = Number.MIN_SAFE_INTEGER;

    let result = arr.reduce((acc,el) => {
        if (el >= max) {
            max = el;
            acc.push(max);
        }
        return acc;
    }, []);

    return result;
}

solve([1, 
    3, 
    8, 
    4, 
    10, 
    12, 
    3, 
    2, 
    24]
    );