var genres = ["classic", "pop", "classic", "classic", "pop"];
var plays = [500, 600, 150, 800, 2500];

function solution(genres, plays) {
    let map = new Map();
    
    let arr = convertArr(genres, plays, map);

    arr.sort(comp(map));

    return getAnswer(arr);
}

function comp(map) {
    return (a, b) => {
        if(a[0] === b[0]) {
            if(a[1] === b[1]) return a[2] - b[2];
            return b[1] - a[1];
        }
        return map.get(b[0]) - map.get(a[0]);
    };
}

function convertArr(genres, plays, map) {
    return genres.map((e,i) => {
        if(map.has(e)) map.set(e, map.get(e) + plays[i]);
        else map.set(e, plays[i]);
        return [e, plays[i], i];
    });
}

function getAnswer(arr) {
    let count = 0, key = "";
    return arr.reduce((a, c) => {
        let [genre, , idx] = c;
        if(key === genre && count <1){
            a.push(idx);
            count+=1;
        }else if(key !== genre){
            key = genre;
            count = 0;
            a.push(idx);
        }
        return a;
    }, []);
}

console.log(solution(genres, plays));