let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const num = Number(input.shift());

class Queue {
    constructor() {
        this.items = {};
        this.headIdx = 0;
        this.tailIdx = 0;
    }

    push(item) {
        this.items[this.tailIdx] = item;
        this.tailIdx ++;
    }

    pop() {
        const item = this.items[this.headIdx];
        if(!item) {
            return -1;
        }
        delete this.items[this.headIdx];
        this.headIdx ++;
        return item;
    }

    size() {
        return this.tailIdx - this.headIdx;
    }

    empty() {
        return this.size() === 0 ? 1 : 0
    }

    front() {
        if(this.size() === 0) return -1;
        return this.items[this.headIdx];
    }

    back() {
        if(this.size() === 0) return -1;
        return this.items[this.tailIdx - 1];
    }
}


const queue = new Queue();

let output = [];
for (let i = 0; i < num; i ++) {
    const [cmd, val] = input[i].trim().split(' ');
    switch (cmd) {
        case 'push' :  {
            queue.push(Number(val));
            break;
        }

        case 'pop' : {
            output.push(queue.pop())
            break;
        }

        case 'size' : {
            output.push(queue.size())
            break;
        }

        case 'empty' : {
            output.push(queue.empty())
            break;
        }

        case 'front' : {
            output.push(queue.front())
            break;
        }

        case 'back' : {
            output.push(queue.back());
            break;
        }
    }

}

console.log(output.join('\n'));