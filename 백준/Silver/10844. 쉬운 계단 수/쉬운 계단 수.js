let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().trim();

const num = Number(input);
const dp = Array.from({length: 101 }, () => new Array(10).fill(0))

const MOD = 1000000000;

dp[1][0] = 0;
dp[1][1] = 1;
dp[1][2] = 1;
dp[1][3] = 1;
dp[1][4] = 1;
dp[1][5] = 1;
dp[1][6] = 1;
dp[1][7] = 1;
dp[1][8] = 1;
dp[1][9] = 1;

dp[2][0] = 1;
dp[2][1] = 2;
dp[2][2] = 2;
dp[2][3] = 2;
dp[2][4] = 2;
dp[2][5] = 2;
dp[2][6] = 2;
dp[2][7] = 2;
dp[2][8] = 2;
dp[2][9] = 1;

function solution() {
    const MOD = 1000000000;

    for (let i = 3; i <= num; i ++) {
        for (let j = 0; j < 10; j++) {
            dp[i][j] = ((dp[i - 1][j + 1] ?? 0) + (dp[i - 1][j - 1] ?? 0)) % MOD;
        }
    }

    let result = 0;
    for (let i = 1; i < 10; i ++) {
        result = (result + dp[num][i]) % MOD;
    }
    
    console.log(result);
}

solution();