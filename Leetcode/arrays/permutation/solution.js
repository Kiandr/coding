'use strict';

class solution {
    constructor(data) {
        this.returnValue = 0;
        this.inputData = data.split('\n');
        // this.inputData = [1, 3, 6, 4, 1, 2];
    }

    get() {
        let res = [];
        // res.push(this.execute(this.inputData[1].split('')));
        res.push(this.execute('abcdefghi', 'ihgfedcba'));
        this.returnValue = res;
        return this.returnValue;
    }

    execute(str1, str2) {
        // write your code in JavaScript (Node.js 8.9.4)
        if (str1.length === 0 || str1.length !== str2.length) {
            return false;
        }

        let myArray = new Array();

        for (let i = 0; i < str1.length; i++) {
            myArray.push(str1[i])
        }

        for (let i = 0; i < str2.length; i++) {


            if (myArray.includes(str2[i]) === true) {
                myArray = myArray.filter((value, index, array) => { return value !== str2[i]})
            }
        }
        return myArray.length === 0;


    }

}

module.exports = solution;
