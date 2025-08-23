const input = require('fs').readFileSync('/dev/stdin', 'utf8').split('\n');

input.forEach(line => {
    // 공백 줄은 무시 (마지막 빈 줄 방지용)
    if (line === '') return;

    let lower = 0, upper = 0, digit = 0, space = 0;
    for (let ch of line) {
        if (ch >= 'a' && ch <= 'z') lower++;
        else if (ch >= 'A' && ch <= 'Z') upper++;
        else if (ch >= '0' && ch <= '9') digit++;
        else if (ch === ' ') space++;
    }
    console.log(`${lower} ${upper} ${digit} ${space}`);
});
