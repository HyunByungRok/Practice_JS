var k = 10;
var room_number = [1,3,4,1,3,1];

function solution(k, room_number) {
    let map = new Map();
    return room_number.map(e => {
        if(!map.has(e)) {
            map.set(e, find(e+1));
            return e;
        }else {
            let num = find(e);
            map.set(num, find(num+1));
            return num;
        }
    });
    function find(num) {
        if(map.has(num)) {
            map.set(num, find(map.get(num)));
            return map.get(num);
        }
        return num;
    }
}



console.log(solution(k, room_number));