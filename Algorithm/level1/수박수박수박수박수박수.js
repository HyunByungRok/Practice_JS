var n = 3;

function solution(n) {
    var answer = "";
    for(let i =0; i<n; i++){
        answer+= i%2===0 ? "수" : "박";
    }
    return answer;
}

console.log(solution(n));