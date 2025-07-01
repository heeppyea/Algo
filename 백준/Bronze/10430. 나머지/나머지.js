let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().trim().split(' ').map(Number);

let a = input[0]; b = input[1]; c = input[2];

console.log((a + b) % c);
console.log(((a % c) + (b % c)) % c);
console.log((a * b) % c);
console.log(((a % c) * (b % c)) % c);