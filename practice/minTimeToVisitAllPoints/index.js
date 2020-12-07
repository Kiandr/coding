/**
 * @param {number[][]} points
 * @return {number}
 */

const abs=(n)=>{
    return n>0? n : 0-n;
}
var minTimeToVisitAllPoints = function(points) {
    let count = 0;
    for( let i = 0; i<points.length-1; i++){
        count += abs(points[i][0]-points[i+1][0]) > abs(points[i][1]-points[i+1][1]) ? abs(points[i][0]-points[i+1][0]) : abs(points[i][1]-points[i+1][1])
    }
    return count;
};
console.log(minTimeToVisitAllPoints([[1,1],[3,4],[-1,0]]))
// console.log(abs(-1))
/*
https://leetcode.com/problems/minimum-time-visiting-all-points/discuss/962792/Memory-Usage%3A-39.6-MB-less-than-94.63-Runtime%3A-100-ms-faster-than-15.91
Runtime: 100 ms, faster than 15.91% of JavaScript online submissions for Minimum Time Visiting All Points.
Memory Usage: 39.6 MB, less than 94.63% of JavaScript online submissions for Minimum Time Visiting All Points.
On a plane there are n points with integer coordinates points[i] = [xi, yi]. Your task is to find the minimum time in seconds to visit all points.

You can move according to the next rules:

    In one second always you can either move vertically, horizontally by one unit or diagonally (it means to move one unit vertically and one unit horizontally in one second).
    You have to visit the points in the same order as they appear in the array.

 

Example 1:

Input: points = [[1,1],[3,4],[-1,0]]
Output: 7
Explanation: One optimal path is [1,1] -> [2,2] -> [3,3] -> [3,4] -> [2,3] -> [1,2] -> [0,1] -> [-1,0]   
Time from [1,1] to [3,4] = 3 seconds 
Time from [3,4] to [-1,0] = 4 seconds
Total time = 7 seconds

Example 2:

Input: points = [[3,2],[-2,2]]
Output: 5

*/