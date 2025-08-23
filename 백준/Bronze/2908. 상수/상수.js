let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString();
let reversed  = input.split("").reverse().join('').split(' ');
console.log(Math.max(...reversed))