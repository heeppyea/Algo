let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().trim();

let n = Number(input);
let queens = [];

// x: 행 y: 열
function possible(x, y) {
    for (let [a, b] of queens) {
        if (a == x || b == y) return false;
        if (Math.abs(a - x) === Math.abs(b - y)) return false;
    }
    return true;
}

let cnt = 0;
function dfs(row) {
    // 재귀가 종료하는 조건 : row === n과 같을때, 즉 마지막 행일 때
    if(row === n) {
        cnt++;
        return;
    }
    for (let i = 0; i < n; i++) {
        if (!possible(row, i)) {
            continue // 배치할 수 없다면 다음 반복으로
        }
        queens.push([row, i]); // 배치할 수 있으면 push
        dfs(row + 1); // 그다음 행으로 재귀
        queens.pop(); // 재귀가 끝나면 백트래킹, 값을 제거
    }
}
dfs(0);
console.log(cnt);
