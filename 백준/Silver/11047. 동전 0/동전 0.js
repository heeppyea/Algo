let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const money = Number(input[0].split(' ')[1])
const coins = input.slice(1).map(Number)
// 정렬하지 않고 for문을 맨 뒤에서 부터 도는 것도 방법이다.
const sortedCoin = coins.sort((a, b) => b - a);

let num = 0;
let calcMoney = money

for (const v of sortedCoin) {
    if (calcMoney > 0 && calcMoney >= v) {
        const share = Math.floor(calcMoney / v) // 나머지 제외 몫만
        num += share
        calcMoney -= v * share;
    } else if (calcMoney < 0) break;
}

console.log(num)
