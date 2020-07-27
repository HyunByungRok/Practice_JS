var w = 8;
var h = 12;

function solution(w, h){
    [w, h] = w<h ? [h, w] : [w, h];
    return w*h - (w + h - gcd(w, h));
}

function gcd(big, small){
    return big%small === 0 ? small : gcd(small, big%small);
}
console.log(solution(w, h));