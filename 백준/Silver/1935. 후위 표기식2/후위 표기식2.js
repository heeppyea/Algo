let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n').map((v) => v.trim());

const num = Number(input.shift());
const str = input.shift().split('');

const alphabets = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];

const strs = new Map();
for (let i = 0; i < num; i++) {
    strs.set(alphabets[i], Number(input[i]));
}

const arr = [];
for (const v of str) {
    if(strs.has(v)) {
        arr.push(strs.get(v));
    } else {
        const b = arr.pop();
        const a = arr.pop();
        switch (v) {
            case '+' :
                arr.push(a + b);
                break;
            case '-' :
                arr.push(a - b);
                break;
            case '*' :
                arr.push(a * b);
                break;
            case '/' :
                arr.push(a / b);
                break;
        }
    }
}

console.log(arr.pop().toFixed(2));
