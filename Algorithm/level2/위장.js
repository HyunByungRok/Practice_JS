var clothes = [["yellow_hat", "headgear"], ["blue_sunglasses", "eyewear"], ["green_turban", "headgear"]];

function solution(clothes) {
    let map = new Map();
    clothes.forEach(([name, kind]) => {
        if(map.has(kind)) map.set(kind, map.get(kind)+1);
        else map.set(kind, 1);
    });
    let value =1;
    for(let v of map.values()){
        value*=(v+1);
    }
    return value-1;
}

console.log(solution(clothes));