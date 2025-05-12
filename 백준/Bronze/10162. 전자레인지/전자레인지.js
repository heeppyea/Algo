let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().trim();

let A = 300;
let B = 60;
let C = 10;

let countA = 0;
let countB = 0;
let countC = 0;

let second = Number(input);

while (second > 0) {
    if (second - A >= C || second % A === 0) {
        second -= A;
        countA++
    } else if (second - B >= C || second % B === 0) {
        second -= B;
        countB++;
    } else {
        second -= C;
        countC++;
    }
}

if (second < 0) console.log(-1);
else console.log(countA, countB, countC);