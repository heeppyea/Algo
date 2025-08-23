let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const arr = input[1].split(' ').map(Number)
const sorted = arr.sort((a, b) => a - b);

let prev = 0;
let result = 0;

sorted.forEach((v,i) => {
    if (i === 0) {
        prev = v;
    } else {
        prev = v + prev;
    }
    result += prev;
})

console.log(result);
