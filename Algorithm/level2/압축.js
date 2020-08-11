var msg = "KAKAO";

function solution(msg) {
    let index = [0];
    for(let i=0; i<26; i++) index.push(String.fromCharCode("A".charCodeAt()+i));
    let rtv = [];
    let r = msg.split("").slice(1).reduce((a, c) => {
        let temp = a+c;
        if(index.indexOf(temp) !== -1){
            //색인에 포함되어 있을 경우 한턴 더본다.
            return temp;
        }else{
            //없는 경우 그 전까지 값으로 출력해준 뒤 문자열 변경
            rtv.push(index.indexOf(a));
            index.push(temp);
            return c;
        }
    }, msg[0]);
    rtv.push(index.indexOf(r));
    return rtv;
}

console.log(solution(msg));