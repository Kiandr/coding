'use strict';

class solution {
    constructor(nums) {
        try {
            nums=nums.split("\n")
            nums.forEach((value, index, array) => {
                if (parseInt(value) === 0)
                    console.log(`${value}  is Zero Error`)
                else if(parseInt(value) < 0)
                    console.log(`${value} is Negative Error`)
                else console.log(`${value} is OK`)
            })
        }catch (error) {
            console.log(error)
        }
    }
}

module.exports = solution;
