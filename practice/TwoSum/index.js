/***
 Given an array of integers, return indices of the two numbers such that they add up to a specific target.

 You may assume that each input would have exactly one solution, and you may not use the same element twice.

 Example:

 Given nums = [2, 7, 11, 15], target = 9,

 Because nums[0] + nums[1] = 2 + 7 = 9,
 return [0, 1].

 */
function foo(nums, target) {
  let myArray = [];
  if (!Array.isArray(nums) || nums.length === 0 || parseInt(target) < 0) return 0;

  for (let i = 0; i < nums.length; i++) {
    for (let j = 0; j < nums.length; j++) {
      if(nums[i]+nums[j]===target) {
      if(!myArray.includes(i))myArray.push(i);
        // console.log(target);
      }
     // console.log(nums[i], nums[j],nums[i]+ nums[j]);
    }

  } return myArray
}

// let res = foo([2, 7, 11, 15], 9);
// res.forEach((value, index, array)=>{
//   console.log([0, 1][index]===value)
// })
// console.log( foo([1, 2, 3], 4))
console.log( foo([2, 7, 11, 15], 9))
// 0 -2