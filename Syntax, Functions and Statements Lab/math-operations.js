function solve(firstInput,secondInput,operation){
    if (operation == '+') {
        console.log(firstInput + secondInput);
    } else if (operation == '-') {
        console.log(firstInput - secondInput);
    } else if (operation == '*') {
        console.log(firstInput*secondInput);
    } else if (operation == '/') {
        console.log(firstInput / secondInput);
    } else if (operation == '%') {
        console.log(firstInput % secondInput);
    } else {
        console.log(firstInput ** secondInput);
    }
}

solve(5, 6, '+');
solve(3, 5.5, '*');