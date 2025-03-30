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

// 강의 풀이
// function check(data) {
//     let setData = new Set(data[0]);
//     for (let i = 0; i < data.length -1; i++) {
//         // 오른쪽 단어와 다르다면
//         if(data[i] !== data[i +1]) {
//             // 이미 등장한 적 있는 알파벳이라면
//             if(setData.has(data[i + 1])) {
//                 return false;
//             }
//             else {
//                 setData.add(data[i + 1]);
//             }
//         }
//     }
//     return true;
// }
//
// let n = Number(input[0]);
// let summary = 0;
//
// for (let i = 1; i <= num; i++) {
//     let data = input[i];
//     if(check(data)) summary +=1;
// }
// console.log(summary);