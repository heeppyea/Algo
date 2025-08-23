let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().split("\n");

const amount = parseInt(input[0]);
const num = parseInt(input[1]) + 2;

let price = 0;
for (let i = 2; i < num; i++) {
  const exceptEmpty = input[i].split(" ");
  price += Number(exceptEmpty[0]) * Number(exceptEmpty[1]);
  if (i === num - 1) {
    if (price === amount) return console.log("Yes");
    else return console.log("No");
  }
}