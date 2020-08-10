var N = 8;
var A = 4;
var B = 5; 

function solution(N, A, B) {
    let count = 0;
    while(B!==A) {
        B = B%2 === 0 ? B/2 : (B+1)/2;
        A = A%2 === 0 ? A/2 : (A+1)/2;
        count++;
    }
    return count;
}

console.log(solution(N, A, B));