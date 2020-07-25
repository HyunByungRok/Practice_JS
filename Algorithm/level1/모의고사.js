var answers = [1,3,2,4,2];

function solution(answers) {
    var answer = [];    
    var player = [];
    player[1] = [1,2,3,4,5];
    player[2] = [2,1,2,3,2,4,2,5];
    player[3] = [3,3,1,1,2,2,4,4,5,5];
    
    var max = 1;
    answer = player.reduce((acc, cur, i) => {
        let count = howManyCorrect(answers, cur); 
        if(max<=count){
            if(max<count){
                max = count;
                acc = [];
            } 
            acc.push(i);
        }
        return acc;
    }, []);

    return answer;
}

function howManyCorrect(answers, cur){
    return answers.reduce((rtv, e, i)=>{
        let realIdx = i%cur.length;
        if(e===cur[realIdx]) return rtv+1;
        else return rtv;
    },0);
}
console.log(solution(answers));
