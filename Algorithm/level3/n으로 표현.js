var N = 5;
var number = 12;

function solution(N, number) {
    let rtv = -1;
    let map = new Map();
    dfs(0, 0);
    return rtv;

    function dfs(depth, value) {
        if(map.get(value)<=depth) return;
        map.set(value, depth);
        if(value === number) {
            if(rtv === -1) rtv = depth;
            else rtv = Math.min(depth, rtv);
            return;
        }
        let num = 0;
        for(let i=0; i<8-depth; i++){
            num+=N*(10**i);
            dfs(depth+1+i, value+num);
            dfs(depth+1+i, value-num);
            dfs(depth+1+i, value*num);
            dfs(depth+1+i, value/num);
        }
    }
}

console.log(solution(N, number));