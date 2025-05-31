let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

class MinHeap {
    constructor() {
        this.H = [];
    }

    size() {
        return this.H.length;
    }

    swap(a, b) {
        [this.H[a], this.H[b]] = [this.H[b], this.H[a]];
    }

    upHeap(i) {
        if (i === 0) return;
        const parent = Math.floor((i - 1) / 2);
        if (this.H[i] < this.H[parent]) {
            this.swap(i, parent);
            this.upHeap(parent);
        }
    }

    downHeap(i) {
        const left = 2 * i + 1;
        const right = 2 * i + 2;
        let smallest = i;

        if (left < this.size() && this.H[left] < this.H[smallest]) {
            smallest = left;
        }
        if (right < this.size() && this.H[right] < this.H[smallest]) {
            smallest = right;
        }

        if (smallest !== i) {
            this.swap(i, smallest);
            this.downHeap(smallest);
        }
    }

    push(x) {
        this.H.push(x);
        this.upHeap(this.size() - 1);
    }

    deleteMin() {
        if (this.size() === 0) return null;
        const min = this.H[0];
        const last = this.H.pop();
        if (this.size() > 0) {
            this.H[0] = last;
            this.downHeap(0);
        }
        return min;
    }

    min() {
        return this.size() > 0 ? this.H[0] : null;
    }
}

function solution() {
    const N = Number(input[0]);

    const arr = input.slice(1).map((v) => v.split(' ').map(Number));
    arr.sort((a, b) => a[0] - b[0]);

    const heap = new MinHeap();

    // 끝자리를 먼저 heap 에 넣어두기
    for (const v of arr) {
        const [a, b] = v;
        heap.push(b);
    }

    let count = 1;
    for (let i = 1; i < N; i ++) {
        const [a, b] = arr[i];
        const min = heap.min();

        if (min <= a) {
            heap.deleteMin();
        } else {
            count ++;
        }
    }

    console.log(count)

}

solution()