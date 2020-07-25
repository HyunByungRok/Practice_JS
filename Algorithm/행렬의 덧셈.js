var arr1 =[[1,2],[2,3]];	
var arr2 = 	[[3,4],[5,6]];

console.log(solution(arr1, arr2));

function solution(arr1, arr2) {
    return arr1.map((e, i) => e.map((e, j) => e+arr2[i][j]));
}
