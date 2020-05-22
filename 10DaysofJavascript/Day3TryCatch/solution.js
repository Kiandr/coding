'use strict';

class solution {
    constructor(nums)  {

        let returnArray = [];
        try {
            for(let i = nums.length; i>=0; i--) {
                returnArray.push(nums.charAt(i))
            }
            returnArray = returnArray.join("");
        } catch (error) {
            console.log(error)
        } finally {
            console.log(returnArray)
        }
    }
}

module.exports = solution;
