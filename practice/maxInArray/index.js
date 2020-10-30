'use strict'
function foo(candies, extraCandies){
  let max = 0
  let counter = []
  for (const candy of candies) {
    max = candy > max ? candy : max;
  }
  for (let i = 0; i < candies.length; i++) {
    counter[i] = candies[i]+extraCandies >= max
  }
  return counter;
}
console.log(foo([4,2,1,1,2],1))