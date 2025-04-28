let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n');

// 하나의 그래프 안에 포함된 트리의 개수를 세는 문제
// 트리: 사이클이 없는 연결 요소 -> 1,2 2,3, 1,3 -> 이런 경우에는 1,2,3이 사이클이 존재해서 트리가 아님

// 1. 그래프 생성
// 2. 사이클 조건 함수 생성
let visited;
let graph = [];
let testCase = 1;
let line = 0;

function isCycle(x, prev) {
    visited[x] = true;
    for(let y of graph[x]) {
        // 방문한 적이 없다면
       if(!visited[y]) {
           if(isCycle(y, x)) return true;
       }
       // 직전 방문과 다르다면
       else if (y !== prev) {
           // 사이클을 돈것이다.
           return true;
       }
    }
    return false;
}

while (true) {
    let [n, m] = input[line].split(' ').map(Number);
    if (n === 0 && m === 0) break;

    // 그래프 생성
    graph = Array.from({ length: n + 1 }, () => []);
    for (let i = 1; i <= m; i++) {
        const [x, y] = input[line + i].split(' ').map(Number);
        graph[x].push(y);
        graph[y].push(x);
    }

    // 방문 여부
    visited = Array.from(n + 1).fill(false);
    let cnt = 0;
    for (let i = 1; i <= n; i++) {
        if(!visited[i]) { // 방문하지 않고
            if(!isCycle(i, 0)) {
                cnt++;
            } // 사이클이 아니면 카운팅
        }
    }

    if (cnt === 0) {
        console.log(`Case ${testCase}: No trees.`);
    } else if (cnt === 1) {
        console.log(`Case ${testCase}: There is one tree.`);
    } else {
        console.log(`Case ${testCase}: A forest of ${cnt} trees.`);
    }

    line += m + 1;
    testCase ++;
}