let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

for (const sen of input.slice(1)) {
    const arr = []
    for (const word of sen.split(' ')) {
        arr.push(word.split('').reverse().join('').trim());
    }
    console.log(arr.join(' '));
}