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

const n = Number(input.shift());
const m = Number(input.shift());

let graph = [];
let visited = [];
for (let i = 0; i <= n; i ++) {
    graph.push([]);
    visited.push(false);
}

for (let i = 0; i < m; i ++) {
    const [a, b] = input[i].split(' ').map(Number);
    graph[a].push(b);
    graph[b].push(a);
}

const queue = new Queue();
queue.enqueue(1);
visited[1] = true;

let count = 0;
let len = graph[1].length + 1;

while(queue.getLength() !== 0) {
    const cur = queue.dequeue();
    
    if (len === 0) {
        console.log(count);
        return;
    }

    for (const v of graph[cur]) {
        if(visited[v]) continue;
        visited[v] = true;
        queue.enqueue(v);
        count ++;
    }

    len --;
}

console.log(0);
