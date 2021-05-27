function solve(commands){
    let count = 1;
    let result = [];
    for(let i = 0; i < commands.length; i++){
        if (commands[i] == 'add') {
            result.push(count);
        } else {
            result.pop();
        }
        count++;
    }
    if (result.length > 0) {
        for (const num of result) {
            console.log(num);           
        }
    } else {
        console.log('Empty');
    }
}

solve(['add', 
'add', 
'add', 
'add']
);

solve(['add', 
'add', 
'remove', 
'add', 
'add']
);

solve(['remove', 
'remove', 
'remove']
);