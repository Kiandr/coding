/***
 *
 * Given two non-negative integers num1 and num2 represented as string, return the sum of num1 and num2.

 Note:

 The length of both num1 and num2 is < 5100.
 Both num1 and num2 contains only digits 0-9.
 Both num1 and num2 does not contain any leading zero.
 You must not use any built-in BigInteger library or convert the inputs to integer directly.

 */
function convertStringToNumber(num1) {
  let a = num1.split('');
  let first = [];
  for (let i = 0; i < a.length; i++) {
    first.push(a[i] * 1 >= 0 ? a[i] * 1 : 0);
  }
  console.log(first.join(''));

  return BigInt(num1);
}

function foo(num1, num2) {

  // split string into array char
  let A = num1.split('');
  let B = num2.split('');

  console.log(A.length);
  console.log(B.length);
  // identify the longest number  and put an order
  A = A.length >= B.length ? num1.split('') : num2.split('');
  B = A.length < B.length ? num1.split('') : num1.split('');
  let d = A.length - B.length;
  console.log(`A = ${A}`);
  console.log(`B = ${B}`);
  console.log(`distance = ${d}`);

  // pad the shortest length of array with 0s for addition
  let BA = [];
  let BB = B;
  while (d-- > 0) {BA.push('0');}
  console.log(`BA = ${BA}`);
  B = (BA.join('') + BB.join('')).split('');

  console.log(`Stiched B = ${B}`);

  console.log(A.join(''));
  console.log(B.join(''));

  // start addition

  let C = 0;
  let sum = 0;
  let carryOver = 0;
  for (let i = A.length-1; i >= 0; i--) {
    sum = (A[i] * 1 + B[i] * 1);
    sum=sum.toString().split('')
    console.log(typeof sum)
    console.log(`A[${i}]=${A[i]} + B[${i}]=${B[i]} SUM = ${sum}`)
    console.log ((A[i]*1)+(B[i]*1)+(sum[sum.length-1]*1)+(carryOver*1))
    sum = (A[i]*1)+(B[i]*1)+(sum[sum.length-1]*1)+(carryOver*1).toString().split('');


  }


return C;
};
// console.log(foo("9333852702227987", "85731737104263"))
// console.log(foo('18582506933032752', '366213329703'));
console.log(foo('321', '99999'));

// convertStringToNumber('18582506933032752')