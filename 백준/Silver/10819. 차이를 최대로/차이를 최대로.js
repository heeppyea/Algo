let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

let num = Number(input[0]);
let arr = input[1].split(' ').map(Number);
let visited = new Array(num).fill(false);
let selected = [];

let answer = 0;

function getTotal (selected) {
    let result = 0;
    for (let i = 0; i < num - 1; i ++) {
        result += Math.abs(selected[i] - selected[i + 1]);
    }
    return result;
}

function dfs(arr, depth) {
    if (depth === num) {
        answer = Math.max(answer, getTotal(selected));
        return;
    }

    for (let i = 0; i < num; i++) {
        if(visited[i]) continue;
        selected.push(arr[i]);
        visited[i] = true;
        dfs(arr, depth + 1);
        selected.pop();
        visited[i] = false;
    }
}

dfs(arr, 0)
console.log(answer);
