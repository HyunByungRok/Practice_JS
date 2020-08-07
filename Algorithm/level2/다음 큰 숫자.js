var n = 78;

function solution(n) {
    let one = howManyOne(n);
    for(var num = n+1; ;num++){
        if(howManyOne(num) === one) break;
    }
    return num;
}

function howManyOne(num) {
    return num.toString(2).replace(/0/g, "").length;
}

console.log(solution(n));