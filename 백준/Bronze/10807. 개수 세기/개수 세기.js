let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n');

const arr = input[1].split(' ')
const findNumber = input[2]

console.log(arr.filter((e) => e === String(findNumber)).length);
