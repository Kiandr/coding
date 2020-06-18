'use strict';

class solution {
    constructor(data) {
        this.returnValue = '';
        this.inputData = data.split('\n');
        // this.inputData = [2,1,3,5,4];
    }

    get() { // 3 - 4
        let res = [];

        res = (this.execute(this.inputData[1].split(' ')));
         // res.push(this.execute([2, 1]));
        this.returnValue = res;
        return this.returnValue;
    }

    execute(A) {
        // write your code in JavaScript (Node.js 8.9.4)
        let counter = 0;
        let myMap = new Map();
        for (let i = 0; i < A.length-1; i++) {
            let state = false;
            myMap.forEach((value, key, map) => {
               console.log(`${value} ${key} `);
               console.log(map)
            });
        //     if (state === true) {
        //         console.log(`****`);
        //         console.log(`A[i] = ${A[i]} i=${i}`);
        //         console.log(`****`);
        //         counter++
        //     }
        //     myMap[A[i]] = true;

        myMap.set(A[i],true);
            console.log('******')
        }

        // console.log(counter);
        return counter;

    }

}

module.exports = solution;
