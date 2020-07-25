var dartResult = "1S2D*3T";

function solution(dartResult) {
    var answer = 0;
    var score = [0], round = 0;
    for(let i=0; i<dartResult.length; i++){
        let c = dartResult[i];
        if(c==="S" || c==="D" || c==="T"){
            score[round] = Math.pow(score[round], (c==="S" ? 1 : (c==="D" ? 2 : 3))); 
        }else if(c==="*" || c==="#"){
            if(c==="*") {
                score[round-1]*=2;
                score[round]*=2;
            }else{
                score[round]*=-1;
            }
        }else{
            round++;
            if(dartResult[i]==="1" && dartResult[i+1]==="0"){
                score[round] = 10;
                i++;
            }else{
                score[round] = dartResult[i]*1;
            }
        }
    }
    answer = score.reduce((a, c) => a+c);
    return answer;
}

console.log(solution(dartResult));