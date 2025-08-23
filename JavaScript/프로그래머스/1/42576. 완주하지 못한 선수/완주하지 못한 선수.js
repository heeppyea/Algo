function solution(participant, completion) {
    let arr = {}

    for (let name of completion) {
        arr[name] = (arr[name] || 0) + 1;
    }

    for (let name of participant) {
        if(!arr[name]) return name;
        arr[name] = arr[name] - 1;
    }
}

