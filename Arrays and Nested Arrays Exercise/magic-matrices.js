function solve(matrix){
    let result = false;
    let rows = [];
    let cols = [];
    for(let row=0; row<matrix.length; row++){
        rows[row] = matrix[row].reduce((acc, curr) => acc + curr);
        for(let col = 0; col< matrix[row].length; col++){
            cols[col] = (cols[col] || 0) + matrix[row][col];
        }
    }
    for(let i=0; i< rows.length; i++){
        if (rows[i] == cols[i]) {
            result = true;
        }
    }
    console.log(result);
}

solve([[4, 5, 6],[6, 5, 4],[5, 5, 5]]);
solve([[11, 32, 45],
    [21, 0, 1],
    [21, 1, 1]]
   );
solve([[1, 0, 0],
    [0, 0, 1],
    [0, 1, 0]]
   );