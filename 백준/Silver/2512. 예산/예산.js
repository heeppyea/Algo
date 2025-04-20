let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n');

let n = Number(input[0].split(' ')[0]);
let arr = input[1].split(' ').map(Number);
let m = Number(input[2]); // 총 예산

let start = 1; // 이진 탐색을 위한 시작점과 끝점 설정
let end = arr.reduce((a, b) => Math.max(a, b));

// 문제의 목적 : 상한액을 구하는 것 -> 상한액을 mid 로 잡고 계속 늘려가는 것
let result = 0;
while (start <= end) {
    let mid = parseInt((start + end) / 2); // 현재의 중간점 (상한액);
    let total = 0;
    for (x of arr) { // 각 지방에서 요청한 예산을 하나씩 확인하며
        total += Math.min(mid, x); // 예산 배정
    }
    if (total <= m) { // total이 예산 보다 적다면, 상한액을 증가시키기
        result = mid;
        start = mid + 1;
    } else { // total이 예산보다 크다면 상한액을 감소시키기.
        end = mid - 1;
    }
}
console.log(result);
