let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n')

class Dequeue {
    constructor () {
        this.items = {};
        this.headIdx = 0;
        this.tailIdx = 0;
    }

    // unShift 를 구현과 같음
    pushF (x) {
        const items = this.items
        for (const [idx, value] of Object.entries(items)) {
            this.items[Number(idx) + 1] = value;
        }
        this.items[this.headIdx] = x;
        this.tailIdx ++;
    }

    // push 구현
    pushB (x) {
        this.items[this.tailIdx] = x;
        this.tailIdx ++;
    }

    // shift 구현
    popF () {
        const item = this.items[this.headIdx];
        if (!item) return -1;

        delete this.items[this.headIdx];
        this.headIdx ++;

        return item;
    }

    // pop 구현
    popB () {
        const item = this.items[this.tailIdx - 1];
        if (!item) return -1;

        delete this.items[this.tailIdx - 1];
        this.tailIdx --;

        return item;
    }

    size () {
        return this.tailIdx - this.headIdx;
    }

    empty () {
        return this.size() === 0 ? 1 : 0
    }

    front () {
        const item = this.items[this.headIdx];
        if (!item) return -1;

        return item;
    }

    back () {
        const item = this.items[this.tailIdx - 1];
        if (!item) return -1;

        return item;
    }

}

const dequeue = new Dequeue();
const num = Number(input.shift());

let output = [];
for (let i = 0; i < num; i++) {
    const [cmd, val] = input[i].trim().split(' ');
    switch (cmd) {
        case 'push_front' : {
            dequeue.pushF(Number(val));
            break;
        }
        case 'push_back' : {
            dequeue.pushB(Number(val));
            break;
        }
        case 'pop_front' : {
            output.push(dequeue.popF());
            break;
        }
        case 'pop_back' : {
            output.push(dequeue.popB());
            break;
        }
        case 'size' : {
            output.push(dequeue.size());
            break;
        }
        case 'empty' : {
            output.push(dequeue.empty());
            break;
        }
        case 'front' : {
            output.push(dequeue.front());
            break;
        }
        case 'back' : {
            output.push(dequeue.back());
            break;
        }
    }
}

console.log(output.join('\n'));