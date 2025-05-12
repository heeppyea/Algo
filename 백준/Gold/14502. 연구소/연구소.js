let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

let [n, m] = input[0].split(' ').map(Number);

let data = [];
let temp = [];

for (let i = 1; i <= n; i ++) {
    const line = input[i].split(' ').map(Number);
    data.push(line);
    temp.push(new Array(m).fill(0));
}

const dx = [-1, 0, 1, 0];
const dy = [0, 1, 0, -1];
let result = 0;

function virus(x, y) {
    for (let i = 0; i < 4; i++) {
        const nx = dx[i] + x;
        const ny = dy[i] + y;
        if(nx < 0 || nx >= n || ny < 0 || ny >= m) continue;
        if (temp[nx][ny] === 0) {
            temp[nx][ny] = 2;
            virus(nx, ny);
        }
    }
}

function getScore() {
    let score = 0;
    for (let i = 0; i < n; i ++) {
        for (let j = 0; j < m; j++) {
            if(temp[i][j] === 0) score += 1;
        }
    }
    return score;
}

function dfs(count) {
    // 벽을 3개 배치했을 때
    if (count === 3) {
        for (let i = 0; i < n; i++) {
            for (let j = 0; j < m; j++) {
                temp[i][j] = data[i][j]; // 임시 배열에 새로 벽을 배치한 데이터를 반영
            }
        }
        for (let i = 0; i < n; i++) {
            for (let j = 0; j < m; j++) {
                // 여기서 바이러스 함수 시행
                if(temp[i][j] === 2) virus(i, j)
            }
        }
        result = Math.max(result, getScore());
        return;
    }

    // 3가지 조합 dfs 먼저
    for (let i = 0; i < n; i ++) {
        for (let j = 0; j < m; j++) {
            if(data[i][j] === 0) {
                data[i][j] = 1;
                dfs(count + 1);
                data[i][j] = 0;
            }
        }
    }
}

dfs(0);
console.log(result);