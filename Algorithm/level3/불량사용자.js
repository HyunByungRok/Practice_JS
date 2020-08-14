var user_id =["frodo", "fradi", "crodo", "abc123", "frodoc"];
var banned_id =["fr*d*", "abc1**"];

function solution(user_id, banned_id) {
    let bitVisited = Array.from(Array(1<<user_id.length), ()=>false);
    return combi(0, 0);

    function combi(depth, visited) {
        if(depth === banned_id.length) {
            return 1;
        }
        let sum =0;
        for(let i=0; i<user_id.length; i++) {
            let bit = 1<<i;
            if( (visited&(bit))>0 || bitVisited[visited|(bit)] || !isPossible(user_id[i], banned_id[depth]) ) continue;
            bitVisited[visited|(bit)] = true;
            sum += combi(depth+1, visited|(bit));
        }
        return sum;
    }

    function isPossible(user, ban) {
        if(user.length !== ban.length) return false;
        return ban.split("").every((e, i) => {
            if(e==="*") return true;
            return e === user[i];
        });
    }
}

console.log(solution(user_id, banned_id));