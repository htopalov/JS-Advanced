function aggregateElements(inputArr){
    let sum = 0;
    for(let i = 0; i< inputArr.length; i++){
        sum += inputArr[i];
    }
    console.log(sum);
    sum = 0;
    for(let i = 0; i< inputArr.length; i++){
        sum += 1/inputArr[i];
    }
    console.log(sum);
    console.log(inputArr.join(''));
}

aggregateElements([1, 2, 3]);
aggregateElements([2, 4, 8, 16]);