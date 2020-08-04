var people = [70, 50, 80, 50];
var limit = 100;
function solution(people, limit) {
    let count=0;
    people.sort((a,b) => b-a);
    for(let start=0, end = people.length-1;start<=end;count++, start++){
        if(people[start] + people[end] <= limit) {
            end--;
        }
    }
    return count;
}
console.log(solution(people, limit));