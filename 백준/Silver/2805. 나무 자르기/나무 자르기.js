let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n');

const [N, M] = input[0].split(' ').map(Number);

const arr = input[1].split(' ').map(Number);

let start = 1;
let end = arr.reduce((a, b) => Math.max(a, b));

let result = 0;
while (start <= end) {
    let mid = parseInt((start + end) / 2);

    let total = 0;
    for (x of arr) {
        if(x - Math.min(x, mid) > 0) {
            total += x - Math.min(x, mid);
        }
    }

    if (total >= M) {
        result = mid;
        start = mid + 1;
    } else {
        end = mid - 1;
    }
}

console.log(result);