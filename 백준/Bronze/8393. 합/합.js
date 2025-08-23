let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().split("\n");
let num = Number(input[0]);
let count = 0;

for (let i = 0; i < num + 1; i++) {
  count += i;
  if (i == num) {
    console.log(count);
  }
}
