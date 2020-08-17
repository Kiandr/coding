'use strict';
const solution = require('./solution');
const fs = require('fs').promises;
const readFile = (path, dataArray) => {
    return fs.readFile(`${path}`, 'utf8', (err, data) => {
        dataArray.push(data.split('\n'));
        return (dataArray);
    })
};
const inputArray = async (dataArray = []) => {
    let files = await fs.readdir(`${__dirname}/input`);
    for (let i = 0; i < files.length; i++) {
        let path = `${__dirname}/input/${files[i]}`;
        dataArray.push({index: i, file: path, data: await readFile(path, dataArray)});
        console.log(`${JSON.stringify(dataArray[i])}`);
    }
    return dataArray;

};
const outputArray = async (dataArray = []) => {
    let files = await fs.readdir(`${__dirname}/output`);
    for (let i = 0; i < files.length; i++) {
        let path = `${__dirname}/output/${files[i]}`;
        dataArray.push({index: i, file: path, data: await readFile(path, dataArray)});
        console.log(`${JSON.stringify(dataArray[i])}`);
    }
    return dataArray;

};
const solutionArray = async (dataArray = []) => {
    let files = await fs.readdir(`${__dirname}/input`);
    for (let i = 0; i < files.length; i++) {
        let path = `${__dirname}/input/${files[i]}`;
        dataArray.push({index: i, file: path, data: new solution(await readFile(path, dataArray))});
        console.log(`${JSON.stringify(dataArray[i])}`);
    }
    return dataArray;

};
let run = async (inputArray, outputArray, solutionArray) => {
    return {inputArray: await inputArray(), outputArray: await outputArray(), solutionArray: await solutionArray()};
};
run(inputArray, outputArray, solutionArray).then(returnData => {
    const data = returnData;
    let result = ((data.hasOwnProperty('inputArray') &&
        data.hasOwnProperty('outputArray') &&
        data.hasOwnProperty('solutionArray'))
        ? ((data) => {
            data.solutionArray.forEach((value, index, array) => {
                // console.log(value);
                console.log('|===== INPUT DATA ========|');
                console.log(data.inputArray[index].data);
                console.log('|=========================|');
                console.log('|===== OUTPUT DATA =======|');
                console.log(data.outputArray[index].data);
                console.log('|=========================|');
                console.log('|===== SOLUTION DATA =====|');
                console.log(data.solutionArray[index].data.get());
                console.log('|=========================|');


            })
        }) : ((data) => {
        }));
    result(data)


});
