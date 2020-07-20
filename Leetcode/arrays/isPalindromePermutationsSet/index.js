const isPalindromePermutation = (s) => {
    if (s.length <= 1) return true;
    let myMap = new Map();
    for (let i = 0; i <s.length ; i++) {
        myMap.set(s[i], myMap.has(s[i]) ?  myMap.get(s[i])+1 : 0);
    }

    let myArray = [0];
    for (let i = 0; i < s.length ; i++) {
        myArray[s.charAt(i)]++;
    }


    console.log(myMap);
    console.log(myArray);
};

console.log(isPalindromePermutation('racecar') === true);