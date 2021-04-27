/**
 * @param {number[][]} grid
 * @return {number}
 */
var countNegatives = function (grid) {
    let count = 0;

    for (let i = 0; i < grid.length; i++) {

        for (let j = 0; j <= grid[i].length; ) {
            count = grid[i][j] < 0 ? ++count : count
            j++;
        }
    }
    return count;
};
// console.log(countNegatives([[4, 3, 2, -1], [3, 2, 1, -1], [1, 1, -1, -2], [-1, -1, -2, -3]]));
// console.log(countNegatives([[5, 1, 0], [-5, -5, -5]]));
console.log(countNegatives([[6, 5, 4, 4, 3, -2, -2, -2], [5, -2, -2, -3, -3, -4, -4, -4], [-3, -3, -3, -4, -4, -5, -5, -5], [-3, -5, -5, -5, -5, -5, -5, -5], [-4, -5, -5, -5, -5, -5, -5, -5]]));
// console.log(countNegatives([
//     [0,1,2,3,4,5],
//     [1,1,2,3,4,5],
//     [2,1,2,3,4,5],
//     [3,1,2,3,4,5],
//     [4,1,2,3,4,5],
//     [5,1,2,3,4,5]
// ]));
/*
https://leetcode.com/problems/count-negative-numbers-in-a-sorted-matrix/discuss/1179337/runtime-90.82-of-javascript-andand-memory-usage-61.43-of-javascript
Runtime: 76 ms, faster than 90.37% of JavaScript online submissions for Count Negative Numbers in a Sorted Matrix.
Memory Usage: 40 MB, less than 60.42% of JavaScript online submissions for Count Negative Numbers in a Sorted Matrix.


https://leetcode.com/problems/count-negative-numbers-in-a-sorted-matrix/

Given a m x n matrix grid which is sorted in non-increasing order both row-wise and column-wise, return the number of negative numbers in grid.

 

Example 1:

Input: grid = [[4,3,2,-1],[3,2,1,-1],[1,1,-1,-2],[-1,-1,-2,-3]]
Output: 8
Explanation: There are 8 negatives number in the matrix.

Example 2:

Input: grid = [[3,2],[1,0]]
Output: 0

Example 3:

Input: grid = [[1,-1],[-1,-1]]
Output: 3

Example 4:

Input: grid = [[-1]]
Output: 1

 

Constraints:

    m == grid.length
    n == grid[i].length
    1 <= m, n <= 100
    -100 <= grid[i][j] <= 100

*/