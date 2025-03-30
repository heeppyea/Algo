function solution(nums) {

    const exceptDuplicateLength = Array.from(new Set(nums)).length;

    const getLength = nums.length / 2


    if (exceptDuplicateLength >= getLength) {
        return getLength;
    } else return exceptDuplicateLength

}
