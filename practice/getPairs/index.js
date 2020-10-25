'user strict';

/**
 * Given an array of integers nums.

 A pair (i,j) is called good if nums[i] == nums[j] and i < j.

 Return the number of good pairs.
 * */
function foo(nums) {
  let count = 0;
  for (let i = 0; i < nums.length; i++) {
    for (let j = i; j < nums.length; j++) {
      // console.log(`${i} ${j}`)      // console.log(`${nums[i] === nums[j] && i < j ? `i=${i}j=${j}`: count}`);
      console.log(`${nums[i] === nums[j] && i < j ? count++ : count}`);
    }
  }
  return count;
}

console.log(foo([1, 2, 3, 1, 1, 3]));
// console.log(foo([1,1,1,1]))