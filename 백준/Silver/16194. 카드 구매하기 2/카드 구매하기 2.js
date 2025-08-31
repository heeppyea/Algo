let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n')

const N = Number(input[0]);
const price = [...input[1].split(' ')].map(Number);

function solution(N, price) {
    let dp = [0,...price];
    for (let i = 2; i <= N; i++) {
        for (let j = 1; j < i; j++) {
            dp[i] = Math.min(dp[i], dp[j] + dp[i - j]);
        }
    }
    return dp[N];
}

console.log(solution(N, price));