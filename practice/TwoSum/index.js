/***
 Given an array of integers, return indices of the two numbers such that they add up to a specific target.

 You may assume that each input would have exactly one solution, and you may not use the same element twice.

 Example:

 Given nums = [2, 7, 11, 15], target = 9,

 Because nums[0] + nums[1] = 2 + 7 = 9,
 return [0, 1].

 */
function foo(nums, target){
  let myArray = [];
  console.log(Array.isArray(nums));
  if (!Array.isArray(nums)||nums.length===0||parseInt(target)<0) return 0;
  for (let i = 0; i < nums.length-1; i++) {
    if(nums[i]+nums[i+1] === parseInt(target)){
      myArray.push(i)
      myArray.push(i+1)
    }
  }
  return myArray;
}

console.log(foo([2, 7, 11, 15], 9));
