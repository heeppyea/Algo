let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().trim().split(' ').map(Number);

const a = input[0];
const b = input[1];

const min = Math.min(a, b);

let x = 0;
for (let i = 0; i <= min; i++) {
    if (a % i === 0 && b % i === 0) {
        x = i;
    }
}

console.log(x);
console.log(x * (a / x) * (b / x));