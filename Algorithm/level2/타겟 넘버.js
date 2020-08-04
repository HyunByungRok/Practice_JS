var numbers = [1,1,1,1,1];
var target = 3;

function solution(numbers, target) {
    
    function dfs(depth, value) {
        if(depth===numbers.length){
            if(value === target) return 1;
            return 0;
        }
        let a = dfs(depth+1, value+numbers[depth]);
        a += dfs(depth+1, value-numbers[depth]);
        return a;
    }
    return dfs(0, 0);
}

console.log(solution(numbers, target));