let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

//♾️도시마다 있는 금액을 최소 금액 배열로 모두 변환해서 계산할 수 있다.
// ex) 5 2 4 1 -> 5 2 2 1 로 변경해서 계산하면 더 수월하다.

const num = Number(input[0]);
const dist = input[1].split(' ').map(Number);
const prices = input[2].split(' ').map(Number);

// 이전까지의 최소 금액과, 현재 금액을 비교해 더 작은 금액을 구해준다. 
// 최소 금액으로 현재 위치의 금액 변경
let minPrice = prices[0]
for (let i = 1; i < num - 1; i++) {
    minPrice = Math.min(minPrice, prices[i])
    prices[i] = minPrice;
}

// 비용 계산
let result = BigInt(0)
for (let i = 0; i < num - 1; i++) {
    result += BigInt(dist[i]) * BigInt(prices[i]);
}

console.log(String(result));

// 부분 성공시 코드
// const distances = input[1].split(' ').map(Number);
// const prices = input[2].split(' ').map(Number);
//
// let moveIdx = 0;
// let accPrices = 0;
//
// for (const [i , v] of Object.entries(prices)) {
//     const curIdx = Number(i)
//     if (curIdx !== moveIdx || curIdx === prices.length - 1) {
//         continue;
//     }
//     // 현재 위치보다 더 작은 값을 가진 인덱스를 구해주기
//     const findSmallIdx = prices.findIndex((e) => e < v);
//     if (findSmallIdx > curIdx) {
//         // 금액만큼 더해주기
//         accPrices = distances.slice(curIdx, findSmallIdx).reduce((acc, cur) => {
//             acc += cur * v;
//             return acc;
//         }, accPrices)
//         moveIdx = findSmallIdx;
//     } else {
//         accPrices = distances.slice(curIdx).reduce((acc, cur) => {
//             acc += cur * v;
//             return acc;
//         }, accPrices);
//         break;
//     }
// }
//
// console.log(accPrices);