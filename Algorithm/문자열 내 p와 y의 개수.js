var s = "pPoooyY";

function solution(s){
    var answer = true;
    let yCnt=0, pCnt=0;
    for(let c of s.toLowerCase()){
        c==="y" ? yCnt++ : c==="p" ? pCnt++ : yCnt;
    }

    return answer = yCnt===pCnt;
}

console.log(solution(s));