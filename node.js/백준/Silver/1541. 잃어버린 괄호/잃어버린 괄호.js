let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().trim().split('-');


let result2 = input[0].split('+').reduce((acc, cur) => {
    acc += Number(cur);
    return acc;
}, 0);

input.slice(1).forEach((v, i) => {
    result2 -= v.split('+').reduce((acc, cur) => {
        acc += Number(cur);
        return acc;
    }, 0);
})

console.log(result2);