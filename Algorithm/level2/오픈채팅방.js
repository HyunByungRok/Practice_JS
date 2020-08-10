var record = 	["Enter uid1234 Muzi", "Enter uid4567 Prodo", "Leave uid1234", "Enter uid1234 Prodo", "Change uid4567 Ryan"];

function solution(record) {
    var map = new Map();
    readRecord(map, record);
    return printRecord(map, record);
}

function readRecord(map, record) {
    record.forEach(e=> {
        let strings = e.split(" ");
        if(strings[0] === "Leave") return;
        map.set(strings[1], strings[2]);
    });
}

function printRecord(map, record) {
    return record.reduce((a, c) => {
        let strings = c.split(" ");
        if(strings[0] === "Change") return a;
        a.push(map.get(strings[1]) + (strings[0] === "Enter" ? "님이 들어왔습니다." : "님이 나갔습니다."));
        return a;
    },[]);
}

console.log(solution(record));