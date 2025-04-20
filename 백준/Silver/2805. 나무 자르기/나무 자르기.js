let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n');

const [N, M] = input[0].split(' ').map(Number);

const arr = input[1].split(' ').map(Number);

let start = 1;
let end = arr.reduce((a, b) => Math.max(a, b));

let result = 0;

// result, 목적: 잘라야 하는 최대 높이를 구하는 것 (높은 높이에서 자를 수록 나무가 더 많이 남는다) 
while (start <= end) {
    let mid = parseInt((start + end) / 2); // 1 ~ 최대값까지가 처음 범위고 그 범위를 점점 좁혀나가야 한다. 

    let total = 0;
    for (x of arr) {
        if(x - Math.min(x, mid) > 0) {
            total += x - Math.min(x, mid);
        }
    }

    if (total >= M) { // total이 필요한 나무 길이보다 크다면 result는 더 커져야 한다. -> start를 mid + 1로 변경 - 기존 반복문을 돌리는 것보다 범위가 확 줄어든다  
        result = mid;
        start = mid + 1;
    } else { // total이 필요한 나무 길이보다 작다면 end 끝 지점은 더 작아져야 하낟. 
        end = mid - 1;
    }
}

console.log(result);
