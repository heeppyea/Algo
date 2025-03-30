let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n');

const A = input[1].split(' ').map(Number); // 숫자로 변환

let result = A.reduce((acc, cur) => {
    if(cur > acc.max){
        acc.max = cur;
    }
    if(cur < acc.min) {
        acc.min = cur;
    }
    return acc;

}, {min : A[0], max : A[0]})


console.log(result.min, result.max)