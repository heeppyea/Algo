let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n').map(Number);

let cases = input[0]
let graph = [0];
for (let i = 1; i <= cases; i++) graph.push(input[i]);

let visited = new Array(graph.length).fill(false);
let finished = new Array(graph.length).fill(false);
let result = [];

function dfs(node) {
    visited[node] = true;
    let nextNode = graph[node];
    if(!visited[nextNode]) { // 다음 노드가 방문처리가 되어있지 않다면 재귀
        dfs(nextNode);
    }
    else if (!finished[nextNode]) { // 다음 노드가 종료처리가 되어있지 않다면 (사이클을 나타낸다)
        while (node !== nextNode) { // 사이클을 돌고있는 노드들을 result에 포함 (그래프를 한 번 더 도는다)
            result.push(nextNode);
            nextNode = graph[nextNode];
        }
        result.push(node);
    }
    finished[node] = true; // 현재 노드 종료 처리 (재귀 종료를 알림)
}

for (let node = 1; node < graph.length; node++) {
    if(!visited[node]) dfs(node);
}

result.sort((a, b) => a - b)
console.log(result.length)
for (let i = 0; i < result.length; i++) {
    console.log(result[i])
}