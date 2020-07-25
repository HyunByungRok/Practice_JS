var a = 3;
var b = 3;

function solution(a, b) {
    var answer = 0;
    if(a<=b) {
        a--;
        [a, b] = [b, a];
    }
    else b--;
    answer = sumtoN(a) - sumtoN(b);
    return answer;
}

function sumtoN(n){
    return n*(n+1)/2;
}

console.log(solution(a, b));