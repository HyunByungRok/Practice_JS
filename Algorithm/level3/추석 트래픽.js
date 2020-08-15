var lines = ["2016-09-15 01:00:04.001 2.0s", "2016-09-15 01:00:07.000 2s"];

function solution(lines) {
    let time = toTimeArr(lines);
    let max = Number.MIN_VALUE;
    for(let i=0; i<lines.length; i++) {
        let sTime = time[i][0], eTime = sTime+1;
        let sTime2 = time[i][1], eTime2  = sTime2+1;
        let count = 1, count2 = 1;
        for(let j=0; j<lines.length; j++){
            if(i===j) continue;
            if(sTime <= time[j][0] && time[j][0] < eTime) count++;
            else if(sTime <= time[j][1] && time[j][1] < eTime) count++;
            else if(time[j][0] <= sTime && eTime < time[j][1]) count++;
            if(sTime2 <= time[j][0] && time[j][0] < eTime2) count2++;
            else if(sTime2 <= time[j][1] && time[j][1] < eTime2) count2++;
            else if(time[j][0] <= sTime2 && eTime2 < time[j][1]) count2++;
        }
        max = Math.max(max, count, count2);
    }
    return max;
}

function toTimeArr(lines) {
    return lines.map(e => {
        let spl = e.split(" ");
        let time = toSecTime(spl[1].split(":"));
        return [time-(Number(spl[2].slice(0, -1)))+0.001, time];
    });
}

function toSecTime(time) {
    return Number(time[0])*3600 + Number(time[1])*60 + Number(time[2]);
}
console.log(solution(lines));