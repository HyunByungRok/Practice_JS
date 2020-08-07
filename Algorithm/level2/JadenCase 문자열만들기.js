var s = "for the last week";

function solution(s) {
    return s.split(" ").map(e => {
        return e.substr(0, 1).toUpperCase() + e.substr(1).toLowerCase();
    }).join(" ");
}

console.log(solution(s));