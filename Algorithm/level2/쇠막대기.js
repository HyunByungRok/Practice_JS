var arrangement = "()(((()())(())()))(())";

function solution(arrangement){
    let count=0;
    return arrangement.split("").reduce((a, c, i, arr)=>{
        if(c===")"){
            count--;
            if(arr[i-1]=="("){
                a+=count;
            }else a+=1;
        }else count++;
        return a;
    },0);
}

console.log(solution(arrangement));