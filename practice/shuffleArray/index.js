'use strict';

function foo(nums, n){
  let myArr=[]
  for (let i = 0; i < nums.length-n; i++) {
    myArr.push(nums[i])
    myArr.push(nums[i+n])

// console.log(`${nums[i]} ${nums[i+n]}`)
  }
  return myArr;
}
console.log(foo([2,5,1,3,4,7], 3));
// [2,3,5,4,1,7]