let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const num = input[0];

// solution 함수1
function solution (n) {
    let sum = n;
    let idx = 2;
    let arr = [0, 1];

    // sum이 현재 값보다 클 때까지 반복
    while (arr[idx - 1] < sum) {
        let f0 = arr[idx - 2];
        let f1 = arr[idx - 1];
        arr.push(f0 + f1);
        idx++;
    }

    // 맨 뒤 인덱스부터 시작
    const result = [];
    const length = arr.length;
    for (let i = length - 1; i > 0; i--) {
        if(sum - arr[i] >= 0) {
            result.push(arr[i]);
            sum -= arr[i];
        }
        if(sum === 0) break;
    }
    console.log(...result.reverse());
}

for (let i = 1; i <= num; i++) {
    solution(input[i])
}