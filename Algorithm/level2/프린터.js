var priorities = [1, 1, 9, 1, 1, 1];
var location = 0;

function solution(priorities, location){
    let array = priorities.map((e,i)=> [e, i]);
    for(var i=1; ;i++){
        let max = array[0][0], maxIdx=0;
        maxIdx = array.reduce((a,c,i) => {
            if(max < c[0]) {
                max = c[0];
                return i;
            }
            return a;
        },0);
        if(array[maxIdx][1] === location) break;
        for(let j=0; j<maxIdx; j++) array.push(array.shift());
        array.shift();
        // array.splice(maxIdx,1);
        // Array.prototype.push.apply(array, array.splice(0, maxIdx));
    }
    return i;
}


console.log(solution(priorities, location));