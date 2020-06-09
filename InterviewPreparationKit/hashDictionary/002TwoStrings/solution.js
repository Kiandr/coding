'use strict';

class solution {
    constructor(data) {
        this.returnValue = '10';
        this.inputData = data.split('\n');
    }

    get() {
        let res = [];
        for (let i = 1; i <this.inputData.length; i=i+2) {
            res.push(this.execute(this.inputData[i], this.inputData[i+1]))
        }
        // let res = this.execute(this.inputData[1].split(' '), this.inputData[2].split(' '));
        this.returnValue = res;
        return this.returnValue;
    }

    execute(firstS, secondS) {
        for (let letter of firstS) {
            const idx = secondS.indexOf(letter);
            if (parseInt(idx) !== -1) {
                return 'YES'
            }
        }
        return 'NO'
    }

}

module.exports = solution;
