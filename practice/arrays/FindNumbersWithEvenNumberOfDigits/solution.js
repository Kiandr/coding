'use strict';

class solution {
    constructor(data) {
        this.returnValue = 0;
        this.inputData = data.split('\n');
        // this.inputData = [1, 3, 6, 4, 1, 2];
    }

    get() {
        let res = [];
        res.push(this.execute(this.inputData[1].split(' ')));
        // res.push(this.execute(parseInt(this.inputData[1])));
        this.returnValue = res;
        return this.returnValue;
    }

    execute(nums) {
        // write your code in JavaScript (Node.js 8.9.4)
        let max = 0;
        let counter = 0;

        for (let i = 0; i < nums.length; i++) {

            max = 0;
             counter = 0;
            let digitArray = nums[i].split('');
            console.log( `i=${i} digitArray = ${digitArray}`)
            for (let j = 0; j < digitArray.length; j++) {
                console.log(digitArray[j]);
                if (digitArray[j] % 2 === 0) {

                    max++;
                    counter++;
                    console.log(`found ${digitArray[j]} counter is ${counter}`);

                }
            }

            console.log(`Max= ${max} and number = ${nums[i]}`)



        }
        return max;
    }

}

module.exports = solution;
