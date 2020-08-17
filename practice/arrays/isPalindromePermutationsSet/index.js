const isPalindromePermutation = (s) => {
    if (s.length <= 1) return true;
    let myMap = new Map();
    for (let i = 0; i < s.length; i++) {
        myMap.set(s[i], myMap.has(s[i]) ? myMap.get(s[i]) + 1 : 1);
    }

    let myArray = [];
    for (let i = 0; i < s.length; i++) {
        myArray[s.charAt(i)] = myArray[s.charAt(i)] === undefined ? 1 : myArray[s.charAt(i)] + 1;
    }


    let res =  myMap.forEach((value, key, map) => {
    console.log(`${key} ,${value} ${value%2}`);

    console.log(myMap);
    console.log(myArray);
            return value%2;
        });

    return res;
};

console.log(isPalindromePermutation('rracecarr') === true);