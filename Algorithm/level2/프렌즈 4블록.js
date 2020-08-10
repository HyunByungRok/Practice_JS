var m = 6;
var n = 6;
var board = ["TTTANT", "RRFACC", "RRRFCC", "TRRRAA", "TTMMMF", "TMMTTJ"];

function solution(m, n, board) {
    board = board.map(e => e.split(""));
    let count = 0, possible;
    while((possible = getPossiblePoint()).length >0) {
        let temp = possible.reduce((a, c) => {
            for(let i=0; i<2; i++){
                for(let j=0; j<2; j++){
                    if(board[c[0]+i][c[1]+j] === ".") continue;
                    a++;
                    board[c[0]+i][c[1]+j] =".";
                }
            }
            return a;
        }, 0);
        if(temp === 0) break;
        count+=temp;
        dropBlock();
    }
    return count;
    
    function dropBlock() {
        for(let i=0; i<n; i++) {
            let stack = [];
            for(let j=0; j<m; j++){
                if(board[j][i] !== ".") stack.push(board[j][i]);
            }
            for(let j=m-1; j>=0; j--){
                if(stack.length===0) board[j][i]=".";
                else board[j][i] = stack.pop();
            }
        }
    }
    function getPossiblePoint() {
        let rtv = [];
        for(let i=0; i<m-1; i++){
            for(let j=0; j<n-1; j++){
                if(board[i][j] !== "." &&is4block(i, j)) rtv.push([i, j]);
            }
        }
        return rtv;
    }
    function is4block(y, x) {
        return board[y][x] === board[y][x+1] && board[y][x+1] === board[y+1][x] && board[y+1][x] === board[y+1][x+1];
    }
}



console.log(solution(m, n, board));