var citations = [0, 1, 3, 5, 5, 5, 5, 5, 5, 6];

function solution(citations) {
    return citations.sort((a, b) => b-a).reduce((acc, cur, i, arr) => {
        if(i+1>cur){
            arr.splice(1);
            return i;
        }
        return acc;
    },citations.length);
}

console.log(solution(citations));