function solution(arr) {
    let prevValue;
    const result = arr.reduce((acc, cur) => {
        if(cur !== prevValue) {
            acc.push(cur);
            prevValue = cur;
        }
        return acc;
    },[])

    return result;
}
