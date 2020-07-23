var n = 5;

function solution(n) {
    var answer = 0;
    var checked = [];
    checked.length = n+1;
    checked.fill(false);
    checked[0] = checked[1] = true;
    for(let i=2; i<=Math.sqrt(n); i++){
        if(checked[i]===true) continue;
        for(let j=2; i*j<=n; j++){
            checked[i*j] = true;
        }
    }
    answer = checked.reduce((acc, cur) => acc + (cur ? 0 : 1),0);
    return answer;
}

console.log(solution(n));