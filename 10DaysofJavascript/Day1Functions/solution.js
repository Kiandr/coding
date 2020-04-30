'use strict';
class solution{
    constructor(n) {

    }
    async factorial(n = 0){
        if(n < 1) return n;
        return (n * this.factorial(n-1))
    }
} module.exports = solution;
