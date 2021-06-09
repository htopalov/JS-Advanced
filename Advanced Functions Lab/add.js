function solution(num1) {
    let result = num1;
    function innerFunc(num2){
        return result+num2;
    }
    return innerFunc;
}

let add5 = solution(5);
console.log(add5(2));
console.log(add5(3));


