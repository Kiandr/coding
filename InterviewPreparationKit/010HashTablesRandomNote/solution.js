'use strict';

class solution {
    constructor(data) {
        this.returnValue = '10';
        this.inputData = data.split('\n');
    }

    get() {
        let res = this.execute(this.inputData[1].split(' '),this.inputData[2].split(' '));
        this.returnValue = res;
        return this.returnValue;
    }

    execute(magazine, note ) {

        for (let i = 0; i < note; i++) {
            if(magazine.includes(note[i]))
                console.log(`note[i]=${note[i]} data.get(note[i]) `)
        }
    }

}

module.exports = solution;
