function solve(arr){
    let sum = Number(arr.pop()) + Number(arr.shift());
    return sum;
}

solve(['20', '30', '40']);
solve(['5', '10']);