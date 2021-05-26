// function solve(matrix) {
//     let result = 0;
//     for (let i = 0; i < matrix.length; i++) {
//         for (let j = 0; j < matrix[i].length; j++) {
//             if (matrix[i][j] > result) {
//                 result = matrix[i][j];
//             }
//         }
//     }
//     return result;
// }


function solve(matrix){
    let max = Math.max(...[].concat(...matrix));
    return max;
}
solve([[20, 50, 10], [8, 33, 145]]);
solve([[3, 5, 7, 12], [-1, 4, 33, 2], [8, 3, 0, 4]]);