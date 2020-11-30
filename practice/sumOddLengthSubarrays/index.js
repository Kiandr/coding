/**
 * https://leetcode.com/problems/sum-of-all-odd-length-subarrays/
 * @param {number[]} arr
 * @return {number}
 Solution:
 1- How to build subarray
 2- How to identify the odd length
 3- How to sum up from i to j subarray
 */
function oddOrEven(x) {
    return ( x & 1 ) ? "odd" : "even";
}

var sumOddLengthSubarrays01 = function (arr) {
    if (Array.isArray(arr) === false && arr.length <= 0) return 0;
    let subA = [];
    for (let i = 0; i <= arr.length; i++) {
        for (let j = i; j <= arr.length; j++) {
            if (arr.slice(i, j).length &1 )
                subA.push(arr.slice(i, j).reduce((prev, cur) => {
                    return prev + cur
                }))
        }
    }

    return subA.reduce((prev, curr) => {
        return prev + curr
    });
};

const sum=function(arr=[]){
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum+=parseInt(arr[i])
    }
    return sum
}

var sumOddLengthSubarrays = function (arr) {
    let subA = [];
    for (let i = 0; i <= arr.length; i++) {
        for (let j = i; j <= arr.length; j++) {
            if (arr.slice(i, j).length &1 )
                subA.push(sum(arr.slice(i, j)))
        }
    }

    return sum(subA)
};
console.log(sumOddLengthSubarrays([1, 4, 2, 5, 3]))
/**
 * Given an array of positive integers arr, calculate the sum of all possible odd-length subarrays.

 A subarray is a contiguous subsequence of the array.

 Return the sum of all odd-length subarrays of arr.



 Example 1:

 Input: arr = [1,4,2,5,3]
 Output: 58
 Explanation: The odd-length subarrays of arr and their sums are:
 [1] = 1
 [4] = 4
 [2] = 2
 [5] = 5
 [3] = 3
 [1,4,2] = 7
 [4,2,5] = 11
 [2,5,3] = 10
 [1,4,2,5,3] = 15
 If we add all these together we get 1 + 4 + 2 + 5 + 3 + 7 + 11 + 10 + 15 = 58

 Example 2:

 Input: arr = [1,2]
 Output: 3
 Explanation: There are only 2 subarrays of odd length, [1] and [2]. Their sum is 3.

 Example 3:

 Input: arr = [10,11,12]
 Output: 66



 Constraints:

 1 <= arr.length <= 100
 1 <= arr[i] <= 1000


 * */