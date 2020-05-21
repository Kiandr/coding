'use strict';
class solution{
    constructor(n) {
        let vowels = ["a", "e", "i", "o", "u"];
        let vArray=[]
        let nonVArray=[]

        for(let v of n) {
            if(vowels.includes(v))
            // console.log(v);
                vArray.push(v)
        }

        for(let v of n) {
            if(!vowels.includes(v))
            // console.log(v);
                nonVArray.push(v)
        }
        vArray.forEach(item => console.log(item))
        nonVArray.forEach(item => console.log(item))
    }
} module.exports = solution;
