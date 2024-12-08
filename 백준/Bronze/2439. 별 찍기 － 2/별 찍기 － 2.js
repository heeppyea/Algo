let fs = require('fs');
let input = fs.readFileSync("/dev/stdin").toString().split(" ");

let answer = '';
let blank = '';

for (i = 1; i <= input; i++) {
    answer += "*";
    for (let j = 0; j < input - i; j++) {
        blank += " ";
    }
    console.log(blank + answer);
    blank = "";
}
