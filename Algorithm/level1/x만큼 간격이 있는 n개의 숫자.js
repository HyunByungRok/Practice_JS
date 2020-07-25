var x = 2;
var n = 5;

function solution(x, n) {
    return Array.from(Array(n).keys(), i=>i+1).map(e => e*x);
}

console.log(solution(x, n));