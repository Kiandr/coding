/*https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map
* The map() method creates a new array populated with the results of calling
* a provided function on every element in the calling array.
* */

const array = [1, 4, 9, 16];

// pass a function to map
const map1 = array.map(x => x * 2);
const map2 = array.map((value, index, array) => {
    return value * value
})

console.log(map1);
console.log(map2);
// expected output: Array [2, 8, 18, 32]
