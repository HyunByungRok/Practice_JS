var arr = [1,1,3,3,0,1,1];

function solution(arr)
{
    var answer = [];

    let comp = -1;
    for(let num of arr){
        if(comp===num) continue;
        answer.push(num);
        comp = num;
    }

    return answer;
}

console.log(solution(arr));