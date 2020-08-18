var triangle = [[7], [3, 8], [8, 1, 0], [2, 7, 4, 4], [4, 5, 2, 6, 5]];

function solution(triangle) {
    return triangle.reverse().slice(1).reduce((a, c) => {
        return c.map((e, i) => {
            return e + (a[i] < a[i+1] ? a[i+1] : a[i]);
        });
    }, triangle[0])[0];
}

console.log(solution(triangle));