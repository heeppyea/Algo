let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const [n, b] = input[0].split(' ').map(Number);

let minPack = 1000;
let minItem = 1000;

// 패키지 중 최소 값, 낱개 중 최소 값
for (const [pack, item] of input.slice(1).map((v) => v.split(' ').map(Number))) {
    minPack = Math.min(minPack, pack);
    minItem = Math.min(minItem, item);
}

let result = 0;
let count = n;

while (count > 0) {
    if(count > 6) {
        result += Math.min(minPack, 6 * minItem);
        count -= 6;
    } else {
        result += Math.min(minPack, count * minItem);
        count = 0;
    }
}

console.log(result);