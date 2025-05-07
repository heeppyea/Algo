let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

// 로프를 많이 사용할수록 각 로프가 부담하는 하중은 줄지만, 전체로 들 수 있는 무게는 달라진다.
const N = input.shift();

const rope = input.map(Number);

rope.sort((a, b) => b - a);

const answer = [];

// 가장 강한 로프는 하나만 들 수 있고 그 아래로는 다 i+1만큼 들 수 있음 
for (let i = 0; i < N; i++) {
    answer.push(rope[i] * (i + 1));
}

console.log(Math.max(...answer));