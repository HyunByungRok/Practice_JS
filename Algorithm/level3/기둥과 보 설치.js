var build_frame = [[0,0,0,1],[2,0,0,1],[4,0,0,1],[0,1,1,1],[1,1,1,1],[2,1,1,1],[3,1,1,1],[2,0,0,0],[1,1,1,0],[2,2,0,1]];	
var n = 5;

function solution(n, build_frame) {
    let column = Array.from(Array(n+1), ()=>Array.from(Array(n), ()=>false));
    let beam = Array.from(Array(n+1), ()=>Array.from(Array(n), ()=>false));

    return build_frame.reduce((acc, cur) => {
        let [x, y, a, b] = cur;
        if(b === 0){
            //삭제
            if(remove(column, beam, x, y, a)){
                acc.splice(acc.findIndex((c) => c[0]===x && c[1]===y && c[2]===a), 1);
            }else{
                if(a === 0) column[y][x] = true;
                else beam[y][x] = true;
            }
        }else {
            //설치
            if(insert(column, beam, x, y, a)) {
                if(a === 0) column[y][x] = true;
                else beam[y][x] = true;
                acc.push([x, y, a]);
            }
        }
        return acc;
    }, Array()).sort(comp);

}

function comp(a, b) {
    if(a[0] === b[0]) {
        if(a[1] === b[1]) return a[2] - b[2];
        return a[1] - b[1];
    }
    return a[0] - b[0];
}

//a => 0-기둥 / 1-보
function insert(column, beam, x, y, a) {
    if(a === 0) {
        return y === 0 || column[y-1][x] || beam[y][x] || beam[y][x-1];
    }else {
        return column[y-1][x] || column[y-1][x+1] || (beam[y][x-1] && beam[y][x+1]);
    }
}

function remove(column, beam, x, y, a) {
    if(a === 0) column[y][x] = false;
    else beam[y][x] = false;
    for(let i=-1; i<=1; i++){
        for(let j=-1; j<=1; j++){
            if(x+i < 0 || y+j <0 || x+i>=column.length || y+j>=column.length) continue;
            if(column[y+j][x+i] && !insert(column, beam, x+i, y+j, 0)) return false;
            if(beam[y+j][x+i] && !insert(column, beam, x+i, y+j, 1)) return false;
        }
    }
    return true;
}

console.log(solution(n, build_frame));