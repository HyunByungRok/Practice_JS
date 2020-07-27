var progress = [93, 30, 55, 60];
var speeds = [50, 30, 5, 1];

function solution(progress, speeds){
    let endDate = getEndDate(progress, speeds);
    let curMax=endDate[0], cnt=0;
    return endDate.reduce((acc, cur) => {
        if(curMax >= cur){
            cnt++;
        }else{
            acc.push(cnt);
            cnt=1;
            curMax=cur;
        }
        return acc;
    },[]).concat(cnt);
}
function getEndDate(progress, speeds){
    return progress.map((e, i) => {
        return Math.ceil((100-e)/speeds[i]);
    });
}

console.log(solution(progress, speeds));