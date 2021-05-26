function elements(arr){
    let resultStr = '';
    for(let i=0; i< arr.length; i++){
        if (i % 2 == 0) {
            resultStr += arr[i] + ' ';
        }
    }
    console.log(resultStr);
}

elements(['20', '30', '40', '50', '60']);
elements(['5', '10']);