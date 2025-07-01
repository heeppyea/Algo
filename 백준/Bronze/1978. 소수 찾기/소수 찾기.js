let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const n = Number(input[0]);
const arr = input[1].split(' ').map(Number);

let result = 0;

for (let i = 0; i < n; i++) {
    const cur = arr[i];
    if(cur === 1) continue;

    let num = 0;
    for (let i = 1; i < cur; i ++) {
        if (cur % i === 0) {
            num ++;
        }
    }

    if (num === 1) {
        result ++;
    }
}

console.log(result);