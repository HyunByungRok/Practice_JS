var people = [70, 50, 80, 50];
var limit = 100;
function solution(people, limit) {
    return countCombined(people.sort((a,b) => b-a), limit);
}

function countCombined(overLimit, limit) {
    let start = 0, end = overLimit.length-1, count=0;
    for(;start<=end;){
        if(overLimit[start] + overLimit[end] <= limit) {
            end--;
        }
        count++;
        start++;
    }
    return count;
}
console.log(solution(people, limit));