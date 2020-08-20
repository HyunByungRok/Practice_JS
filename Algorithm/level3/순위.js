var n = 5;
var results = [[4, 3], [4, 2], [3, 2], [1, 2], [2, 5]];

function solution(n, results) {
    let dis = Array.from(Array(n), () => Array.from(Array(n), ()=>0));
    results.forEach(e => dis[e[0]-1][e[1]-1] = 1);

    floydW(n, dis);
    return dis.reduce((a, c, i) => {
        let count =0;
        for(let j=0; j<n; j++){
            if(dis[i][j]!==0) count++;
            if(dis[j][i]!==0) count++;
        }
        return count === n-1 ? a+1 : a;
    }, 0);
}

function floydW(n, dis) {
    for(let k =0; k<n; k++){
        for(let i =0; i<n; i++){
            if(dis[i][k] === 0) continue;
            for(let j=0; j<n; j++){
                if(dis[k][j] === 0) continue;
                dis[i][j] = Math.max(dis[i][j], dis[i][k] + dis[k][j]);
            }
        }
    }
}

console.log(solution(n, results));