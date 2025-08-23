let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().trim();

function solution() {
    const num = Number(input);
    
    // bigInt로 초기화를 해줘야함 
    const dp = Array.from({length : 91}, () => 0n); 
    
    dp[1] = 1n;  
    dp[2] = 1n; 
    
    for (let i = 3; i <= num; i++) {
        dp[i] = dp[i - 1] + dp[i - 2]; 
    }
    
    console.log(dp[num].toString());  
}

solution();