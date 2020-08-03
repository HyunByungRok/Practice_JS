var number = "999";
var k = 2;

// function solution(number, k) {
//     for(let i=0; i<number.length-1;){
//         if(number[i] < number[i+1]){
//             number = removeChar(number, i);
//             i--;
//             k--;
//             if(k<=0) break;
//         }else i++;
//     }
//     number = number.slice(0, -k);
//     return number;
// }   
// function removeChar(string, idx) {
//     return string.slice(0, idx) + string.slice(idx+1);
// }

function solution(number, k) {
    let stack = [], i;
    for(i=0; i<number.length && k>0; i++){
        let num = number[i];
        while(k>0 && stack[stack.length-1] < num){
            stack.pop();
            k--;
        }
        stack.push(num);
    }
    if(k>0) stack.splice(stack.length-k);
    return stack.join("") + number.slice(i);
}

console.log(solution(number, k));