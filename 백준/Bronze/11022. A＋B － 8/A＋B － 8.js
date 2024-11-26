let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().split("\n");

const num = input[0];
for (let i = 1; i < Number(num) + 1; i++) {
  const answer = input[i].split(" ");
  const answer1 = answer[0];
  const answer2 = answer[1];
  const sum = Number(answer1) + Number(answer2);
  console.log(`Case #${i}: ${answer1} + ${answer2} = ${sum}`);
}
