let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().trim()

let num = Number(input);
let cnt = 1;

while (num >= 0) {
    if (num - cnt > cnt) {
        num = num - cnt;
        cnt++;
    } else break;
}

console.log(cnt)