let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().trim().split('');


let count = 0;
let acc = 0;
let prevValue = '';


for (let i = 0; i < input.length; i ++) {
    const v = input[i];

    // 레이저 신호
    if(prevValue === '(' && v === ')') {
        count --;
        acc += count;
        prevValue = v;
        continue;
    }

    // 괄호 시작 개수 세기 시작해야함
    if (v === '(') {
        count++;
    }

    if(v === ')') {
        count -= 1;
        acc ++;
    }

    prevValue = v;
}

console.log(acc);