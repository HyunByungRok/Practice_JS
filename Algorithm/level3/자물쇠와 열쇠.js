var key = [[0, 0, 0], [1, 0, 0], [0, 1, 1]];
var lock = [[1, 1, 1], [1, 1, 0], [1, 0, 1]];

function solution(key, lock) {
    let total = howManyZero(lock);
    for(let i=0; i<4; i++){
        //4번 회전시키면서 볼거임
        key = rotate(key);
        for(let j=-lock.length; j<lock.length; j++){
            for(let k=-lock.length; k<lock.length; k++){
                if(total === isPossible(j, k, key, lock)) {
                    return true;
                }
            }
        }
    }
    return false;
}
function howManyZero(arr) {
    return arr.reduce((a, c) => {
        return a + c.reduce((a, c) => {
            if(c === 0) return a+1;
            return a;
        },0);
    },0);
}

function isPossible(stepy, stepx, key, lock) {
    let count = 0;
    for(let i=0; i<key.length; i++){
        if(i+stepy >= lock.length || i+stepy < 0) continue;
        for(let j=0; j<key.length; j++){
            if(j+stepx >= lock.length || j+stepx < 0) continue;
            if(key[i][j] === 0) continue;
            if(lock[i+stepy][j+stepx] === 1) return -1;
            count++;
        }
    }
    return count;
}

function rotate(arr) {
    let rtv = Array.from(Array(arr.length), ()=>Array(arr.length));
    for(let i=0; i<arr.length; i++) {
        for(let j=0; j<arr.length; j++){
            rtv[j][arr.length-1-i] = arr[i][j];
        }
    }
    return rtv;
}
console.log(solution(key, lock));