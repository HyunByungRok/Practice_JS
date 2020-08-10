var str1 = "FRANCE";
var str2 = "french";

function solution(str1, str2) {
    str1 = str1.toLowerCase();
    str2 = str2.toLowerCase();

    let map1 = new Map(), map2 = new Map();
    let set = new Set();
    arrayToMap(map1, makeArray(str1), set);
    arrayToMap(map2, makeArray(str2), set);
    
    let inter = 0, union = 0;
    for(let k of set.keys()) {
        if(map1.has(k) && map2.has(k)) {
            inter += Math.min(map1.get(k), map2.get(k));
            union += Math.max(map1.get(k), map2.get(k));
        }else{
            union += map1.has(k) ? map1.get(k) : map2.get(k);
        }
    }

    return Math.floor((union === 0 ? 1 : inter/union)*65536);

}
function arrayToMap(map, arr, set) {
    arr.forEach(e => {
        set.add(e);
        if(map.has(e)) map.set(e, map.get(e)+1);
        else map.set(e, 1);
    });
}
function isOk(str) {
    let reg = /[a-z]{2}/;
    return reg.test(str);
}

function makeArray(str) {
    return str.split("").slice(0, -1).reduce((a, c, i) => {
        let temp = str.slice(i, i+2);
        if(isOk(temp)) a.push(temp);
        return a;
    }, []);
}
console.log(solution(str1, str2));