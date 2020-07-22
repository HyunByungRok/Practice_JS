var array = [1, 5, 2, 6, 3, 7, 4];
var commands = [[2, 5, 3], [4, 4, 1], [1, 7, 3]];

function solution(array, commands) {
    var answer = [];

    answer = commands.reduce((acc, cur)=> {
        acc.push(slice_sort(array, cur[0], cur[1])[cur[2]-1]);
        return acc;
    }, []);

    return answer;
}

function slice_sort(array, start, end) {
    return array
        .slice(start-1,  end).sort((a, b) => a-b);
}

console.log(solution(array, commands));