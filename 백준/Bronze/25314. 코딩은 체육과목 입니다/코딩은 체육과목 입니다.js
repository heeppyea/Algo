let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString();

let answer = "";
for (let i = 0; i < Number(input) / 4; i++) {
  answer += "long ";
  if (i === Number(input) / 4 - 1) {
    return console.log(`${answer}int`);
  }
}
