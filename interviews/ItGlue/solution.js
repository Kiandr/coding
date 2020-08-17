'use strict';

class solution {
    constructor(data) {
        this.returnValue = 0;
        this.inputData = data.split('\n');
        this.inputData = 'abcdefg';
    }

    get() {
        let res = [];
        res.push(this.execute(this.inputData.split(''), 3));
        // res.push(this.execute(parseInt(this.inputData[1])));
        this.returnValue = res;
        return this.returnValue;
    }

    solutionA(array, count) {
        // write your code in JavaScript (Node.js 8.9.4)
        let i = 0;
        let myArray = [];
        while (i < array.length) {
            if (i % count === 0 && !myArray.includes(array[i])) {
                myArray.push(array[i])
            }
            i++;
        }

        console.log(myArray);
    }

    execute(array, count) {
        // write your code in JavaScript (Node.js 8.9.4)
        if(myArray.length === 0) return 0;

        let myArray = [];
        let m = '';
        for (let i = 0; i < leftOverArray.length; i++) {
            if (i % count === 0 && !myArray.includes(array[i])) {
                console.log(array[i]);
                // m += array[i];
            } else {
                myArray.push(i);
            }

        }
        execute(myArray, count);


    }


}

module.exports = solution;
