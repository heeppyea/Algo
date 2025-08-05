let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n').map(Number);

input.shift();
function isMinority(n) {
    const prime = new Map();
    const arr = Array(n).fill(0);


    for(let i = 2; i <= n; i++){
        arr[i] = i;
    }

    for(let i = 2; i <= n; i++){
        if(arr[i] === 0) continue;
        prime.set(i, true);
        arr[i] = 0;

        for(let j = i * 2; j <= n; j += i){
            if(arr[j] === 0) continue;
            arr[j] = 0;
        }
    }
    return prime;
}

const minoritys = isMinority(1000000)

const getTestCases = (num) => {
    let cnt = 0;
    for (let i = 2; i <= num / 2; i += 1) {
        if (minoritys.get(num - i) && minoritys.get(i)) {
            cnt++;
        }
    }
    return cnt;
}

const results = [];
for (const v of input) {
    results.push(getTestCases(v));
}

console.log(results.join('\n'));