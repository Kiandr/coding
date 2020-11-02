'use strict';
var restoreString = function(s, indices) {
if(isNaN(s)===false || s.length != indices.length || s.length <=0) return false;
let r = [];
let result=''
  let is =''
for (let i = 0; i < s.length; i++) {
    console.log(`${i} ${indices[i]} ${indices.indexOf(i)} `)
  is+=i
  r.push(indices[i])
     result += indices.indexOf(i)
  }

console.log(is)
console.log(indices.join())
  console.log(result)
  return r.join('');
};

console.log(restoreString('codeleet',[4,5,6,7,0,2,1,3]))