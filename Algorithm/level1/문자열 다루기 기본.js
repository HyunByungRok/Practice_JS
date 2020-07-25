var s = "10 234";

function solution(s) {
    var answer = true;
    if(s.length==4 || s.length==6){
        for(let c of s){
            if("0"<=c && c<="9") continue;
            answer = false;
            break;
        }
    }else answer = false;
    return answer;
}

console.log(solution(s));