let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().trim();

let arr = input.split('').map(Number);
const sum = arr.reduce((a, b) => a + b, 0);

if (!arr.includes(0) || sum % 3 !== 0) {
    console.log(-1);
} else {
    arr.sort((a, b) => b - a);
    console.log(arr.join(''));
}
