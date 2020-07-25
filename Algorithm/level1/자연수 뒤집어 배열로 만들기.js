var n=123;

function solution(n)
{
    var answer = [];

    while(n/10>0){
        answer.push(n%10);
        n = Math.trunc(n/10);
    }

    return answer;
}

console.log(solution(n));