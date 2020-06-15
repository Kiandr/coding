'use strict';

class solution {
    constructor(data) {
        this.returnValue = 0;
        this.inputData = data.split('\n');
        // this.inputData = [1, 3, 6, 4, 1, 2];
    }

    get() {
        let res = [];
        // res.push(this.execute(this.inputData[1].split(' ')));
        res.push(this.execute(parseInt(this.inputData[1])));
        this.returnValue = res;
        return this.returnValue;
    }

    execute(N) {
        // write your code in JavaScript (Node.js 8.9.4)
        let arr = N.toString(2).split('')
        // console.log( arr)
        let a = [];
        for (let i = 0; i <arr.length ; i++) {
            if (parseInt(arr[i]) === 1){
                // console.log(i);
                a.push(i);
            }


        }
        // console.log(a)
        let a0 = a[0] === 0 ? 1 : parseInt(a[0]);
        let a1 = parseInt(a[1]);
        return a1 - a0 > 0 ? a1 - a0 : 0;

    }

}

module.exports = solution;
