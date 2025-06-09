let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

let [n, ...numbers] = input;

n = Number(n);
numbers = numbers[0].split(' ').map((i) => Number(i));

let countObj = numbers.reduce((acc, cur) => {
    if (acc[cur] )acc[cur] += 1;
    else acc[cur] = 1;
    return acc;
}, {});

const stack = [];
for (let i = 0; i < n; i++) {
    while (stack.length && countObj[numbers[stack[stack.length - 1]]] < countObj[numbers[i]]) {
        numbers[stack.pop()] = numbers[i];
    }
    stack.push(i);
}


while (stack.length) {
    numbers[stack.pop()] = -1;
}

console.log(numbers.join(' '));


