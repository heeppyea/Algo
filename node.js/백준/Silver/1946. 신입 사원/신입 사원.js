let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');


// 1. 정렬
// 2. 개수구하기

const T = parseInt(input[0]);
let idx = 1;

for (let t = 0; t < T; t++) {
    const N = parseInt(input[idx]);
    const applicants = [];

    for (let i = idx + 1; i <= idx + N; i++) {
        const [doc, interview] = input[i].split(' ').map(Number);
        applicants.push([doc, interview]);
    }

    // 서류 기준 정렬
    applicants.sort((a, b) => a[0] - b[0]);

    let count = 1;
    let bestInterview = applicants[0][1];

    for (let i = 1; i < N; i++) {
        if (applicants[i][1] < bestInterview) {
            count++;
            bestInterview = applicants[i][1];
        }
    }
    idx += N + 1;
    console.log(count);

}