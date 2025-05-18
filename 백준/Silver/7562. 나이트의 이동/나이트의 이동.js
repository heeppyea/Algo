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

function bfs(start, end, width) {
    let visited = Array.from({ length: width }, () => Array(width).fill(0));
    let queue = new Queue();
    // 처음 큐에 시작 좌표를 넣는다
    queue.enqueue(start);

    if(start[0] === end[0] && start[1] === end[1]) {
        console.log(0);
        return;
    }

    // 큐의 길이가 0이 될때까지 계속해서 while 문을 돈다.
    while(queue.getLength() !== 0) {
        const [x, y] = queue.dequeue();
        for (let [x2, y2] of [[x + 1, y - 2], [x + 2, y - 1], [x + 2, y + 1], [x + 1, y + 2], [x - 1, y + 2], [x - 2, y + 1], [x - 2, y - 1], [x - 1, y - 2]]) {
            if (x2 < 0 || y2 < 0 || x2 >= width || y2 >= width) continue;
            if(visited[x2][y2] === 0) {
                visited[x2][y2] += visited[x][y] + 1;
                queue.enqueue([x2, y2]);
            }
            if(x2 === end[0] && y2 === end[1]) {
                console.log(visited[x2][y2]);
                return;
            }
        }
    }
}

const cases = Number(input[0]);

let idx = 1;
for (let i = 0; i < cases; i++) {
    const [width, start, end] = input.slice(idx, idx + 4).map((v) => v.split(' ').map(Number));
    bfs(start, end, width[0]);
    idx += 3
}