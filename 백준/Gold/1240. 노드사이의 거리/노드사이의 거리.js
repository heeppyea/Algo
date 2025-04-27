let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n');

// 1. 그래프 만들기
// 2. 두 노드 사이 거리를 구하는 재귀 DFS 함수 만들기
// 3. 조건에 맞게 DFS 함수 돌기

const [N, M] = input[0].split(' ').map(Number);
const graph = Array.from({length: N + 1}, () => []);

for (let i = 1; i < N; i++) {
    const [x, y, cost] = input[i].split(' ').map(Number);
    graph[x].push([y, cost]);
    graph[y].push([x, cost]);
}

let distance;
let visited;

function dfs(x, dist) {
    if(visited[x]) return;
    visited[x] = true;
    distance[x] = dist;

    for (let [y, cost] of graph[x]) {
        dfs(y, dist + cost)
    }
}

for (let i = 0; i < M; i++) {
    const [x, y] = input[N + i].split(' ').map(Number);
    distance = Array.from({length: N + 1}).fill(-1);
    visited = Array.from({length: N + 1}).fill(false);
    dfs(x, 0);
    console.log(distance[y])
}