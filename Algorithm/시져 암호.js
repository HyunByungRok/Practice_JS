var s = "az";
var n = 2;

function solution(s, n) {
    var answer = "";

    var lower = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
    var upper = lower.map((e) => e.toUpperCase());

    answer = s.split("").map(e => {
        if(e==" ") return " ";
        else if("a"<=e && e<="z"){
            return lower[(lower.indexOf(e)+n)%26];
        }else{
            return upper[(upper.indexOf(e)+n)%26];
        }
    }).join("");

    return answer;
}

console.log(solution(s, n));