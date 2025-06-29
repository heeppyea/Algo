let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().trim()

const results = [];
for (let i = 0; i < input.length; i++) {
    const str = input.slice(i);
    results.push(str);
}

results.sort();

console.log(results.join('\n'));