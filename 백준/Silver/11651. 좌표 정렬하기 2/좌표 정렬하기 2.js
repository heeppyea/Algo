let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n')

const numbers = input.slice(1).map((v) => v.split(' ').map(Number));

const sorted = numbers.sort((a, b) => {
    if(a[1] !== b[1]) return a[1] - b[1];
    else return a[0] - b[0];
})

for (const v of sorted) {
    console.log(v[0], v[1])
}
