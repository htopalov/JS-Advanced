function solve(inputArr){
    let result = [];
    let obj = {
        add: (str) => result.push(str),
        remove: (str) => result = result.filter(x=>x!== str),
        print: () => console.log(result.join(','))
    };

    inputArr.forEach(element => {
       let[command,word] = element.split(' ');
       obj[command](word); 
    });
}

solve(['add hello', 'add again', 'remove hello', 'add again', 'print']);
solve(['add pesho', 'add george', 'add peter', 'remove peter','print']);