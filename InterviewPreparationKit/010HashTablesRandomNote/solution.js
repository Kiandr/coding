'use strict';

class solution {
    constructor(data) {
        this.returnValue = '10';
        this.inputData = data.split('\n');
    }

    get() {
        let res = this.execute(this.inputData);
        this.returnValue = res;
        return this.returnValue;
    }

    execute(magazine, note = []) {
        for (let word of note) {
            const idx = magazine.indexOf(word)
            if (idx !== -1) {
                magazine[idx] = ""
            } else {
                return console.log('No')
            }
        }
        console.log('Yes')
    }

}

module.exports = solution;
