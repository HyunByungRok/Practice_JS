var d = [1,3,2,5,4];
var budget = 9;

function solution(d, budget) {
    return d.sort((a, b) => a-b)
        .reduce((acc, cur, i, arr)=>{
            budget-=cur;
            if(budget<0) {
                arr.slice(1);
                return acc;
            }
            return acc+1;
        },0);
}

console.log(solution(d, budget));