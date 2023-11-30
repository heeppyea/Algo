let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split(`\n`);
let typedTime = input[0].split(" ");
let typedHour = Number(typedTime[0]);
let typedMinute = Number(typedTime[1]);
let takeTime = Number(input[1]);

function solution() {
  // 총 minute(분) 
  let minute = typedMinute + takeTime; 
  typedHour += Math.floor(minute / 60);
  let per = minute % 60;
  typedHour > 23 ? typedHour -= 24 : typedHour;
  console.log(typedHour,per);
}
solution();