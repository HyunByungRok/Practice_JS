var n = 4;
var costs = [[0,1,1],[0,2,2],[1,2,5],[1,3,1],[2,3,8]];

function solution(n, costs) {
    
    let parent = makeSet(n);
    let count = 0;
    return costs.sort(comp).reduce((a, c, i, arr) => {
        if(!union(c[0], c[1], parent)) return a;
        if(++count === n-1) arr.splice(0);
        return a+c[2];
    }, 0);
}

function comp(a, b) {
    return a[2] - b[2];
}

function makeSet(n) {
    return Array.from(Array(n), ()=>0).map((e, i) => i);
}

function union(y, x, parent) {
    y = find(y, parent);
    x = find(x, parent);
    if(y !== x) {
        parent[y] = x;
        return true;
    }
    return false;
}

function find(num, parent) {
    if(num === parent[num]) return num;
    return parent[num] = find(parent[num], parent);
}



console.log(solution(n, costs));