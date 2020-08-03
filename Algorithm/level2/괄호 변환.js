var p = "(()())()";

function solution(p) {
    return solve(p);
}

function solve(p) {
    if(p === "") return p;
    let i, open=0, close=0;
    for(i=0; i<p.length; i++){
        if(p[i]==="(") open++;
        else close++;
        if(open === close) break;
    }
    let u = p.substr(0, i+1);
    let v = p.substr(i+1);
    let temp;
    if(isCorrect(u)) {
        temp = u + solve(v);
    }else{
        temp = "(" + solve(v) + ")";
        temp += u.slice(1, u.length-1).split("").map(e => {
            if(e==="(") return ")";
            else return "(";
        }).join("");
    }
    return temp;
}

function isCorrect(u) {
    let stack = [];
    for(let c of u){
        if(c==="(") stack.push("(");
        else {
            if(stack.length === 0) return false;
            stack.pop();
        }
    }
    return true;
}
console.log(solution(p));