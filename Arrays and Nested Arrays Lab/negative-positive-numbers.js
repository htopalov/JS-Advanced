function solve(arr){
    let resultArr = [];
    for(let i = 0; i< arr.length; i++){
        if (arr[i] < 0) {
            resultArr.unshift(arr[i]);
        } else {
            resultArr.push(arr[i]);
        }
    }
    for (const element of resultArr) {
        console.log(element);
    }
}

solve([7, -2, 8, 9]);
solve([3, -2, 0, -1]);