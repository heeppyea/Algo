let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const num = Number(input.shift().trim());

function gcd(a, b) {
    while (b !== 0) {
        [a, b] = [b, a % b];
    }
    return a;
}

function getMinMaxPairs(arr) {
    let result = 0;
    const n = arr.length;
    for (let i = 0; i < n - 1; i++) {
        for (let j = i + 1; j < n; j++) {
            const [a, b] = arr[i] < arr[j] ? [arr[i], arr[j]] : [arr[j], arr[i]];
            result += gcd(a, b)

        }
    }
    return result;
}

let results = [];
for (let i = 0; i < num; i++) {
    const arr = input[i].trim().split(' ').map(Number).slice(1);
    results.push(getMinMaxPairs(arr))
}

console.log(results.join('\n'));


