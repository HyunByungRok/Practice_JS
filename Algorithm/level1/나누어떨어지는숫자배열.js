var arr = [2, 36, 1, 3];
var divisor = 1;

function solution(arr, divisor) {
    var answer = [];

    for(let num of arr){
        if(num%divisor === 0) answer.push(num);
    }
    if(answer.length===0) answer.push(-1);
    else answer.sort((a,b)=>a-b);
    
    return answer;
}

console.log(solution(arr, divisor));