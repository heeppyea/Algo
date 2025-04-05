let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n')

const numbers = input.slice(1);

const coords = input.slice(1).map(line => line.split(' ').map(Number));

coords.sort((a, b) => {
    if (a[0] !== b[0]) return a[0] - b[0];
    return a[1] - b[1];
});

for (const [x, y] of coords) {
    console.log(x, y);
}
