let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().split("\n");

const num = input[0];

for (let i = 1; i < Number(num) + 1; i++) {
  const answer = input[i].split(" ");
  console.log(`Case #${i}: ${Number(answer[0]) + Number(answer[1])}`);
}
