'use strict';

function solution  (n){
    if(n <= 1) return n;
    return (n * solution(n-1))
}

// solution = require('./solution');
process.argv.forEach((val, index) => {
    if(index === 2 && val.length > 0){
        // console.log(`index:${index}: val:${val}`);
        console.log( solution(val))

    }
});

