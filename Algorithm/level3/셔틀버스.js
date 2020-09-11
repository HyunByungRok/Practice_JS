var n = 3;
var t = 10;
var m = 2;
var timetable = ["09:00", "09:00", "09:00", "09:00", "09:00", "09:20", "09:30", "09:30"];

function solution(n, t, m, timetable) {
    let minutes = timetable.map(e => HHMMtomin(e)).sort((a, b) => a-b);
    let start = HHMMtomin("09:00")-t;
    let arr = Array.from(Array(n), ()=>start+=t), idx=0, count;
    for(let i=0; i<n; i++) {
        count=0;
        for(; idx<minutes.length; idx++) {
            if(minutes[idx]<=arr[i]) {
                if(++count==m) {
                    if(i!==n-1)
                        idx++;
                    break;
                }
            }else {
                break;
            }
        }
        console.log(count);
        console.log(idx);
    }
    console.log(idx);
    if(count < m) {
        start = arr[n-1];
    }else{
        start = minutes[idx]-1;
    }



    return mintoHHMM(start);
} 

function HHMMtomin(str) {
    let spl = str.split(":");
    return +spl[0]*60 + +spl[1];
}
function mintoHHMM(integer) {
    return (Math.floor(integer/60) < 10 ? "0" : "") + Math.floor(integer/60) + ":" + (integer%60 < 10 ? "0" : "") + integer%60;
}

console.log(solution(n, t, m, timetable));