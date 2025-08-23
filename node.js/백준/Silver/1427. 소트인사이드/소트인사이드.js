let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().trim()

const arr = input.split('').map(Number);
arr.sort((a, b) => b - a);

let result = ''
for (const x of arr) {
    result += x;
}

console.log(result)