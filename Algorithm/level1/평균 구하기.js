var arr = [1,2,3,4];

function solution(arr) {
    return arr.reduce((a, c) => a+c, 0)/arr.length;
}

console.log(solution(arr));