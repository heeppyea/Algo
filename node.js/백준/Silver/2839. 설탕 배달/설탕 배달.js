let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().trim();


// 5로 나누어 떨어지는 값은 그냥 개수를 세주고, 5로 나누어 떨어지지 않으면 5로 나누어 떨어질 때까지 3을 빼준다.

let num = Number(input);
let result = 0;

while (num > 0) {
    if (num % 5 === 0) {
        const value = num / 5;
        num -= value * 5;
        result += value;
    } else if (num < 3) {
        result = -1;
        break;
    } else {
        num -= 3;
        result += 1;
    }
}

console.log(result);