var n = 3;
var computers = [[1, 1, 0], [1, 1, 0], [0, 0, 1]];

function solution(n, computers) {
    let visited = Array.from(Array(n), () => false);
    return computers.reduce((a,c,i) => {
        if(visited[i]) return a;
        visited[i] = true;
        dfs(i, visited, computers);
        return a+1;
    }, 0);
}

function dfs(cur, visited, computers) {
    computers[cur].forEach((e, i) => {
        if(e===0 || visited[i]) return;
        visited[i] = true;
        dfs(i, visited, computers);
    });
}

console.log(solution(n, computers));