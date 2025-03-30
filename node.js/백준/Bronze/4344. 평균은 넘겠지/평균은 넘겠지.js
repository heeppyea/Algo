let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const count = Number(input[0]);
const arr = input.slice(1);

let result = '';

for (const v of arr) {
    const arr = v.split(' ').map(Number);
    const num = arr[0];
    const scores = arr.slice(1);

    const avg = scores.reduce((a, b) => a + b, 0) / num;
    const over = scores.filter(score => score > avg).length;

    const percent = (over / num * 100).toFixed(3);
    result += `${percent}%\n`;
}

process.stdout.write(result); 