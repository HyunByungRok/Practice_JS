var relation = [["100","ryan","music","2"],["200","apeach","math","2"],["300","tube","computer","3"],["400","con","computer","4"],["500","muzi","music","3"],["600","apeach","music","2"]];

function solution(relation) {
    let keys = [];
    for(let i=1; i<=(1<<relation[0].length); i++){
        if(isMinimal(keys, i) || !isUnique(i, relation)) continue;
        keys.push(i);
    }
    return keys.length;
    
}

function isUnique(idx, relation) {
    let set = new Set();
    return relation.every(e => {
        let hash = getHash(e, idx);
        if(set.has(hash)) return false;
        set.add(hash);
        return true;
    });
}

function isMinimal(keys, idx) {
    return keys.some(e => (e&idx)===e);
}

function getHash(relation, idx) {
    return relation.reduce((a, c, i) => {
        if((idx&(1<<i)) === 0) return a;
        return a + c;
    },"");
}
console.log(solution(relation));