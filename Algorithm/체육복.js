var n = 5;
var lost = [2,4];
var reserve = [1,3,5];


function solution(n, lost, reserve) {
    var answer = 0;
    var array = [];

    for(let i=1; i<=n; i++) array[i]=1;

    lost.forEach((e) => {
        array[e]=0;
    });

    reserve.forEach((e) => {
        array[e]++;
    });

    array.forEach((e,i, arr) => {
        if(e===2){
            if(arr[i-1]===0){
                array[i-1]++;
                arr[i]--;
            }else if(arr[i+1]===0){
                arr[i+1]++;
                arr[i]--;
            }
        }
    });
    
    answer = array.reduce((acc, cur) =>{
        if(cur>=1) return acc+1;
        return acc;
    },0);
    return answer;
}


console.log(solution(n, lost, reserve));