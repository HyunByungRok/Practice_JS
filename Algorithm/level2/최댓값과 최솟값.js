var s = "-1 -2 -3 -4";

function solution(s) {
    let nArr = s.split(" ").map(e => Number(e));
    return `${Math.min(...nArr)} ${Math.max(...nArr)}`;
}

console.log(solution(s));