let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n').map(Number);

const arr = input.slice(1);
const result = arr.sort((a,b) => a -b).join('\n');
console.log(result);