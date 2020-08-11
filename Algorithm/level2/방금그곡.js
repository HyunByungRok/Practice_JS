var m = "ABC#";
var musicinfos = ["12:00,12:15,HELLO,C#DEFGAB", "13:00,13:05,WORLD,ABCDEF"];

function solution(m, musicinfos) {
    m = changeSharp(m);
    return processed(musicinfos).reduce((a, c, i, arr) => {
        let changed = changeSharp(c[2]);
        let temp = changed.repeat(Math.floor(c[0]/changed.length));
        temp += changed.slice(0, c[0]%changed.length);
        if((temp.indexOf(m))!=-1) {
            arr.splice(0);
            return c[1];
        }
        return a;
    },"(None)");
}
function changeSharp(str) {
    return str.split("").reduce((a, c) => {
        if(c==="#"){
            a.push(a.pop().toLowerCase());
        }else a.push(c);
        return a;
    },[]).join("");
}
function processed(musicinfos) {
    return musicinfos.map((e, i) => {
        let spl = e.split(",");
        return [time(spl[0], spl[1]), spl[2], spl[3], i];
    }).sort(compare);
}
function compare(a, b) {
    if(b[0] === a[0]) return a[3]-b[3];
    return b[0]-a[0];
}
function time(time1, time2) {
    time1 = time1.split(":").map(e => Number(e));
    time2 = time2.split(":").map(e => Number(e));
    return (time2[0]-time1[0])*60 + time2[1]-time1[1];
}
console.log(solution(m, musicinfos));