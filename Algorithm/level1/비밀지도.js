var n = 5;
var arr1 = 	[9, 20, 28, 18, 11];
var arr2 = [30, 1, 21, 17, 28];


function solution(n, arr1, arr2) {
    var answer = [];

    for(let i=0; i<n; i++){
        let num = arr1[i] | arr2[i];
        answer.push(toMap(num, n));
    }
    return answer;
}

function toMap(num, n){
    let rtv = "";
    for(let i=n-1; i>=0; i--) {
        if((num & (1<<i)) > 0) rtv+="#";
        else rtv+=" ";
    }
    return rtv;
}

console.log(solution(n, arr1, arr2));