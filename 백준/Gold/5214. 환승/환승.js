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

const [N, K, M] = input[0].split(' ').map(Number);

let visited = [];
for (let i = 0; i <= N; i++) {
    visited.push(0)
}

const graph = Array.from({ length: N + M + 1 }, () => []);
for (let i = 1; i <= M; i++) {
    const arr = input[i].split(' ').map(Number);
    const len = arr.length;

    for (let j = 0; j < len; j++) {
        graph[N + i].push(arr[j]);
        graph[arr[j]].push(N + i);
    }
}

const queue = new Queue();
queue.enqueue(1);

visited[1] = 1;

while (queue.getLength() !== 0) {

    const cur = queue.dequeue();

    if (cur === N) {
        console.log(Math.floor(visited[cur] / 2) + 1);
        return;
    }

    for (let v of graph[cur]) {
        if (visited[v]) continue;

        queue.enqueue(v);
        visited[v] = visited[cur] + 1;
    }
}

console.log(-1);
