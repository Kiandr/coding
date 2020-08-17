'use strict';
class solution{
    constructor(nums) {
        let arr = [];

        nums.sort((a,b)=>{return parseInt(a)-parseInt(b)}).forEach (item => {
            if (arr.includes(item)===false)
                arr.push(item)
        })
        console.log(arr[arr.length-2])
        // console.log(nums)

    }
} module.exports = solution;
