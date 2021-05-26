function solve(arr){
    arr.sort((a,b)=> a-b);
    let resultArr = [];
    let position = 0;
    if (arr.length % 2 == 0) {
        position = arr.length / 2;
        resultArr = arr.slice(position);
    } else {
        position = Math.floor(arr.length / 2);
        resultArr = arr.slice(position);
    }
    return resultArr;
}

solve([4, 7, 2, 5]);
solve([3, 19, 14, 7, 2, 19, 6]);