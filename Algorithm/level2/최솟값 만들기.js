var A = [1,4,2];
var B = [5,4,4];

function solution(A, B) {
    A.sort((a,b) => a-b);
    B.sort((a,b) => b-a);
    return A.reduce((a, c, i) => {
        return a + c*B[i];
    },0);
}

console.log(solution(A, B));