let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().trim()

const words = input.split('');

let flag = false
let result = [];
let arr = [];

for (let i = 0; i < words.length; i++) {
    if (words[i] === '<') {
        result.push(...arr.reverse());
        arr.length = 0;
        flag = true;
    } else if (words[i] === '>') {
        result.push(words[i]);
        flag = false;
        continue;
    }

    if(!flag && words[i] === ' ') {
        result.push(...arr.reverse());
        result.push(words[i]);
        arr.length = 0;
    }

    if (i === words.length - 1 && words[i] !== '>') {
        arr.push(words[i]);
        result.push(...arr.reverse());
        arr.length = 0;
    }

    if (flag) result.push(words[i]);
    if(!flag && words[i] !== ' ') arr.push(words[i]);

}

console.log(result.join(''));