let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n')

input.forEach((v) => {
    // 입력이 유효한지 확인
    if (!v) return; // 빈 줄이나 undefined를 무시

    let parts = v.split(' ');
    let num1 = parseInt(parts[0]);
    let num2 = parseInt(parts[1]);
    let result = num1 + num2;

    if (result === 0) return; // 결과가 0이면 무시
    console.log(result);
});