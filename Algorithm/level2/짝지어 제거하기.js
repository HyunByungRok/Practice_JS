var s = "baabaa";

function solution(s) {
    return s.split("").reduce((a, c) => {
        if(a.isEmpty() || a.top() !== c) a.push(c);
        else a.pop();
        return a;
    },new Stack()).size() === 0 ? 1 : 0;
}

function Stack() {
    this.stack = [];
    this.isEmpty = function (){
        return this.stack.length === 0;
    };
    this.top = function() {
        if(this.isEmpty()) {
            console.error("stack is empty!!");
            return;
        }
        return this.stack[this.stack.length-1];
    };
    this.pop = function (){
        if(this.isEmpty()) {
            console.error("stack is empty!!");
            return;
        }
        return this.stack.pop();
    };
    this.push = function (data){
        this.stack.push(data);
        return this.stack;
    };
    this.size = function() {
        return this.stack.length;
    };
}
console.log(solution(s));