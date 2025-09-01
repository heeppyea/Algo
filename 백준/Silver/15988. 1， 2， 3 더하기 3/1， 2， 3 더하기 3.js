let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n').map(Number);

// 시간초과 풀이
// function solution() {
//     const num = input.shift();
//     const MOD = 1000000009;
//
//     const maxNum = Math.max(...input);
//     const dp = Array.from({length: maxNum + 1}, () => Array.from({length: num }, () => 0));
//
//     // 여기서 1,2,3 은 자릿수를 나타냄
//     dp[1][1] = 1;
//     dp[1][2] = 0;
//     dp[1][3] = 0;
//
//     dp[2][1] = 1;
//     dp[2][2] = 1;
//     dp[2][3] = 0;
//
//     dp[3][1] = 2;
//     dp[3][2] = 1;
//     dp[3][3] = 1;
//
//     for (let i = 4; i <= maxNum; i++) {
//         dp[i][1] = (dp[i - 1][3] + dp[i - 1][2] + dp[i - 1][1]) % MOD;
//         dp[i][2] = (dp[i - 1][1]) % MOD;
//         dp[i][3] = (dp[i - 1][2]) % MOD;
//     }
//
//     const results = [];
//     for (const v of input) {
//         const sum = (dp[v][1] + dp[v][2] + dp[v][3]) % MOD;
//         results.push(sum);
//     }
//
//
//     console.log(results.join('\n'));
// }
//
// solution()

function solution() {
    input.shift();
    const MOD = 1000000009;

    const maxNum = Math.max(...input);
    const dp = Array.from({length: maxNum + 1}, () => 0);

    dp[0] = 1;
    dp[1] = 1;
    dp[2] = 2;
    dp[3] = 4;

    for (let i = 4; i <= maxNum; i++) {
        dp[i] = (dp[i-1] + dp[i-2] + dp[i-3]) % MOD;
    }

    const results = [];
    for (const v of input) {
        results.push(dp[v]);
    }

    console.log(results.join('\n'));
}

solution()