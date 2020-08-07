var nums = [3,1,2,3];

function solution(nums) {
    let size = nums.reduce((a, c) => a.add(c), new Set()).size;
    return size <= nums.length/2 ? size : nums.length/2;
}

console.log(solution(nums));