let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n')

const arr = input.slice(1).map((v) => v.split(' '));


const seqMap = new Map();
arr.forEach((v, i) => {
    seqMap.set([v[1]], i);
})


arr.sort((a,b) => {
    const ageA = Number(a[0]);
    const ageB = Number(b[0]);
    if(ageA !== ageB) return ageA - ageB;
    else {
        const seqA = seqMap.get(a[1]);
        const seqB = seqMap.get(b[1]);

        return seqA - seqB
    }
})

for (const [a, b] of arr) {
    console.log(a, b);
}