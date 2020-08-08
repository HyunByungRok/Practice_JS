var arr = [2,6,8,14];

function solution(arr) {
    return arr.slice(1).reduce((a, c) => {
        let [small, big] = [a, c].sort((a,b) => a-b);
        let gcd = getGcd(small, big);
        return big*small/gcd;
    },arr[0]);
}

//최대 공약수를 구하는 함수
function getGcd(small, big) {
    return small === 0 ? big : getGcd(big%small, small);
}

console.log(solution(arr));