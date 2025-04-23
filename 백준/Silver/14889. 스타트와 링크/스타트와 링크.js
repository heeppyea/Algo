let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().trim().split("\n");

const N = Number(input[0]);
const queens = input.slice(1).map((v) => v.split(' ').map(Number))

const visited2 = [];
let result2 = [];
const selected2 = [];
function dfs2(n, arr) {
    if(n === 2) {
        const [x, y] = selected2;
        result2.push(queens[x][y] + queens[y][x]);
        return
    }

    for (let i = 0; i < arr.length; i++) {
        if(visited2[i] || selected2.find((e) => e > arr[i])) continue;
        selected2.push(arr[i]);
        visited2[i] = true;
        dfs2(n + 1, arr);
        visited2[i] = false;
        selected2.pop();
    }
}

const visited = new Array(N).fill(false);
const selected = [];
const result = [];
function dfs(n) {
    if(n === N / 2) {
        result2 = [];
        dfs2(0, selected);
        const acc = result2.reduce((acc, cur) => acc + cur);
        result.push(acc);
        return;
    }

    for (let i = 0; i < N; i++) {
        if(visited[i] || selected.find((e) => e > i)) continue;

        visited[i] = true;
        selected.push(i);

        dfs(n + 1);

        visited[i] = false;
        selected.pop();
    }
}

dfs(0);

let answer = 0;
for (let i = 0; i < result.length / 2; i++) {
    const dif = Math.abs(result[i] - result[result.length - i - 1])
    if(i === 0) {
        answer = dif;
        continue;
    }
    answer = Math.min(answer, dif);
}

console.log(answer);