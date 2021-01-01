/**
 * @param {number[][]} mat
 * @return {number}
 */
var diagonalSum = function (mat) {
    let x = 0;
    let y = 0;
    let sum = 0;

    for (let i = 0; i < mat.length; i++) {
        for (let j = 0; j < mat[i].length; j++) {

            if (x === i && y === j) {
                sum += mat[i][j];
                console.log(`x[${i}]y[${j}]=${mat[i][j]}`)
            }


            if (x === i && (mat[i].length - 1) - y === j) {
                sum += mat[i][j];
                console.log(`x[${i}]y[${j}]=${mat[i][j]}`)
            }
        }
        x++
        y++
    }
    return mat.length % 2 ? sum - mat[mat.length / 2 | 0][(mat[mat.length / 2 | 0]).length / 2 | 0] : sum;
};
console.log(diagonalSum([[1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]]))

console.log(diagonalSum([[1, 1, 1, 1], [1, 1, 1, 1], [1, 1, 1, 1], [1, 1, 1, 1]]));
/*
https://leetcode.com/problems/matrix-diagonal-sum/submissions/
Runtime: 96 ms, faster than 11.94% of JavaScript online submissions for Matrix Diagonal Sum.
Memory Usage: 40.5 MB, less than 72.71% of JavaScript online submissions for Matrix Diagonal Sum.
* Given a square matrix mat, return the sum of the matrix diagonals.

Only include the sum of all the elements on the primary diagonal and
all the elements on the secondary diagonal that are not part of the primary diagonal.
Input: mat = [[1,2,3],
              [4,5,6],
              [7,8,9]]
Output: 25
Explanation: Diagonals sum: 1 + 5 + 9 + 3 + 7 = 25
Notice that element mat[1][1] = 5 is counted only once.

Example 2:

Input: mat = [[1,1,1,1],
              [1,1,1,1],
              [1,1,1,1],
              [1,1,1,1]]
Output: 8

Example 3:

Input: mat = [[5]]
Output: 5



Constraints:

    n == mat.length == mat[i].length
    1 <= n <= 100
    1 <= mat[i][j] <= 100
*/