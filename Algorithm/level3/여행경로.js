var tickets = 	[["ICN", "A"], ["ICN", "B"], ["B", "ICN"]];

function solution(tickets) {
    tickets.sort((a,b) => a[1]<b[1] ? -1 : 1);
    let visited = Array.from(Array(tickets.length), ()=>false);
    let arr = ["ICN"];
    dfs(arr, visited, tickets, 0);
    return arr;
}

function dfs(arr, visited, tickets, depth) {
    if(depth === tickets.length){
        return;
    }
    for(let i=0; i<tickets.length; i++) {
        if(visited[i] || tickets[i][0] !== arr[arr.length-1]) continue;
        visited[i] = true;
        arr.push(tickets[i][1]);
        dfs(arr, visited, tickets, depth+1);
        if(arr.length === tickets.length+1) return;
        visited[i] = false;
        arr.pop();
    }
}

console.log(solution(tickets));