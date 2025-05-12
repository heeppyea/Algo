let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().trim();

const arr = input.split('').map(Number);

// 연속되지 않는 지점이 몇개인지만 찾으면 된다.
let arr1 = [];
let arr2 = [];
arr.forEach((v, i) => {
    if(v === 0) {
        arr1.push(i);
    } else {
        arr2.push(i);
    }
})

let result1;
if (arr1.length > 0) {
    let count = 1;
    let prevIdx = arr1[0];
    arr1.forEach((v) => {
        if(v - prevIdx > 1) {
            count ++;
        }
        prevIdx = v;
    })
    result1 = count;
} else {
    result1 = 0;
}

let result2;
if (arr2.length > 0) {
    let count = 1;
    let prevIdx = arr2[0];
    arr2.forEach((v) => {
        if(v - prevIdx > 1) {
            count ++;
        }
        prevIdx = v;
    })
    result2 = count;
} else {
    result2 = 0;
}

console.log(Math.min(result1, result2));
