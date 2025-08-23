let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().trim().split(' ');

let a = Number(input[0]);
let b = Number(input[1]);
let cnt = 1;

// 2로 나눠지는 값이거나, 2로 나눠지지 않는다면 끝자리가 1일 것이다.
// 그렇지 않은 경우는 -1 리턴
// b에서 a로 가면서 2로 나누고 나눈 값이 2의 배수가 아니면 1을 빼주는 형태를 반복한다
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
