'use strict';

class tester {
    constructor(data) {
        this.data = data;
        this.result = [];
    }

    execute(str) {
        let chars = [];

        for (let i = 0; i < str.length; ++i) {
            if (chars.includes(str[i])) {
                return false;
            }
            chars.push(str[i]);
        }
        return true;
    }

    get() {
        this.result = this.execute(this.data)
        return this.result;
    }
}

let result = [];
let expected = [false, true, true, true, true, false];
let data = [
    'AA',
    'abcdefghi',
    'jklpoiuqwerzxcvmnsadf',
    '1234567890',
    'AaBbCcDdeFg1234567890(*&^%$#@!)'

];
for (let i = 0; i < data.length; i++) {
    result.push(new tester(data[i]))
}

result.forEach((value, index, array) => {
    let result = array[index].get();
    console.log(`${index} ${result} ${expected[index]}`);
    console.log(`${result === expected[index]}`);
});