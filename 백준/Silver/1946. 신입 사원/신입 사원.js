let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

//♾️ 서류, 면접 둘 중 하나를 기준으로 정렬을 해야한다
// 서류로 정렬을 한다고 생각하고 구현
const num = input[0];
const arr = input.slice(1);

// 테스트 케이스마다 정렬을 해줘야한다.
// idx 를 관리해야 테스트 케이스 개수만 갖고 있는 값을 가져올 수 있음
let idx = 0;
for (let i = 0; i < num; i ++) {
    // 케이스 마다의 개수
    let N = Number(arr[idx]);
    const sortedArr = [];
    for (let j = idx + 1; j <= N + idx; j++) {
        sortedArr.push(arr[j].split(' ').map(Number));
    }
    sortedArr.sort((a,b) => a[0] - b[0]);
    idx += N + 1;

    // 최대 인원수 구하기
    // 서류 기준으로 정렬이 되어 있으니, 직전 값들의 면접순위보단 현재 면접순위가 높아야한다. (서류보다 순위가 놎으면 면접은 높아야함)
    let cnt = 1;
    let highestRank = sortedArr[0][1]; // 가장 높은 순위
    for (let j = 1; j < sortedArr.length; j++) {
        if(sortedArr[j][1] < highestRank) {
            cnt ++;
        }
        highestRank = Math.min(highestRank, sortedArr[j][1]); // 모든 값을 비교해야 하니까 가장 높은 순위를 구해둔다.
    }
    console.log(cnt);
}
