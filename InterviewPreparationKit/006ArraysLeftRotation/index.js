'use strict';
const solution = require('./solution');
const fs = require('fs');
const home = require('os').homedir();
const array = fs.readFileSync('./output/output00.txt').toString().split(" ");

process.argv.forEach((val, index) => {
    if(index === 2 && val.length > 0){
        console.log(`index:${index}: val:${val}`);
        console.log('\n=======Array========');
        val = val.split("\n");
        val.forEach((value, index, array) => {
            array[index] = value.split(" ");
        });

        console.log('=============arr========');
        console.log(val[1],val[0][1]);



        let  result = new solution(val[1],val[0][1]);


        let state = false;
        console.log(`Result: ${result}`);
        for (let i = 0; i < array.length ; i++) {
            state = array[i]===result[i];
            console.log(`${array[i]===result[i]} expected:${array[i]} received:${result[i]}`)
        }
        console.log(`${state}`)

    }
});

