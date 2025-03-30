function solution(n) {
  return n
    .toString()           // 숫자를 문자열로 변환
    .split('')            // 각 자릿수를 배열로 분리
    .map(Number)          // 문자열 배열을 숫자 배열로 변환
    .reduce((a, b) => a + b, 0);  // 모든 숫자를 더함
}