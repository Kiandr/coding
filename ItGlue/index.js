'use strict';

function read(array, count) {
    // write your code in JavaScript (Node.js 8.9.4)
    if (array.length === 0) return 0;
    let myArray = [];
    let myString = '';
    for (let i = 0; i < array.length; i++) {
        if (i % count === 0 && !myArray.includes(array[i])) {
            myString += array[i];
        } else if (!myArray.includes(array[i])) {
            myArray.push(array[i]);
        }
    }
    console.log(myString);
    read(myArray, count);
}

read('abcdef', 3);