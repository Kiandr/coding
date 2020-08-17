'use strict';

class solution {
    constructor(data) {
        this.returnValue = 0;
        this.inputData = data.split('\n');
        // this.inputData = [1, 3, 6, 4, 1, 2];
    }

    get() {
        let res = [];
        res.push(this.execute(this.inputData[1].split('')));
        // res.push(this.execute(parseInt(this.inputData[1])));
        this.returnValue = res;
        return this.returnValue;
    }

    execute(nums) {
        // write your code in JavaScript (Node.js 8.9.4)
        let max = 0;
        let counter = 0;
        for (let i = 0; i < nums.length; i++) {
            console.log(parseInt(nums[i]));
            if (parseInt(nums[i]) === 1) {
                counter++
            } else {
                counter = 0;
            }
            if (parseInt(counter) >= parseInt(max)) {
                max = counter;
            }
        }
        return max;

    }

}

module.exports = solution;
