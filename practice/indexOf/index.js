'use strict'
function foo(s){
console.log('----')
  for (let i = 0; i < s.length; i++) {

    // console.log(s[i],i)
    console.log(s.indexOf(s[i]))

  }
  console.log('----')

}
console.log(foo('abcd'))