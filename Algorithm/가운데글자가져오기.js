var s = "qwer";

function solution(s) {
    var answer = "";
    var num = Math.trunc(s.length/2);
    if(s.length%2==0){
        answer = s.substring(num-1, num+1);
    }else{
        answer = s[num];
    } 
    return answer;
}

console.log(solution(s));