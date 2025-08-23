let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n')

// type을 number로 바꾸는 과정이 필수로 필요함
const coords = input.slice(1).map(line => line.split(' ').map(Number));
const sorted = coords.sort((a,b) => {
    if (a[0] < b[0]) return -1;
    else if(a[0] > b[0]) return 1;
    else {
        if (a[1] > b[1]) return 1;
        if (a[1] < b[1]) return -1;
    }
})

for (const v of sorted) {
    console.log(v[0], v[1]);
}

// 단순화 
// const coords = input.slice(1).map(line => line.split(' ').map(Number));
//
// const sorted = coords.sort((a,b) => {
//     if(a[0] !== b[0]) return a[0] - b[0]
//     else return a[1] - b[1]
// })
//
// for (const v of sorted) {
//     console.log(v[0], v[1]);
// }

