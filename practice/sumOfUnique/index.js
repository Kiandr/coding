/**
 * @param {number[]} nums
 * @return {number}
 */
var sumOfUnique = function (nums) {

    let data = new Map()
    let sum = 0;
    for (let i = 0; i < nums.length; i++) {
        for (let j = 0; j <= nums.length; j++) {
            (nums[i] === nums[j] && i !== j && data.has(nums[i]) === false) ? data.set(nums[i], false) : true;
        }
    }
    for (let i = 0; i < nums.length; i++) {
        sum = data.get(nums[i]) !== false ? sum + nums[i] : sum;
    }
    return sum;
};
console.log(sumOfUnique([1, 2, 3, 2]))
console.log(sumOfUnique([1, 1, 1, 1, 1]))
//

/*
https://leetcode.com/problems/sum-of-unique-elements/discuss/1194806/Runtime-faster-than-60.13-of-JavaScript-andand-Memory-Usage-less-than-45.37-of
Runtime: 80 ms, faster than 60.13% of JavaScript online submissions for Sum of Unique Elements.
Memory Usage: 38.8 MB, less than 45.37% of JavaScript online submissions for Sum of Unique Elements.

1748. Sum of Unique Elements
Easy

You are given an integer array nums. The unique elements of an array are the elements that appear exactly once in the array.

Return the sum of all the unique elements of nums.



Example 1:

Input: nums = [1,2,3,2]
Output: 4
Explanation: The unique elements are [1,3], and the sum is 4.

Example 2:

Input: nums = [1,1,1,1,1]
Output: 0
Explanation: There are no unique elements, and the sum is 0.

Example 3:

Input: nums = [1,2,3,4,5]
Output: 15
Explanation: The unique elements are [1,2,3,4,5], and the sum is 15.



Constraints:

    1 <= nums.length <= 100
    1 <= nums[i] <= 100

Accepted
28.9K
Submissions
38.7K
* */