let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const n = input.shift();

const results = [];

for (let i = 0; i < n; i++) {
    const [a, b] = input[i].split(' ').map(Number);
    const min = Math.min(a, b);
    let result = 0;
    for (let i = 0; i <= min; i++) {
        if (a % i === 0 && b % i === 0) {
            result = i;
        }
    }
    results.push(result * (a / result) * (b / result));
}

console.log(results.join('\n'))

