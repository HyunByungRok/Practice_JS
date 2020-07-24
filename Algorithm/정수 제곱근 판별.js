var n = 121;

function solution(n) {
    let data = n**(1/2);
    return Number.isInteger(data) ? (data+1)**2 : -1;
}

console.log(solution(n));