// var s = ["aabbaccc", "ababcdcdababcdcd", "abcabcdede", "abcabcabcabcdededededede", "xababcdcdababcdcd", "aacaaacaa"];
var s = ["aabbaccc"];
function solution(s) {
    var answer = s.length;
    for(let i=1; i<=s.length/2; i++){
        let count=s.length, howLong=1;
        for(let j=0; j<s.length; j+=i){
            if(j+i>=s.length) break;
            if(s.substr(j, i) === s.substr(j+i, i)) {
                count-=i;
                howLong++;
            }
            else {
                count += howLong===1 ? 0 : String(howLong).length;
                howLong=1;
            }
        }
        count += howLong === 1 ? 0 : String(howLong).length;
        answer = Math.min(answer, count);
    }
    return answer;
}

for(let st of s) console.log(solution(st));