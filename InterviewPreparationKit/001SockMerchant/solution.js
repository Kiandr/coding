'use strict';

class solution {
    constructor(nums) {
        console.log('\n=======Array========')
        nums = nums.split(" ");
        // console.log(JSON.stringify(nums));
        console.log('================')

        let pairs = new Map();
        // pairs.push({x:undefined},{y:undefined})


        nums.forEach((value, index, array)=>{
           // console.log(`index ${index}, value:${value}`);
            if(pairs.has(value)){
                // console.log(`index ${index}, value:${value}`);
               pairs.set(value,pairs.get(value)+1)
           }else{
                // console.log(`index ${index}, value:${value}`);
               pairs.set(value, 1);
           }
        });
        let counter = 0;
        pairs.forEach((value, index, array) => {
            // if(value/2>0)
            {
                counter = counter+parseInt(value/2);
            }
            console.log(`index ${index}, value:${parseInt(value/2)}`);
        })
        console.log(counter)
    }
}

module.exports = solution;
