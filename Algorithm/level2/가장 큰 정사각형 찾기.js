var board = [[0,0,1,1],[1,1,1,1]];

function solution(board){
    let max =0;
    for(let t of board[0]) max = Math.max(max, t);
    for(let i=0; i<board.length; i++) max = Math.max(max, board[i][0]);
    for(let i=1; i<board.length; i++){
        for(let j=1; j<board[i].length; j++){
            if(board[i][j]===0) continue;
            board[i][j] = Math.min(board[i-1][j-1], board[i-1][j], board[i][j-1])+1;
            max = Math.max(max, board[i][j]);
        }
    }
    return max*max;
}



console.log(solution(board));