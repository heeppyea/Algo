let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().trim()

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

let MAX = 100001;

// 현재 위치 n, 동생 위치 k
let [n, k] = input.split(' ').map(Number);
let visited = new Array(MAX).fill(0);

function bfs() {
    let queue = new Queue();
    queue.enqueue(n);
    
    
    if(n === k) {
        console.log(0)
        return;
    }


    while (queue.getLength() !== 0) {
        let cur = queue.dequeue();
        for (let next of [cur + 1, cur - 1, cur * 2]) {
           if(next < 0 || next >= MAX) continue;
           if(next === k) {
               console.log(visited[cur] + 1)
               return;
           }
           if(visited[next] === 0) {
               visited[next] = visited[cur] + 1;
               queue.enqueue(next);
           }
        }

    }
}

bfs()