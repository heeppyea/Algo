let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n');

const X = input[0].split(' ')[1]
const A = input[1].split(' ')

console.log(A.filter((v) => v < parseInt(X)).join().replace(/,/g,' '))