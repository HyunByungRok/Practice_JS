var brown = 10;
var yellow = 2;

function solution(brown, yellow) {
    let height, width;
    for(let i =1, total=brown+yellow; i<brown; i++){
        if((total%i) !== 0) continue;
        height = i;
        width = total/i;
        if((height-2)*(width-2) === yellow){
            return [width, height];
        } 

    }
}

console.log(solution(brown, yellow));