let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().trim();

const n = Number(input);
const dp = Array.from({ length: n + 1 }, (v, i) => i);

function solution() {
    for (let i = 1; i <= n; i++) {
        for (let j = 1; j <= i; j++) {
            
            // j의 제곱수가 i보다 크면, dp에서 i에서 j의 제곱수를 뺀 위치의 값을 찾을 때 음수가 나와서 의미 없음 
            if (Math.pow(j, 2) > i) {
                break;
            }

            // 최소 개수 : 현재 인덱스의 값과 현재 인덱스에서 뺄 수 있는 제곱의 값에 1을 더한 가장 최소값
            dp[i] = Math.min(dp[i], dp[i - Math.pow(j, 2)] + 1);
        }
    }

    console.log(dp[n]);
}

solution();
