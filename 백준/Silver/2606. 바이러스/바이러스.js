let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().trim().split("\n");

let comNum = Number(input[0]);
let edgNum = Number(input[1]);

// 그래프 초기화
let graph = Array.from({length : comNum + 1}, () => []);
// 양방향 연결을 위해 실행된다. 그래프의 1번 인덱스에는 1번과 연결된 컴퓨터들이, 2번 인덱스에는 2번과 연결된 컴퓨터들이 들어간다.
for (let i = 2; i< input.length; i++) {
    const [a, b] = input[i].split(' ').map(Number);
    graph[a].push(b);
    graph[b].push(a);
}

let visited = Array(comNum + 1).fill(false);
let count = 0;

// 재귀 -> 연결된 모든 노드를 탐색한다. 1번 노드부터 탐색 시작
function dfs(node) {
    // 이미 탐색한 노드
    visited[node] = true;
    // 1번을 탐색한다면, 1번과 연결되있는 2번과 5번 노드까지 타고 탐색한다.
    for (let next of graph[node]) {
        if(!visited[next]) {
            count ++;
            dfs(next);
        }
    }
}

dfs(1);
console.log(count);