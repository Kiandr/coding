'use strict';

class solution {
    constructor(data) {
        this.returnValue = '10';
        this.inputData = data.split('\n');
        // this.inputData = [1, 3, 6, 4, 1, 2];
    }

    get() {
        // let res = [];
        let res = (this.execute(this.inputData[1].split(' ')));
        // res.push(this.execute(this.inputData));
        this.returnValue = res;
        return this.returnValue;
    }

    execute(arr) {
        // write your code in JavaScript (Node.js 8.9.4)
        let a = [1, 2, 3, 4, 5, 6, 7, 8, 9];
        let sortedArray = [];
        let len = arr.length;
        for (var i = 0; i < len; i++) {
            for (var j = 0; j < len - i - 1; j++) { // this was missing
                if (arr[j] > arr[j + 1]) {
                    // swap
                    var temp = arr[j];
                    arr[j] = arr[j + 1];
                    arr[j + 1] = temp;
                }
            }
        }
        for (let i = 0; i < arr.length; i++) {
            // console.log(arr[i]);
            if (!sortedArray.includes(arr[i]))
                sortedArray.push(arr[i]);
            arr[i] = '';
        }
        sortedArray.sort();
        for (let i = 0; i < sortedArray.length; i++) {
            // console.log(`${sortedArray[i]} === ${a[i]}`)
            if (parseInt(sortedArray[i]) !== a[i]) {
                // console.log(`return ${a[i]}`)
                return a[i];
            }

        }

        return 0;
    }

}

module.exports = solution;
