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

// 출발 도시 X에서 각 도시까지의 최단거리를 구해야 한다.
// 그 중 K와 같은 값이 있다면 그 도시를 오름차순으로 출력하면 된다.

// N: 도시의 개수, M: 도로의 개수, K: 거리 정보, X: 출발 도시의 번호
const [N, M, K, X] = input[0].split(' ').map(Number);

// 단방향 그래프 생성
const graph = [];
let visited = [];
for (let i = 0; i <= N; i ++) {
    graph.push([])
    visited.push(false);
}

for (let i = 1; i <= M; i++) {
    const [a, b] = input[i].split(' ').map(Number);
    graph[a].push(b);
}

const queue = new Queue();

// 초기값 넣기
queue.enqueue([X, 0]);
visited[X] = true;

const result = [];

while(queue.getLength() !== 0) {
    const cur = queue.dequeue();
    const [city, dis] = cur;

    if(dis === K) {
        result.push(city);
    }

    for (const x of graph[city]) {
        if(visited[x]) continue;
        queue.enqueue([x, dis + 1]);
        visited[x] = true;
    }

}

if(!result.length) {
    console.log(-1);
} else {
    result.sort((a, b) => a - b);
    for (const x of result) {
        console.log(x);
    }
}
