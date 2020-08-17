'use strict';
const solution = require('./solution');
const fs = require('fs');
const home = require('os').homedir();

let counter = 0;
process.argv.forEach((val, index) => {
    if(index === 2 && val.length > 0){
        const array = fs.readFileSync(`./output/output0${counter++}.txt`).toString().split(" ");

        console.log(`index:${index}: val:${val}`);


        console.log('\n=======Array========');
        val = val.split("\n");
        val.forEach((value, index, array) => {
            array[index] = value.split(" ");
        });
        console.log(val[1],val[0][0]);
        console.log('=============Array========');



        let  result = new solution(val[1],val[0][0]);


        let state = false;
        console.log(`Result: ${JSON.stringify(result)}\n`);

        for (let i = 0; i < array.length ; i++) {
            state = array[i]===result[i];
            console.log(`<== status:${array[i]===result[i]} === expected:${JSON.stringify(array[i]).trim()} received:${JSON.stringify(result[i])}==>\n`)
        }

        console.log(`<==Final Status is: ${state}==>`);

    }
});

