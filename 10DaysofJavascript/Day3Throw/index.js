'use strict';
const solution = require('./solution')

// solution = require('./solution');
process.argv.forEach((val, index) => {
    if(index === 2 && val.length > 0){
        // console.log(`index:${index}: val:${val}`);
         new solution(val)

    }
});

