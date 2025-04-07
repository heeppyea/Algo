let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().trim().split(' ');

let a = Number(input[0]);
let b = Number(input[1]);
let cnt = 1;

while (b > a) {
    if (b % 2 === 0) {
        b = b / 2;
        cnt++;
    } else if (String(b).slice(-1) === '1') {
        b = Number(String(b).slice(0, String(b).length - 1));
        cnt++;
    } else break;
}

if (b !== a) {
    cnt = -1;
}

console.log(cnt)