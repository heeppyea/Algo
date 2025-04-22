let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n');

// 모든 순열의 수를 고려하기 위해 재귀 함수(백트래킹)를 사용할 수 있다.
// 하나의 순열을 트리에서 리프 노드까지의 경로로 생각할 수 있다.
// -> 이때, M개의 원소를 뽑는 순열을 고려하는 것이므로, 깊이(depth)는 M과 같다.
// 원소를 중복하여 선택하지 않으므로, 방문 처리 배열을 사용한다.
// 한 번 선택된 원소는 다음 재귀 함수에서 다시 선택되지 않는다.

let [n, m] = input[0].split(' ').map(Number);
let arr = [];
for (let i = 1; i<= n; i++) arr.push(i);
let visited = new Array(n).fill(false);
let selected = [];

let answer = '';
function dfs(arr, depth) {
    if(depth === m) {
        let result = [];
        for (let i of selected) result.push(arr[i]);
        for (let x of result) answer += x + ' ';
        answer += '\n';
        return;
    }
    for (let i = 0; i < arr.length; i++) {
        if (visited[i] || selected.find((e) => e > i)) continue;
        selected.push(i);
        visited[i] = true;
        dfs(arr, depth +1);
        selected.pop();
        visited[i] = false
    }
}
dfs(arr, 0);
console.log(answer.trim());