let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

class MinHeap{
    constructor(){
        this.H = [0];
    }

    size() {
        return this.H.length - 1;
    }

    swap(a, b) {
        [this.H[a], this.H[b]] = [this.H[b], this.H[a]];
    }

    upHeap() {
        let index = this.H.length - 1;
        let parentIdx = Math.floor(index / 2); // 부모 노드의 위치

        while(this.H[parentIdx] && this.H[index] < this.H[parentIdx]) {
            this.swap(index, parentIdx);
            index = parentIdx
            parentIdx = Math.floor(index / 2);
        }
    }

    downHeap(i) {
        if (i * 2 > this.size())
            return;

        let smaller = i*2;
        if (i*2+1 <= this.size() && this.H[smaller] > this.H[i*2+1])
            smaller = i*2+1;

        if (this.H[i] > this.H[smaller]) {
            this.swap(i, smaller);
            this.downHeap(smaller);
        }
    }

    // 삽입 메서드
    push(x) {
        this.H.push(x);
        this.upHeap();
    }

    deleteMin() {
        const key = this.H[1];
        this.H[1] = this.H[this.size()];
        this.H.pop();
        this.downHeap(1);
        return key;
    }
}

function solution() {
    const N = Number(input[0]);
    const card = new MinHeap();
    for (let i = 1; i <= N; i++) {
        card.push(Number(input[i]));
    }

    let result = 0;

    while (card.size() > 1) {
        const merge = card.deleteMin() + card.deleteMin();
        result += merge;
        card.push(merge);
    }
    
    console.log(result);
}

solution()