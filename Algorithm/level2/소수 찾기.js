var numbers = "00002";


function solution(numbers) {
    let visited = Array(numbers.length).fill(false);
    let selected = Array(numbers.length).fill(null);
    let set = new Set();
    permutation(0, numbers, visited, selected);

    function permutation(depth, numbers, visited, selected){
        if(depth<=numbers.length){
            let num = Number(selected.filter(e=> e!==null).join(""));
            if(!set.has(num) && isPrime(num)) {
                set.add(num);
            }
            if(depth === numbers.length) return;
        }
    
        for(let i=0; i<numbers.length; i++){
            if(visited[i]) continue;
            visited[i] = true;
            selected[depth] = numbers[i];
            permutation(depth+1, numbers, visited, selected);
            selected[depth] = null;
            visited[i] = false;
        }
    }
    
    function isPrime(num) {
        if(num<2) return false;
        for(let i=2; i<=Math.sqrt(num); i++) if(num%i===0) return false;
        return true;
    }

    return set.size;
}



console.log(solution(numbers));