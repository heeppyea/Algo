let fs = require('fs');
let input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const arr = input[1].split(' ').map(Number);


const max = Math.max(...arr);
const min = Math.min(...arr);

console.log(min, max)