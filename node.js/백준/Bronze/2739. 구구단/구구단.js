const rl = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
})

const solution = (N) => {
    let result = '' ;
    for (let i = 1; i < 10; i ++) {
        result += `${N} * ${i} = ${N * i}` + `${i !== 9 ? '\n' : ''}`;
    }
    console.log(result);
}

rl.on('line', function(N) {
    solution(N)
    process.exit();
})