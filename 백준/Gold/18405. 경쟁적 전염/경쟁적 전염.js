let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

class Queue {
    constructor() {
        this.items = {};
        this.headIndex = 0;
        this.tailIndex = 0;
    }

    // 삽입
    enqueue(item) {
        this.items[this.tailIndex] = item;
        this.tailIndex++;
    }

    // 삭제
    dequeue() {
        const item = this.items[this.headIndex];
        delete this.items[this.headIndex];
        this.headIndex++;
        return item;
    }

    // 가장 첫번째 원소
    peek() {
        return this.items[this.headIndex];
    }

    // 큐의 길이
    getLength() {
        return this.tailIndex - this.headIndex;
    }
}

const [N, K] = input[0].split(' ').map(Number);
let graph = [];
let data = [];

for (let i = 0; i < N; i ++) {
    graph.push(input[i + 1].split(' ').map(Number));
    // 바이러스, 시간, x,y위치 저장
    for (let j = 0; j < N; j++) {
        if(graph[i][j] !== 0) {
            data.push([graph[i][j], 0, i, j])
        }
    }
}

const queue = new Queue();

// 가장 작은 바이러스부터 넣는다.
data.sort((a, b) => a[0] - b[0]);
for (let i = 0; i < data.length; i++) {
    queue.enqueue(data[i]);
}

const dx = [-1, 0, 1, 0];
const dy = [0, 1, 0, -1]

const [targetS, targetX, targetY] = input[N + 1].split(' ').map(Number);

// 바이러스가 퍼지게
while (queue.getLength() !== 0) {
    const cur = queue.dequeue();
    const [virus, s, x, y] = cur;

    if(s === targetS) break;

    for (let i = 0; i < 4; i ++) {
        const nx = x + dx[i];
        const ny = y + dy[i];

        if (nx < 0 || ny < 0 || nx >= N || ny >= K) {
            continue;
        }

        if (graph[nx][ny] === 0) {
            graph[nx][ny] = virus;
            queue.enqueue([virus, s + 1, nx, ny]);
        }
    }
}

console.log(graph[targetX - 1][targetY - 1]);