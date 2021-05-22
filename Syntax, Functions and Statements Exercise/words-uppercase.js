function solve(inputStr){
    let arr = inputStr.toUpperCase().match(/\w+/g);
    console.log(arr.join(', '));
}

solve('Hi, how are you?');