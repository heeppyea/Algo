let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n');

// 도시 : N, 치킨집 개수 : M;
let [N, M] = input[0].split(' ').map(Number);
let chicken = [];
let house = [];

// 치킨, 도시 좌표를 각 배열에 넣어두기
for (let i = 0; i < N; i++) {
    let line = input[i + 1].split(' ').map(Number);
    for (let j = 0; j < N; j++) {
        // 1이면 집
        if(line[j] === 1) house.push([i, j]);
        // 2이면 치킨집
        if(line[j] === 2) chicken.push([i, j]);
    }
}

// 방문 여부
let visited = new Array(chicken.length).fill(false); // 각 치킨집 방문 여부
let selected = []; // 치킨집 최소 개수에 맞춰 조합한 배열

let answer = 1e9; // 값을 비교해 최소를 찾기위해 가장 큰 수로 초기화
dfs(0, 0);
console.log(answer);

function dfs(depth, start) {
    // 최소 치킨집 개수가 찼을 때
    if(depth === M) {
        let result = [];
        for (let i of selected) result.push(chicken[i]);

        let sum = 0;
        // 모든 집들과 치킨집 사이의 최소 거리를 구하고 그 합을 구한다.
        for (let [hx, hy] of house) {
            let temp = 1e9;
            for (let [cx, cy] of result) {
                // 한 집에서 어떤 치킨집이랑 가장 거리가 작은지
                temp = Math.min(temp, Math.abs(hx - cx) + Math.abs(hy - cy));
            }
            sum += temp;
        }

        // 합이 가장 작은 치킨 조합을 찾는다.
        answer = Math.min(answer, sum);
        return;
    }
    // 치킨집 조합 완전 탐색
    for (let i = start; i < chicken.length; i++) {
        if (visited[i]) continue;
        selected.push(i);
        visited[i] = true;
        dfs(depth + 1, i + 1);
        selected.pop();
        visited[i] = false;
    }
}