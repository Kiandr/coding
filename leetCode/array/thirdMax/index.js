/**
 * @param {number[]} nums
 * @return {number}
 */
var thirdMax = function (nums) {
// console.log (nums.length);
    let arr = [];
    nums.forEach(a => {
        if (arr.includes(a) === false) arr.push (a);
    })
    arr.sort((a, b) => { return a-b});
    // return  [arr]
    return arr.length-2 > 0 ? arr[arr.length-3] : Math.max(...arr)
};

console.log(thirdMax([3, 2, 1])) //1
console.log(thirdMax([2, 1])) //2
console.log(thirdMax([2, 2, 3, 1])) //1
console.log(thirdMax([1,2,2,5,3,5])) //2
console.log(thirdMax([1,1,1])) //1
console.log(thirdMax([3,2,3,1,2,4,5,5,6,7,7,8,2,3,1,1,1,10,11,5,6,2,4,7,8,5,6])) //8

//https://leetcode.com/problems/third-maximum-number/

/*
Runtime: 144 ms, faster than 10.91% of JavaScript online submissions for Third Maximum Number.
Memory Usage: 40.1 MB, less than 61.64% of JavaScript online submissions for Third Maximum Number.
*Given integer array nums, return the third maximum number in this array. If the third maximum does not exist, return the maximum number.



Example 1:

Input: nums = [3,2,1]
Output: 1
Explanation: The third maximum is 1.

Example 2:

Input: nums = [1,2]
Output: 2
Explanation: The third maximum does not exist, so the maximum (2) is returned instead.

Example 3:

Input: nums = [2,2,3,1]
Output: 1
Explanation: Note that the third maximum here means the third maximum distinct number.
Both numbers with value 2 are both considered as second maximum.



Constraints:

    1 <= nums.length <= 104
    -231 <= nums[i] <= 231 - 1


Follow up: Can you find an O(n) solution?
* */