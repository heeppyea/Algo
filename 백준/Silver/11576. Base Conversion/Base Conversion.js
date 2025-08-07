let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');


// a진법 수를 10진법으로 변환
// 변환된 10진법을 b진법으로 변환

let [a, b] = input[0].split(' ').map(Number);
let num = Number(input[1].trim())
let numbers = input[2].split(' ').map(Number);

let A = 0;
for (let i = 0; i < num; i++) {
    const x = numbers[i] * Math.pow(a, num - i - 1);
    A += x;
}

const result = [];

let n = A;
while (n > 0) {
    result.unshift(n % b);
    n = Math.floor(n / b);
}

console.log(result.join(' '));