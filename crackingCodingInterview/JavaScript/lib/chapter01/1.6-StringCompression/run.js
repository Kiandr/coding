// Test
// console.log('aaaaaa', strComp('aaaaaa'), 'a6');
// console.log('aabcccccaaa', strComp('aabcccccaaa'), 'a2b1c5a3');

function countString(str) {
  if (str === null || str === undefined || str === '' || isNaN(str) === false || parseInt(str) >= 0 || str.length <= 0) return str;
  let returnString = '';
  let counter = 1;
  let finalValue = (counter, letter, returnString) => {return `${returnString.concat(`${letter}${parseInt(counter) > 0 && counter !== undefined ? counter : 1}`)}`;};

  for (let i = 0; i <str.length;i++,  counter = 1) {
    while (str[i] === str[i + 1] && i <= str.length) {
      counter = counter === 0 ? 1 : counter + 1;
      i++;
    }
    returnString = finalValue(counter, str[i], returnString);
  }

  return returnString;
}

let inArray = ['aaaaaa', 'aabcccccaaa'];
let expectedArray = ['a6', 'a2b1c5a3'];

// Test
inArray.forEach((value, index) => {
  console.log(`${value} \t expected ${expectedArray[index]} is ${countString(value) === expectedArray[index]} \t received: ${countString(value)}`);
});

