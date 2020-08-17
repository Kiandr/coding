'use strict';

class solution {
    constructor(data) {
        this.returnValue = '10';
        this.inputData = data.split('\n');
    }

    get() {
        let res = [];
        // for (let i = 1; i <this.inputData.length; i=i+2) {
        //     res.push(this.execute(this.inputData[i], this.inputData[i+1]))
        // }
        res.push(this.execute(this.inputData[1], this.inputData[2]));
        this.returnValue = res;
        return this.returnValue;
    }

    isAnagram(firstS, secondS) {
        firstS = firstS.split('').sort().join();
        secondS  = secondS.split('').sort().join('');
        for (let i = 0; i < firstS.length; i++) {
            const idx = secondS.indexOf(firstS[i]) === firstS.indexOf(secondS[i]);
            if (idx === false) {
                return 'NO'
            }
        }
        return 'YES'
    }
    constructor(firstS, secondS) {
        let anagramCount = 0;
        firstS = firstS.split('').sort().join();
        secondS  = secondS.split('').sort().join('');
        for (let i = 0; i <firstS.length ; i++) {


        }
        for (let x = 1; x < s.length + 1; x++) {
            const stringMap = {};

            for (let y = 0; y < s.length - x + 1; y++) {
                const string = s.substring(y, y + x).split('').sort().join('');
                stringMap[string] = (stringMap[string] || 0) + 1;
            }

            Object.values(stringMap).forEach((value) => {
                anagramCount += value * (value - 1)/2;
            });
        }

        return anagrams;
    }

}

module.exports = solution;
