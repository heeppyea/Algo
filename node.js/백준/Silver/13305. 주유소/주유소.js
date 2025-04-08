let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const distances = input[1].split(' ').map(Number);
const prices = input[2].split(' ').map(Number);

let moveIdx = 0;
let accPrices = 0;

for (const [i , v] of Object.entries(prices)) {
    const curIdx = Number(i)
    if (curIdx !== moveIdx || curIdx === prices.length - 1) {
        continue;
    }
    // 현재 위치보다 더 작은 값을 가진 인덱스를 구해주기
    const findSmallIdx = prices.findIndex((e) => e < v);
    if (findSmallIdx > curIdx) {
        // 금액만큼 더해주기
        accPrices = distances.slice(curIdx, findSmallIdx).reduce((acc, cur) => {
            acc += cur * v;
            return acc;
        }, accPrices)
        moveIdx = findSmallIdx;
    } else {
        accPrices = distances.slice(curIdx).reduce((acc, cur) => {
            acc += cur * v;
            return acc;
        }, accPrices);
        break;
    }
}

console.log(accPrices);