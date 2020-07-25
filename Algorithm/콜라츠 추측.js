var n = 6;

function solution(num) {
    let answer=0;
    for(; answer<500; answer++){
        if(num===1) break;
        num = num%2 === 0 ? num/2 : num*3+1;
    }

    return answer===500 ? -1 : answer;
}

console.log(solution(n));