let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().trim();

const num = Number(input);

function solution() {
    const dp = [1, 1];
    for (let i = 2; i <= num; i++) {
        dp[i] = (dp[i - 1] * 2 + (i % 2 === 0 ? (+1) : (-1))) % 10007;
    }
    console.log(dp[num]);
}


solution()