let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

function solution() {
    const len = Number(input.shift());
    const arr = input.shift().split(' ').map(Number);

    const dp = new Array(len).fill(1);

    for (let i = 1; i < len; i++) {
        for (let j = 0; j < i; j++) {
            if (arr[j] < arr[i]) {
                dp[i] = Math.max(dp[i], dp[j] + 1);
            }
        }
    }

    console.log(Math.max(...dp));
}

solution();