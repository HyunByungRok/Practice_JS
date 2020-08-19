var begin = "hit";
var target = "cog";
var words = ["hot", "dot", "dog", "lot", "log"];

function solution(begin, target, words) {
    if(words.indexOf(target) === -1) return 0;
    let visited = Array.from(Array(words.length), () => false);
    let rtv = dfs(0, begin, target, visited, words);
    return rtv!==100 ? rtv : 0;
}
function dfs(depth, now, target, visited, words) {
    if(now === target) return depth;
    let num = 100;
    for(let i=0; i<words.length; i++){
        if(visited[i] || !isPossible(now, words[i])) continue;
        visited[i] = true;
        num = Math.min(num, dfs(depth+1, words[i], target, visited, words));
        visited[i] = false;
    }
    return num;
}

function isPossible(word, comp) {
    return word.split("").reduce((a, c, i) => {
        return c!==comp[i] ? a+1 : a;
    },0) === 1;
}

console.log(solution(begin, target, words));