let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().split("\n");
let line = input[0].split(" ");
let a = parseInt(line[0]);
let b = parseInt(line[1]);

const answerFunc = (a, b) => {
  if (a > b) {
    console.log(">");
  } else if (a < b) {
    console.log("<");
  } else if (a === b) {
    console.log("==");
  }
};

answerFunc(a, b);
