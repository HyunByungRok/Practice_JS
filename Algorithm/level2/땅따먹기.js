var land =[[4,3,2,1],[2,2,2,1], [6,6,6,4], [8,7,6,5]];

function solution(land) {
    return Math.max(...land.slice(1).reduce((a, c) => {
        let dp = a.slice();
        for(let i=0; i<4; i++){
            for(let j=0; j<4; j++){
                if(i===j) continue;
                dp[i] = Math.max(dp[i], c[i] + a[j]);
            }
        }
        return dp;
    }, land[0]));
}

console.log(solution(land));