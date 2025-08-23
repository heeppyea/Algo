let fs = require('fs');
let input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const testCases = Number(input.length);
let result = '';
for (const [i, v] of input.entries()) {

    const arr = v.split(' ')
    if (!arr[1]) continue;

    const num = Number(arr[0]);
    let str = ''
    for (const j of arr[1].split('')) {
        str += j.repeat(num)
    }
    result += str + `${i === testCases -1 ? '' : '\n'}`
}

console.log(result);