var strings = ["sun", "bed", "car"];
var n = 1;

function solution(strings, n) {
    var answer = [];

    answer = strings.sort((a,b) => {
        if(a[n]===b[n]) return (a < b) ? -1 : (a===b) ? 0 : 1;
        return a[n] < b[n] ? -1 : 1;
    });

    return answer;
}

console.log(solution(strings, n));