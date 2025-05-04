let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n');

const house = Number(input[0]);

const graph = [];
for (let i = 0; i < house; i++) {
    const line = input[i + 1].trim().split('').map(Number);
    for (let j = 0; j < line.length; j++) {
        if(line[j] === 1) graph.push([i, j]);
    }
}

function isRelated(x, y, a, b) {
    // 위, 아래, 오, 왼 조건 모두 찾아야함
    const isSameY = Math.abs(a - x) === 1 && b === y
    const isSameX = Math.abs(b - y) === 1 && a === x
    return isSameX || isSameY;
}

let cnt = 0;
let visited = new Array(graph.length).fill(false);

function dfs(x, y) {
    for (let i = 0; i < graph.length; i ++) {
        const [a, b] = graph[i]
        if(visited[i]) continue;
        if(!isRelated(a, b, x, y)) {
            continue
        }
        visited[i] = true;
        cnt++;
        dfs(a, b);
    }
}

let num = 0;
const result = [];
for(let i = 0; i < graph.length; i++) {
    if(visited[i]) continue;
    const [x, y] = graph[i];
    cnt = 1; // 자기 자신도 집이니까!
    visited[i] = true; // 시작점도 방문 처리
    dfs(x, y);
    num ++;
    result.push(cnt);
}

result.sort((a, b) => a - b);
console.log(num);
for (let i = 0; i < result.length; i++) console.log(result[i]);