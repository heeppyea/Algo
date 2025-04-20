let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const num = input[0];

// 회문검사
function isPalindrome(s) {
    const arr = s.split('');
    let left = 0;
    let right = arr.length - 1;

    while(left < right) {
        if(arr[left] !== arr[right]) {
            return false;
        }
        left ++;
        right --;
    }
    return true;
}

// 유사회문검사
function isAlmostPalindrome(s) {
    const arr = s.split('');
    let left = 0;
    let right = arr.length -1 ;

    while(left < right) {
        if (arr[left] !== arr[right]) {
            // 왼쪽 값을 하나 지우고
            const skipLeft = arr.slice(left + 1, right + 1);
            // 오른쪽 값을 하나 지우고
            const skipRight = arr.slice(left, right);
            // 회문 검사
            return isPalindrome(skipLeft.join('')) || isPalindrome(skipRight.join(''));
        }
        left++;
        right--;
    }
    return false;
}

function solution(s) {
    if (isPalindrome(s)) {
        console.log(0);
    } else if (isAlmostPalindrome(s)) {
        console.log(1);
    } else {
        console.log(2);
    }
}


for(let i = 1; i <= num; i++) {
    solution(input[i])
}
