var n = 3;
var words = ["tank", "kick", "know", "wheel", "land", "dream", "mother", "robot", "tank"];

function solution(n, words) {
    let set = new Set();
    let start = words[0][0]; 
    return words.reduce((a,c,i,arr) => {
        if(start!==c[0] ||set.has(c)) {
            arr.splice(1);
            return [i%n +1, Math.floor(i/n)+1];
        }
        set.add(c);
        start = c[c.length-1];
        return a;
    }, [0, 0]);
}

console.log(solution(n, words));