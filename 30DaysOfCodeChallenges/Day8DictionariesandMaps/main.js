const fs = require('fs');
process.stdin.setEncoding('utf8');


fs.readFile('./input/input00.txt', 'utf8', (error, data) => {
    // console.log(data.toLocaleLowerCase().split('\n'));

    processData(data);
});


function processData(input) {
    //Enter your code here
    let myMap = new Map();
    let textData = input.toLocaleLowerCase().trim().split('\n');
    textData.forEach((input, index) => {

        let inputArray = input.split(' ');

        let key = parseInt(inputArray[0], 10) > 0 === false  ? inputArray[0] : undefined;
        let value = key !== undefined ? inputArray[1] : undefined;

        if (key === undefined) {
            return;
        }

        if (myMap.has(key))
            console.log(`${key}=${myMap.get(key)}`)
        else if (key !== undefined && value !== undefined) {
            myMap.set(key, value);
        }
        else if (!myMap.has(key) && key !== undefined) {
            console.log('Not found')
        }
    })


}



