var n = 4;

function solution(n) {
    let memo = [0, 1, 2];
    for(let i=3; i<=n; i++) {
        memo[i] = (memo[i-1] + memo[i-2])%1000000007;
    }
    return memo[n];
}

console.log(solution(n));