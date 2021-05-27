function solve(arr){
    arr.sort((a,b) => a-b);
    let result = [];
    for(let i= 0; i< arr.length; i++){
        result.push(arr.shift(),arr.pop());
    }
    result.push(...arr);
    return result;
}

solve([1, 65, 3, 52, 48, 63, 31, -3, 18, 56]);