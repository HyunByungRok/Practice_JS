var N = 5;
var stages = [2, 1, 2, 6, 2, 4, 3, 3];

function solution(N, stages) {
    var answer = [];
    let success = [];
    success.length = N+1;
    success.fill(0);
    stages.forEach(e => {
        if(e!==N+1) success[e]++;
    });
    let remain = stages.length;
    answer = success.map((e, i) => {
        let result;
        if(remain<=0) result = 0;
        else result = e/remain;
        remain-=e;
        return [result, i];
    }).slice(1);
    answer = answer.sort((a, b) => b[0]===a[0] ? a[1]-b[1] : (b[0]-a[0])).map(e => e[1]);
    return answer;
}

console.log(solution(N, stages));

