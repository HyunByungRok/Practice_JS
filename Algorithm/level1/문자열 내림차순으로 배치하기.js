var s = "Zbcdefg";

function solution(s) {
    var answer = "";
    return answer = s.split("").sort((a, b) => a<b ? 1 : -1).join("");
}

console.log(solution(s));