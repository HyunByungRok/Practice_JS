var arr = 10;

function solution(x) {
    return x%(""+x).split("").reduce((a, c) => a+c*1, 0) === 0;
}

console.log(solution(arr));