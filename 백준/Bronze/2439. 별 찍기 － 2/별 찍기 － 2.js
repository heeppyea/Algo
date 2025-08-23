let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split(' ');

let answer = "";

for (i = 1; i <= input; i++) {
    answer += "*";
    const blank = ' '.repeat(input -i)
    console.log(blank + answer);
}

