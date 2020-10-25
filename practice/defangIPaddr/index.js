'use strict';

/**
 * Given a valid (IPv4) IP address, return a defanged version of that IP address.
 * A defanged IP address replaces every period "." with "[.]".
 * Input: address = "1.1.1.1"
 * Output: "1[.]1[.]1[.]1"
 * */
function foo(address) {
  let myArray = '';
  let start = 0;
  let count = 0;
  for (let i = 0; i < address.length; i++) {
    if (address[i] === '.') {
      count++;
      myArray += `${address.slice(start, i)}[.]`;
      start = i + 1;
    }
  }
  if (start > 0) {
    console.log(address.slice(start, address.length));
    myArray += address.slice(start, address.length);
  }
  return myArray;
}

console.log(foo('192.169.123.100'));
console.log(foo('1.1.1.1'));
