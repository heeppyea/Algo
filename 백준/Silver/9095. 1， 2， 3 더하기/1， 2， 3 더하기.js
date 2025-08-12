let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const cases = input.map(Number);
const num = cases.shift();

function solution() {
    const maxNum = Math.max(...cases);
    const dp = [1, 2, 4];
    for (let i = 3; i < maxNum; i ++) {
        dp[i] = dp[i - 1] + dp[i - 2] + dp[i - 3];
    }

    const results = [];
    for (let i = 0; i < num; i ++) {
        results.push(dp[cases[i] - 1]);
    }

    console.log(results.join('\n'))
}

solution()