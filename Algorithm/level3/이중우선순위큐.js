var operations = ["I 16", "I -5643", "D -1", "D 1", "D 1", "I 123", "D -1"];

function solution(operations) {
    let pq = [];

    operations.forEach(e => {
        let [operation, num] = e.split(" ");
        if(operation === "I"){
            pq.push(+num);
        }else{
            let idx = num === "1" ? getMaxIdx() : getMinIdx();
            pq.splice(idx, 1);
        }
    });

    return pq.length === 0 ? [0, 0] : [pq[getMaxIdx()], pq[getMinIdx()]];

    function getMaxIdx() {
        return pq.reduce((a, c, i) => {
            return c < pq[a] ? a : i;
        },0);
    }

    function getMinIdx() {
        return pq.reduce((a, c, i) => {
            return c > pq[a] ? a : i;
        },0);
    }
}

console.log(solution(operations));