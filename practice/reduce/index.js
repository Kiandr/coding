/*
* https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/Reduce
* The reduce() method executes a reducer function (that you provide) on each element of the array,
* resulting in single output value.*/
let sum = [0, 1, 2, 3].reduce(function (accumulator, currentValue) {
    return accumulator + currentValue
}, 0);

let sum02 = [0,1,2,3].reduce((previousValue, currentValue, currentIndex, array) => {
    return previousValue+currentValue;
})
console.log(sum)
console.log(sum02)