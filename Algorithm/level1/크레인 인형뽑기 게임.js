var board = [[0,0,0,0,0],[0,0,1,0,3],[0,2,5,0,1],[4,2,4,4,2],[3,5,1,3,1]];
var moves = [1,5,3,5,1,2,1,4];


function solution(board, moves) {
    var answer = 0

    var moved = []

    for(let move of moves) {
        var catched = findBlock(move-1, board)
        if(catched===0) continue;
        if(moved[moved.length-1]===undefined) moved.push(catched)
        else {
            if(moved[moved.length-1]===catched) {
                moved.pop()
                answer+=2
                continue
            }
            moved.push(catched)
        }
    }

    return answer;
}

function findBlock(move, board) {
    let rtv=0;
    for(let i=0; i<board.length; i++) {
        var num = board[i][move]
        if(num===0) continue;
        board[i][move] = 0
        rtv = num
        break;
    }
    return rtv
}

console.log(solution(board, moves))