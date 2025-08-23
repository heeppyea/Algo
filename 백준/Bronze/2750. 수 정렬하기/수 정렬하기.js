let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n').map(Number);

const numbers = input.slice(1);

for (let i = numbers.length - 1; i > 0 ; i--) {
    for (let j = 0 ; j < i; j ++) {
        if(numbers[j] > numbers[j + 1]) {
            let temp = numbers[j];
            numbers[j] = numbers[j + 1];
            numbers[j + 1] = temp;
        }
    }
}

let result = numbers.join('\n')
console.log(result);