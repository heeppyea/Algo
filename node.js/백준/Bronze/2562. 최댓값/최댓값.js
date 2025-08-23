
let fs = require('fs');
let input = fs.readFileSync("/dev/stdin").toString().split("\n");

let arr = input.map((v) => Number(v));

const maxValue = Math.max(...arr);
const idx = arr.indexOf(maxValue);
console.log(maxValue);
console.log(idx + 1);
