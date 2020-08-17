'use strict';

class solution {
    solution04(nums) {
        let counter = 0;
        let topArray = []
            , middleArray = [], buttonArray = [];
        let maxSum = [];
        console.log('\n=======Array========');
        nums = nums.split("\n");
        nums.forEach((value, index, array) => {
            array[index] = value.split(" ");
            if (index === 0) {
                topArray.push(parseInt(array[index][0]));
                topArray.push(parseInt(array[index][1]));
                topArray.push(parseInt(array[index][2]));
            }
            if (index === 1) {
                // testArray.push(parseInt(array[index][0]));
                middleArray.push(parseInt(array[index][1]));
                // testArray.push(parseInt(array[index][2]));
            }
            if (index === 2) {
                buttonArray.push(parseInt(array[index][0]));
                buttonArray.push(parseInt(array[index][1]));
                buttonArray.push(parseInt(array[index][2]));
            }
        });

        // console.log(JSON.stringify(nums));
        console.log('================');
        maxSum.push(topArray.reduce((accumulator, currentValue) => {
            return accumulator + currentValue;
        }))
        maxSum.push(middleArray.reduce((accumulator, currentValue) => {
            return accumulator + currentValue;
        }))
        maxSum.push(buttonArray.reduce((accumulator, currentValue) => {
            return accumulator + currentValue;
        }))
        console.log('================');
        // counter = testArray.reduce((accumulator, currentValue, currentIndex, array) => {
        //     console.log(`
        //     accumulator=${accumulator},
        //      currentValue=${currentValue},
        //       currentIndex= ${currentIndex},
        //      array ${array}`
        //     )
        //     return accumulator + currentValue;
        // });

        console.log(Math.max(...maxSum));
    }

    solution03(arr) {
        arr = arr.split("\n");
        arr.forEach((value, index, array) => {
            array[index] = value.split(" ");
        });
        let top, middle, bottom;
        let tempSum = 0;
        let maxSum = 0;

        for (let i = 0; i + 2 < arr.length; i++) {
            for (let j = 0; j + 2 < arr[i].length; j++) {
                top = arr[i].slice(j, j + 3).reduce((acc, val) => acc + val);
                middle = arr[i + 1].slice(j + 1, j + 2).reduce(val => val);
                bottom = arr[i + 2].slice(j, j + 3).reduce((acc, val) => acc + val);
                tempSum = top + middle + bottom;
                maxSum = Math.max(maxSum, tempSum);
            }
        }
        console.log(maxSum);
        return maxSum;
    }

    solution02(arr) {
        arr = arr.split("\n");
        arr.forEach((value, index, array) => {
            array[index] = value.split(" ");
        });
        let sums = [];
        for (var i = 0; i < arr.length - 2; i++) {
            for (var j = 0; j < arr.length - 2; j++) {
                sums.push(
                    //sumTop
                    arr[i][j] +
                    arr[i][j + 1] +
                    arr[i][j + 2] +
                    //sumMiddle
                    arr[i + 1][j + 1] +
                    //sumBottom
                    arr[i + 2][j] +
                    arr[i + 2][j + 1] +
                    arr[i + 2][j + 2]
                );
            }
        }
        console.log(sums.sort((a, b) => b - a)[0])
        return sums.sort((a, b) => b - a)[0];
    }

    solution01(arr) {

        console.log('\n=======Array========');
        arr = arr.split("\n");
        arr.forEach((value, index, array) => {
            array[index] = value.split(" ");
        });
        console.log('========================');

    }

    constructor(arr) {
        let top = 0;
            let middle = 0;
        let bottom = 0;
        let initialValue = 0;
        console.log('\n=======Array========');
        arr = arr.split("\n");
        arr.forEach((value, index, array) => {
            array[index] = value.split(" ");
        });

        console.log('=============arr========');
        console.log(arr);
        for (let i = 0; i < arr.length - 2; i++) {
            for (let j = 0; j < arr.length - 2; j++) {
                top = arr[i].slice(j, j + 3).reduce((accumulator, currentValue) => {return accumulator + currentValue;});
                // middle = arr[i + 1].slice(j + 1, j + 2).reduce((accumulator, currentValue) => {return accumulator + currentValue;});
                // bottom = arr[i + 2].slice(j, j + 3).reduce((accumulator, currentValue) => {return accumulator + currentValue;});
                initialValue =   arr[i].slice(j, j + 3).reduce(
                    (accumulator, currentValue) => accumulator + currentValue
                    , initialValue
                )
            }
        }
        console.log(initialValue)
        // return maxSum;
    }

}

module.exports = solution;
