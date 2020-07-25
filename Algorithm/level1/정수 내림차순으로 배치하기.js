var n = 118372;

function solution(n) {
    var answer = 0;
    let temp = [];
    while(n/10>0){
        temp.push(n%10);
        n = Math.floor(n/10);
    }
    answer = temp.sort().reverse().join("")*1;

    
    return answer;
}

console.log(solution(n));