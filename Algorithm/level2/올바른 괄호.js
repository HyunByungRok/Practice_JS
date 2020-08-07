var s = "()()";

function solution(s) {
    let count = 0;
    return s.split("").every(e => {
        if(e === "(") {
            count++;
            return true;
        }
        else {
            if(count === 0){
                return false;
            }
            count--;
            return true;
        }
    }) && count===0;
}

console.log(solution(s));