var s = "try hello world";

function solution(s) {
    var answer = "";
    answer = s.split(" ").map(e => 
        e.split("").map((e, i)=>{
            if(i%2===0) return e.toUpperCase();
            else return e.toLowerCase();
        }).join("")
    ).join(" ");
    
    return answer;
}

console.log(solution(s));