var n =3;
var m = 12;

function solution(n, m) {
    var answer = [];
    [n, m] = [n, m].sort((a, b) => b-a);
    answer[0] = getGcd(n, m);
    answer[1] = n*m/answer[0];
    return answer;
}

function getGcd(big, small){
    return big%small === 0 ? small : getGcd(small, big%small);
}

console.log(solution(n, m));