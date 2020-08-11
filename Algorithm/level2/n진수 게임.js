var n = 2;
var t = 4;
var m = 2;
var p = 1;

function solution(n, t, m, p) {
    let rtv = "", idx=0;
    p--;
    for(let i=0; ;i++) {
        i.toString(n).split("").forEach((e, i, arr) => {
            if(idx++%m === p) rtv+=e.toUpperCase();
        });
        if(rtv.length>=t) break;
    }
    return rtv.slice(0, t);
}

console.log(solution(n, t, m, p));