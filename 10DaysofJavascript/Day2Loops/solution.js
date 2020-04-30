'use strict';
class solution{
    constructor(n) {

       return this.factorial(n)
    }
    async factorial(n = 0){
        if(n < 1) return n;
        return (n * await this.factorial(n-1))
    }
} module.exports = solution;
