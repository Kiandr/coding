'use strict';

/***
 * Given the array nums, for each nums[i] find out how many numbers in the array are smaller than it.
 * That is, for each nums[i] you have to count the number of valid j's such that j != i and nums[j] < nums[i].
 * @param nums
 * @returns {*}
 */

function foo(nums) {
  let m = [];
  for (let i = 0; i < nums.length; i++) {
    let count = 0;
    for (let j = 0; j < nums.length; j++) {
      if(j!=i && nums[j] < nums[i])
      ++count
    }
    m.push(count)
  }return m;
}

console.log(foo([8, 1, 2, 2, 3]));