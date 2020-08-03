var name = "JAN";

function solution(name) {
    let idx = 0, code, oppo, answer=0;
    name = name.split("");
    while(name.some(e => e!=="A")){   
        
        code = name[idx].charCodeAt() - "A".charCodeAt();
        name[idx] = "A";
        oppo = 26-code;
        answer += Math.min(code, oppo);
        
        for(let i=1; i<=name.length/2; i++){
            code = idx - i < 0 ? name.length + (idx-i) : idx-i;
            oppo = idx + i >= name.length ? (idx+i)%name.length : idx+i;
            if(name[oppo]!=="A"){
                answer += i;
                idx = oppo;
                break;
            }else if(name[code] !== "A") {
                answer += i;
                idx = code;
                break;
            }
        }
        
    }
    return answer;
}

console.log(solution(name));