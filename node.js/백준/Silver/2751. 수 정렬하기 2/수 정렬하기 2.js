let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n').map(Number);

const arr = input.slice(1);

function merge(arr) {
    if(arr.length < 2) {
        return arr;
    }

    const mid = Math.floor(arr.length / 2);
    const left = arr.slice(0, mid);
    const right = arr.slice(mid);

    return mergeSort(merge(left), merge(right));

    function mergeSort(left, right) {
        const mergedArr = [];
        let leftIdx = 0;
        let rightIdx = 0;

        while(leftIdx < left.length && rightIdx < right.length) {
            if(left[leftIdx] < right[rightIdx]) {
                mergedArr.push(left[leftIdx]);
                leftIdx ++;
            } else {
                mergedArr.push(right[rightIdx]);
                rightIdx++;
            }
        }

        return mergedArr.concat(left.slice(leftIdx), right.slice(rightIdx));

    }

}

const result = merge(arr).join('\n');
console.log(result)
