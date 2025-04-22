let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString()

const [N, M] = input.trim().split(' ').map(Number);

const arr = [];
for (let i = 1; i <= N; i++) arr.push(i);

const selected = [];
let answer = '';

function dfs(arr, depth) {
    if(depth === M) {
        const result = [];
        for (let x of selected) result.push(arr[x]);
        for (let x of result) answer += x + ' ';
        answer += '\n'
        return answer;
    }

    for(let i = 0; i < arr.length; i++) {
        selected.push(i)
        dfs(arr, depth + 1);
        selected.pop();
    }
}

dfs(arr, 0);
console.log(answer);