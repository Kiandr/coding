'use strict';

const input = 'kian davoudi';


const output = (data='') => {
    if (data.length <= 0) {return data;}
    let output = '';

    for (let i = 0; i < data.length; i++) {
        if (data[i] === ' '){
            output+='%20';
        }
        else{
            output+=data[i]
        }
    }
    return output;

};

console.log(encodeURI(input));
console.log(output(input));
console.log(encodeURI(input)===output(input))