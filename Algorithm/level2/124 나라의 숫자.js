var n = 9;

function solution(n){
    let string = (n).toString(3);
    let temp = string.split("")
        .reverse();
    temp.forEach((e,i,arr) => {
        e*=1;
        if(arr[i+1]===undefined) {
            if(e===0)
                arr.splice(i);
        }
        else if(e===0){
            arr[i] = 4;
            arr[i+1] = arr[i+1]*1-1;
        }else if(e===-1){
            arr[i] = 2;
            arr[i+1] = arr[i+1]*1-1;
        }
        if(arr[i+1]===3) arr[i+1]=2;
    });
    return temp.reverse().join("");
}

console.log(solution(n));