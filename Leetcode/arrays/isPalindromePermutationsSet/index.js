const isPalindromePermutation = (s) => {
    if (s.length <= 1) return true;
    let myMap = new Map();
    for (let i = 0; i < s.length; i++) {
        myMap.set(s[i], myMap.has(s[i]) ? myMap.get(s[i]) + 1 : 0);
    }

    let myArray = [];
    for (let i = 0; i < s.length; i++) {
        myArray[s.charAt(i)] = myArray[s.charAt(i)] === undefined ? 0 : myArray[s.charAt(i)] + 1;
    }

    console.log(myMap);
    console.log(myArray);
};

console.log(isPalindromePermutation('rracecarr') === true);