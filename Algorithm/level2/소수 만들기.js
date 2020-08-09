var nums = [1,2,7,6,4];

function solution(nums) {
    let selectedNum = [];
    let count =0;
    permutation(0, 0);

    function permutation(depth, idx){
        if(depth===3) {
            if(isPrime(combineNum(selectedNum))) count++;
            return;
        }
        for(let i=idx; i<nums.length; i++){
            selectedNum[depth] = nums[i];
            permutation(depth+1, i+1);
        }
    }
    return count;
}

function combineNum(selectedNum) {
    return selectedNum.reduce((a, c) => a+c,0);
}
function isPrime(num) {
    if(num===1) return true;
    for(let i=2; i<=num/2; i++) {
        if(num%i === 0) return false;
    }
    return true;
}

console.log(solution(nums));