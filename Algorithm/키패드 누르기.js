var numbers = [1, 3, 4, 5, 8, 2, 1, 4, 5, 9, 5];
var hand = "right";

function solution(numbers, hand) {
    var answer = "";
    var leftHand = [3, 1];
    var rightHand = [3, 1];
    let num, disToL, disToR;
    answer = numbers.reduce((acc, cur) => {
        if(cur === 1 || cur === 4 || cur === 7){
            leftHand[0] = cur === 1 ? 0 : cur === 4 ? 1 : 2;
            leftHand[1] = 1;
            return acc+"L";
        }else if(cur === 3 || cur === 6 || cur ===9){
            rightHand[0] = cur ===3 ? 0 : cur === 6 ? 1 : 2;
            rightHand[1] = 1;
            return acc+"R";
        }else{
            num = cur === 2 ? 0 : cur === 5 ? 1 : cur ===8 ? 2 : 3;
            disToL = getDistance(leftHand, num), disToR = getDistance(rightHand, num);
            if(disToR < disToL){
                rightHand = [num, 0];
                return acc+"R";
            }else if(disToR > disToL){
                leftHand = [num, 0];
                return acc+"L";
            }else{
                if(hand==="right"){
                    rightHand = [num, 0];
                }else leftHand = [num, 0];
                return acc + (hand === "right" ? "R" : "L");
            }
        }
    },"");

    return answer;
}
function getDistance(from, num){
    return Math.abs(from[0]-num) + from[1];
}

console.log(solution(numbers, hand));