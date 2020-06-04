'use strict';

class solution {
    constructor(arr,b){
        var swaps=0;
        let i=0;
        while(i<arr.length){
            if (arr[i] != i+1) {
                let val = arr[i];
                // swap number to respective position
                arr[i] = arr[i] + arr[val-1];
                arr[val-1] = arr[i] - arr[val-1];
                arr[i] = arr[i] - arr[val-1];
                swaps++;
            } else {
                i++;
            }
        }
        return swaps;

    }
}

module.exports = solution;
