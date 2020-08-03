var numbers = [0, 0];

function solution(numbers) {
    return numbers.sort(comp).reduce(add, "");
    
}

function comp(a, b) {
    a = String(a); b = String(b);
    return a+b > b+a ? -1 : 1;
}

function add(a, b) {
    if(a==="0" && b===0) return a;
    return a + b;
}


console.log(solution(numbers));