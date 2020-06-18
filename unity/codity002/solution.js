'use strict';

class solution {
    constructor(data) {
        this.returnValue = '';
        // this.inputData = data.split('\n');
        this.inputData = [2, 3, 4, 1, 5];
    }

    get() { // 3 - 4
        let res = [];

        // res = (this.execute(this.inputData[1].split(' ')));
        res.push(this.execute(this.inputData));
        this.returnValue = res;
        return this.returnValue;
    }

    execute(A) {
        // write your code in JavaScript (Node.js 8.9.4)
        let counter = 0;
        let indexSum = 0;
        let valSum = 0;

        for (let i = 0; i < A.length; i++) {
            indexSum += i + 1;
            valSum += A[i];
            if (indexSum === valSum) {
                counter++;
            }
        }


        return counter;

    }

    solutionA(A) {
        // write your code in JavaScript (Node.js 8.9.4)
        let counter = 0;
        let myMap = new Map();
        let state = false;

        for (let i = 0; i <= myMap.size; i++) {
            for (let j = 1; j <= i; j++) {
                if (myMap.get(j) !== true) {
                    state = false;
                    j = i + 1;
                } else {
                    state = myMap.get(j);
                    // console.log(`state = ${state} index= ${j} value=${myMap.get(j)}`)
                }
            }

            if (state === true) {
                counter++;
                state = false;
            }


            myMap.set(A[i], true);
            // console.log('****COUNTER***');
            // console.log(counter);
            // console.log('*******');
        }

        console.log(counter);
        return counter;

    }

}

module.exports = solution;
