let fs = require('fs');
 let input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const num = Number(input[0]);

let result = num;
for (let i = 1; i <= num; i ++) {
    const arr = input[i].split(''); // 배열로 변환
    const acc = []; // 누적 배열
    for (let j = 0; j < arr.length; j++) {
        const cur = arr[j]
        if(acc.lastIndexOf(cur) !== -1 && j - acc.lastIndexOf(cur) > 1) {
            result --;
            break;
        }
        acc.push(cur)
    }

}
console.log(result);