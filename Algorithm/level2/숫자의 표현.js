var n = 15;

function solution(n) {
    let count = 0;
    for(let i=1; i<=n; i++){
        let sum = i, idx=1;
        while(sum<=n){
            if(sum === n) count++;
            sum += (i+idx++);
        }
    }
    return count;
}

console.log(solution(n));