let fs = require('fs');
let input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const num = Number(input[0]);
const scores = input[1].split(' ').map(Number);
const maxValue = scores.reduce((a, b) => Math.max(a, b));

const result = scores.reduce((acc, cur, i)  => {
    acc += cur / maxValue * 100;
    return acc;
}, 0)

const average = (result / num).toFixed(3);
console.log(average);