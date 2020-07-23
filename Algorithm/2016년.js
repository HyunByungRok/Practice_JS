var a = 5;
var b = 24;

function solution(a, b) {
    var answer = "";
    var day = ["SUN","MON","TUE","WED","THU","FRI","SAT"];
    var date = ["31", "29", "31", "30", "31", "30", "31", "31", "30", "31", "30", "31"];

    var sum = day.indexOf("FRI");
    for(let i=0; i<a-1; i++) sum+=(date[i]*1);
    sum+= (b-1); 

    answer = day[sum%day.length];
    return answer;
}

console.log(solution(a,b));