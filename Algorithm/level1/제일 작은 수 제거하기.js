var arr = [4,3,2,1];

function solution(arr) {
    let min = arr.reduce((acc, cur)=>{
        return cur < acc ? cur : acc;
    });
    let answer = arr.filter(e => e!==min);
    return answer.length===0 ? [-1] : answer;
}

console.log(solution(arr));