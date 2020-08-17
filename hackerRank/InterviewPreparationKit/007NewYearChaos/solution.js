'use strict';

class solution {
    constructor(q,b){
        try{
            let unsortedQueue = [...q];

            let sortedQueue = unsortedQueue.sort((a,b) => a-b);
            q.forEach((element, index) => {
                if((element-index-1) >2) {
                    throw new Error();
                }
            });
            let swaps = 0;
            for (let i=0;i<q.length-1;i++) {
                for(let j=0;j<q.length-1;j++) {
                    if(q[j]>q[j+1]) {
                        let temp = q[j];
                        q[j] = q[j+1];
                        q[j+1] = temp;
                        swaps++;
                    }
                }
                if(JSON.stringify(sortedQueue)===JSON.stringify(q)) {
                    console.log(swaps);
                    return swaps;
                }
            }
        }catch(e) {
            console.log('Too chaotic');
        }
    }
}

module.exports = solution;
