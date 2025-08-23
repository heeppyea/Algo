let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n')

const idx = Number(input[0].split(' ').at(-1));
const numbers = input[1].split(' ').map(Number);

const sorted = numbers.sort((a, b) => a - b);
console.log(sorted[idx - 1]);
