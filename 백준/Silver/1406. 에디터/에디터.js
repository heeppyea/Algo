let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

let left = input.shift().trim().split('');
let right = [];
const num = Number(input.shift());

for (let i = 0; i < num; i++) {
    const [cmd, val] = input[i].trim().split(' ');

    switch (cmd) {
        case 'L':
            if (left.length) right.push(left.pop());
            break;
        case 'D':
            if (right.length) left.push(right.pop());
            break;
        case 'B':
            if (left.length) left.pop();
            break;
        case 'P':
            left.push(val);
            break;
    }
}

console.log([...left, ...right.reverse()].join(''));