let fs = require('fs');
let input = fs.readFileSync("/dev/stdin").toString().split("\n");

const arr = input.slice(0,10).map((v) => Number(v));
const restArr = new Set();

for (let i = 0; i < arr.length; i ++) {
    const rest = arr[i] % 42;
    restArr.add(rest);
}

const result = restArr.size;
console.log(result);