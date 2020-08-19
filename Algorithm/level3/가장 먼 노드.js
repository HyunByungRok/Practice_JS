var n = 6;
var vertex = [[3, 6], [4, 3], [3, 2], [1, 3], [1, 2], [2, 4], [5, 2]];

function solution(n, vertex) {
    let graph = Array.from(Array(n), ()=>Array());
    vertex.forEach(e => {
        graph[e[0]-1].push(e[1]-1);
        graph[e[1]-1].push(e[0]-1);
    });

    let visited = Array.from(Array(n), () => false);

    return bfs(graph, visited);
}

function bfs(graph, visited) {
    let q = [], qSize, count, total=1;
    q.push(0);
    visited[0] = true;

    while(q.length!==0) {
        qSize = q.length, count=0;
        for(let qs=0; qs<qSize; qs++){
            let temp = q.shift();
            graph[temp].forEach(e => {
                if(visited[e]) return;
                visited[e] = true;
                q.push(e);
                count++; total++;
            });
        }
        if(total==graph.length) break;
    }
    return count;
}

console.log(solution(n, vertex));