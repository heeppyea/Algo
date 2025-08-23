let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split(`\n`);
let line = input[0].split(' ')
let a = Number(line[0]);
let b = Number(line[1]);
function solution(){
  if(a > 0){
    if(b >= 45 ) {
      a = a;
      b = b-45;
    }
    else if(b < 45){
      a = a-1;
      b = b+15
    }
    console.log(a,b)
  } else {
      if(b >= 45) {
        a = a;
        b = b-45;
      }
      else if(b < 45){
        a =23
        b = b+15
      }
      console.log(a,b)
    }
}
solution();