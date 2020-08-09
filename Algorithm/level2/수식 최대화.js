var expression = "100-200*300-500+20"	;

function solution(expression) {
    let operand = expression.replace(/\*|\+|-/g, ",").split(",").map(e => +e);
    let operator = expression.replace(/\d/g, "").split("");
    let priority = [], pric = ["+", "-", "*"];
    let checked = Array.from(Array(3), ()=> false);
    let max = Number.MIN_VALUE;
    permutation(0);
    return max;

    function permutation(depth) {
        if(depth === 3){
            max = Math.max(max, calculate());
            return;
        }
        for(let i=0; i<3; i++){
            if(checked[i]) continue;
            checked[i] = true;
            priority.push(i);
            permutation(depth+1);
            checked[i] = false;
            priority.pop();
        }
    }

    function calculate() {
        let ord = operand.slice();
        let otr = operator.slice();
        for(let i=0; i<3; i++) {
            let c = pric[priority[i]];
            for(let j=0; j<otr.length; j++){
                if(otr[j] === c) {
                    let num = calc(ord[j], ord[j+1], otr[j]);
                    otr.splice(j, 1);
                    ord.splice(j, 2, num);
                    j--;
                }
            }
        }
        return Math.abs(ord[0]);
    }

    function calc(num1, num2, operator) {
        return operator === "+" ? num1 + num2 : (operator === "-" ? num1 - num2 : num1*num2);
    }
}

console.log(solution(expression));