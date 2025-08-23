let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n')


const set = new Set(input.slice(1));
const arr = Array.from(set);

const sorted = arr.sort((a,b) => {
    if(a.length !== b.length) return a.length - b.length;
    else {
        if (a < b) return -1;
        else if (a > b) return 1;
    }
})

const result = sorted.join('\n')

console.log(result);
