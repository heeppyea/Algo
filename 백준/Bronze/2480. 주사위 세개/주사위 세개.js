let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split(`\n`);
let inputArr = input[0].split(" ");
let numArr = inputArr.map(Number)
let maxNum = Math.max(...numArr)

function solution() {
  let overNum = 0;
  let overResult = "";
  for (let i = 0; i < inputArr.length; i++) {
    if (inputArr[i] == inputArr[i + 1] | inputArr[i] == inputArr[i + 2]) {
      overNum++;
      overResult = inputArr[i]
    }
  }
  switch(overNum){
    case 0: 
      console.log(maxNum * 100)
      break
    case 1: 
      console.log(1000 + overResult * 100)
      break
    case 2: 
      console.log(10000 + overResult * 1000)
  }
}
solution();