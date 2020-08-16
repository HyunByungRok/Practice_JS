var stones = [2, 4, 5, 3, 2, 1, 4, 2, 5, 1];
var k = 3;
function solution(stones, k) {
    let left = 0;
    let right = 200000000;
    

    while(left < right) {
        let middle = Number.parseInt((left+right)/2);
        if(isPossible(stones, middle, k)){
            left = middle + 1;
        }else right = middle;
    }

    return left-1;
}
function isPossible(stones, middle, k) {
    let count = 0;
    return stones.every(e => {
        count = e < middle ? count+1 : 0;
        if(k <= count) return false;
        return true;
    });
}
console.log(solution(stones, k));