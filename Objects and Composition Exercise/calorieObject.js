function composer(inputArr){
    let obj = {};
    for(let i = 0; i< inputArr.length; i++){
        if (i % 2 == 0) {
            obj[inputArr[i]] = Number(inputArr[i+1]);
        }
    }
    console.log(obj);
}


composer(['Yoghurt', '48', 'Rise', '138', 'Apple', '52']);