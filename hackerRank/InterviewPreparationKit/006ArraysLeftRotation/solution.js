'use strict';

class solution {
    solution002(arr, b) {

        let first = [];
        let second = [];
        let final = [];
        arr.forEach((value, index, array) => {
            if(index <= array.indexOf(b))
                first.push(index);
            else{
                second.push(index)
            }
        });
        second.forEach((value, index, array) => {
            final.push(arr[value])
        });
        first.forEach(value => {
            final.push(arr[value])
        });

        return final;
    }
    solution001(arr,b){


            let final = [];

            for(let i = arr.indexOf(b)+1; i<arr.length; i++)
                final.push(arr[i])

            for(let i =0; i<=arr.indexOf(b);i++)
                final.push(arr[i])


            return final;

    }
    constructor(arr,b){
        let final = [];

        for(let i = b; i<arr.length; i++)
            final.push(arr[i]);

        for(let i =0; i<b;i++)
            final.push(arr[i]);


        return final;
    }
}

module.exports = solution;
