var N=123;

function solution(n)
{
    var answer = 0;

    while(n/10>0){
        answer += n%10;
        n = Math.trunc(n/10);
    }

    return answer;
}

console.log(solution(N));