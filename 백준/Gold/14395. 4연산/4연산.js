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

// 정수를 바꿀 수 없는 경우에는 -1을 출력, s와 t가 같은 경우에는 0

// 차례대로 가보면 될 거 같음
let [s, t] = input.split(' ').map(Number);

let visited = new Map();
function bfs() {
    if(s === t) {
        console.log(0)
        return;
    }

    let queue = new Queue();
    queue.enqueue(s);
    visited.set(s, '');

    while (queue.getLength() !== 0) {
        let cur = queue.dequeue();
        const arr = [cur * cur, cur + cur, cur - cur, cur / cur]
        for (let i = 0; i < arr.length; i ++) {
            const nxt = arr[i];
            if (nxt > t || nxt <= 0) continue;

            let symbol;
            if(i === 0) {
                symbol = '*';
            }
            if(i === 1) {
                symbol = '+';
            }
            if(i === 2) {
                symbol = '-';
            }
            if(i === 3) {
                if (cur === 0) continue;
                symbol = '/';
            }

            if (nxt === t) {
                const result = (visited.get(cur) || '') + symbol;
                console.log(result);
                return;
            }

            if (!visited.has(nxt)) {
                queue.enqueue(nxt);
                visited.set(nxt, (visited.get(cur) || '') + symbol);
            }
        }
    }

    console.log(-1)
}

bfs();