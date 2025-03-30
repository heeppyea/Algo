let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n').map(Number);


let result = input.reduce((acc, cur, i) => {
    if (cur > acc.max) {
        acc.max = cur;
        acc.idx = i + 1
    }
    return acc;

}, {max: -Infinity, idx: 0});


console.log(result.max)
console.log(result.idx)

