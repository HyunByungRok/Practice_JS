var seoul = ["Jane", "Kim"];

function solution(seoul) {
    var answer = "";
    answer = `김서방은 ${seoul.indexOf("Kim")}에 있다`;
    return answer;
}

console.log(solution(seoul));