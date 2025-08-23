let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n')

// 좌표 압축 -> 크기 순위로 변경하는 것
const numbers = input[1].split(' ').map(Number);

const set = new Set(numbers);
const sorted = [...set].sort((a, b) => a - b);

const map = new Map();
sorted.forEach((v, i) => {
    map.set(v, i);
})

let result = ''
for (const x of numbers) {
    result += map.get(x) + ' ';
}

console.log(result);
