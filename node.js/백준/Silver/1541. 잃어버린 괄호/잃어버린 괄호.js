let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().trim().split('-');

const accFunc = (arr) => arr.reduce((acc, cur) => {
    acc += Number(cur);
    return acc;
}, 0);

let result = accFunc(input[0].split('+'))
input.slice(1).forEach((v, i) => {
    result -= accFunc(v.split('+'))
})

console.log(result);