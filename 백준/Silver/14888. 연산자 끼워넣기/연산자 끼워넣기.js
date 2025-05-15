let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const numbers = input[1].split(' ').map(Number);
const symbols = input[2].split(' ');
const symbolArr = []
for (let i = 0; i < symbols.length; i++) {
    let num = Number(symbols[i]);
    for (let j = 0; j < num; j++) {
        if (i === 0) {
            symbolArr.push('+');
        } else if (i === 1) {
            symbolArr.push('-');
        } else if (i === 2) {
            symbolArr.push('*');
        } else if (i === 3) {
            symbolArr.push('/');
        }
    }
}

const visited = new Array(symbolArr.length).fill(false);
const selected = [];

function calcSelected(arr) {
    let result = numbers[0];
    const numbers2 = numbers.slice(1)
    for (let i = 0; i < numbers2.length; i++) {
        const symbol = arr[i];
        if (symbol === '+') {
            result += numbers2[i]
        } else if (symbol === '-') {
            result -= numbers2[i];
        } else if (symbol === '*') {
            result *= numbers2[i]
        } else {
            result = ~~(result / numbers2[i]);
        }
    }
    return result;
}

let answer = []
function dfs(count) {
    if (count === symbolArr.length) {
       const result =  calcSelected(selected);
        answer.push(result);
    }

    for (let i = 0; i < symbolArr.length; i++) {
        if(visited[i]) continue;
        visited[i] = true;
        selected.push(symbolArr[i]);
        dfs(count + 1);
        selected.pop();
        visited[i] = false;
    }
}

dfs(0)

const max = Math.max(...answer);
const min = Math.min(...answer);

console.log(max);
console.log(min);





