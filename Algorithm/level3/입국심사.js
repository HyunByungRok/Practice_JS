var n = 6;
var times = [7, 10];

function solution(n, times) {
    return binarySearch(Math.max(...times), times, n);
}

function binarySearch(max, times, n) {
    let left = 0;
    let right = max*n;
    while(left < right) {
        let middle = Math.floor((left+right)/2);
        if(getTotal(middle, times) < n) left = middle+1;
        else right = middle;
    }
    return left;
}

function getTotal(num, times) {
    return times.reduce((a, c) => {
        return a + Math.floor(num/c);
    }, 0);
}
console.log(solution(n, times));