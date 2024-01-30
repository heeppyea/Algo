const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().split('\n');

// 2
const N = Number(input[0]);
let count = N;
let word;

// 3
for(let i=1; i <= N; i++) {
    word = input[i];
    for(let j=0; j < word.length-1; j++) {
    	// 4
        if( word[j] != word[j+1] && !!word.slice(j+1).includes(word[j]) ) {
            count--;
            break;
        }
    }
}

// 5
console.log(count);