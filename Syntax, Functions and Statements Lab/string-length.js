function stringLength(firstParam,secondParam,thirdParam){
    let sum = firstParam.length + secondParam.length + thirdParam.length;
    console.log(sum);
    console.log(Math.floor(sum/3));
}

stringLength('chocolate', 'ice cream', 'cake');
stringLength('pasta', '5', '22.3');