function solve(numInput,oper1,oper2,oper3,oper4,oper5){
    let number = Number(numInput);
    let arrOperations = [];
    arrOperations.push(oper1,oper2,oper3,oper4,oper5);
    for(let i=0; i< arrOperations.length; i++){
        switch(arrOperations[i]){
            case'chop': number /= 2; console.log(number); break;
            case'dice': number = Math.sqrt(number); console.log(number); break;
            case'spice': number +=1; console.log(number); break;
            case'bake': number *= 3; console.log(number); break;
            case'fillet': number -= number*0.2; console.log(number); break;
        }
    }
}
solve('32', 'chop', 'chop', 'chop', 'chop', 'chop');
solve('9', 'dice', 'spice', 'chop', 'bake', 'fillet');