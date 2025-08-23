let fs = require('fs');
let input = fs.readFileSync("/dev/stdin").toString().trim().split(' ')

const arr = input.map((v) => Number(v.split('').reverse().join(''))).reduce((a,b) => Math.max(a,b))
console.log(arr)