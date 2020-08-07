var arr1 = [[1, 4], [3, 2], [4, 1]];
var arr2 = [[3, 3], [3, 3]];

function solution(arr1, arr2) {
    let answer = [];
    for(let i=0; i<arr1.length; i++){
        let temp = [];
        for(let k=0; k<arr2[0].length; k++){
            let value = 0;
            for(let j=0; j<arr1[i].length; j++){
                value += arr1[i][j]*arr2[j][k];
            }
            temp.push(value);
        }
        answer.push(temp);
    }
    return answer;
}

console.log(solution(arr1, arr2));