let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

//♾️종료시점을 기준으로 정렬해야함 -> 최대 개수의 회의를 구할 수 있음

const num = Number(input[0]);

// 시작, 종료 시간을 담은 배열 만들기
const times = input.slice(1).map((v) => v.split(' ').map(Number));

// 종료시간을 기준으로 정렬
times.sort((a,b) => {
    if(a[1] !== b[1]) return a[1] - b[1]
    else return a[0] - b[0];
})

// 최대 개수 구하기
let cnt = 1;
let prev = times[0][1];

for (const v of times.slice(1)) {
    // 이전 회의 종료시간 보다 현재 회의의 시작시간이 크다면 cnt + 1;
    if (v[0] >= prev) {
        prev = v[1];
        cnt++;
    }
}

console.log(cnt);