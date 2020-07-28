var heights = [6,9,5,7,4];

function solution(heights){
    let stack=[], num;
    heights = heights.map((e,i)=>[e, i+1]);
    return heights.reduce((a,e)=>{
        num = e[0];
        while(stack.length!=0&&stack[stack.length-1][0]<=num){
            stack.pop();
        }
        if(stack.length==0) a.push(0);
        else if(stack[stack.length-1][0]>num) a.push(stack[stack.length-1][1]);
        stack.push(e);
        return a;
    },[]);
}

console.log(solution(heights));