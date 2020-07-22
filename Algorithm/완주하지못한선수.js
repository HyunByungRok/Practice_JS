var participant = ["marina", "josipa", "nikola", "vinko", "filipa"];
var completion = ["josipa", "filipa", "marina", "nikola"];

function solution(participant, completion) {
    var answer = '';
    var map = new Map();
    completion.forEach(e => {
        if(!map.has(e)){
            map.set(e, 1);
        }else{
            map.set(e, map.get(e)+1);
        }
    });

    participant.forEach(e=> {
        if(map.has(e)){
            let num = map.get(e);
            if(num===1) map.delete(e);
            else map.set(e, num-1);
        }else {
            answer = e;
        }
    })

    return answer;
}

console.log(solution(participant, completion))