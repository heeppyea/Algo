let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().trim().split(' ');

const a = String(input[0]) + String(input[1]);
const b = String(input[2]) + String(input[3]);

console.log(Number(a) + Number(b))
