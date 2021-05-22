function solve(input){
    let str = input.toString();
    let sum = 0;
    let isSame;
    for(let i = 0; i< str.length; i++){
        sum += Number(str[i]);
        isSame = Number(str[0]) == Number(str[i]);
    }
    console.log(isSame);
    console.log(sum);
}

solve(2222222);
solve(1234);