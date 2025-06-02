let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const num = Number(input[0]);
const numbers = [];
for (let i = 1; i <= num; i ++) numbers.push(Number(input[i].trim()));

const sortNumbers = [...numbers];
sortNumbers.sort((a, b) => a - b);

let idx = 0;
let symbols = [];
const stack = [];

while (idx !== num) {
    const lastItem = stack[stack.length - 1];

    if (numbers[idx] !== lastItem) {
        const firstItem = sortNumbers[0]
        if(!firstItem) {
            console.log('NO');
            return;
        }
        stack.push(firstItem);
        sortNumbers.shift();
        symbols.push('+');
    } else {
        stack.pop();
        symbols.push('-');
        idx++;
    }
}

for (const v of symbols) {
    console.log(v);
}
