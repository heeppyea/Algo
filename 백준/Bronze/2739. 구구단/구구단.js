
let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().split("\n");
let num = Number(input[0]);

function solution(num) {
  for (let i = 1; i < 10; i++) {
    console.log(num + " * " + i + " = " + num * i);
  }
}
solution(num);
