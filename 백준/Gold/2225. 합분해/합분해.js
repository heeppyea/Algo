let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().trim().split(' ');

const [n, k] = input.map(Number);

if(k === 1) return console.log(1)

// 맨 앞에 어떤 수가 오는 지에 따라 값을 저장해둔다.
const dp = Array.from({length: k + 1}, () => []);

dp[1].push(1);

for (let i = 0; i < n + 1; i++) {
    dp[2].push(1);
}

const MOD = 1000000000;

for (let i = 3; i <= k; i ++) {
    // 이전 자릿수마다의 경우의 수 합
    let prevSum = 0;
    for (let j = 0; j < dp[i - 1].length; j++) {
        prevSum = (prevSum + dp[i - 1][j]) % MOD;
    }

    dp[i].push(prevSum % MOD)
    let prev = prevSum;
    for (let j = 0; j < dp[i - 1].length; j++) {
        const value = (prev - dp[i - 1][j] + MOD) % MOD;

        dp[i].push(value);
        prev = value;
    }
}

let result = 0;
for (let i = 0; i <= dp[k].length - 1; i++) {
    result = (result + dp[k][i]) % MOD;
}

console.log(result);
