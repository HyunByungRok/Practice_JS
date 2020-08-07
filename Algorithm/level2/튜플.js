var s = "{{1,2,3},{2,1},{1,2,4,3},{2}}";

function solution(s) {
    s = s.substring(2, s.length-2).split("},{");
    return Array.from(s.sort((a, b) => a.length - b.length).reduce((acc, cur) => {
        cur.split(",").forEach(element => {
            if(!acc.has(+element)) acc.add(+element);
        });
        return acc;
    }, new Set()));
}

console.log(solution(s));