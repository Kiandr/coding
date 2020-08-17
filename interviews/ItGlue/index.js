'use strict';

function consume_string(array, count) {
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
    consume_string(myArray, count);
}

function read(array, count) {
    // write your code in JavaScript (Node.js 8.9.4)

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
let flag = 1;
    while (flag) {
        for (let i = 0; i < myArray.length; i++) {
            if (i % count === 0 && !myArray.includes(array[i])) {
                console.log(myArray[i]);
                delete myArray[i];
            } else if (!myArray.includes(myArray[i])) {
                myArray.push(array[i]);
            }
            if(myArray[i]===undefined) flag = 0;
        }
    }
}

read('abcdef', 3);
//consume_string('abcdef', 3);