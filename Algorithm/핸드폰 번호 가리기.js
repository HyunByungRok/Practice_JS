var phone_number = "01033334444";

function solution(phone_number) {
    return phone_number.split("").reduce((a,e,i) => a+(i<phone_number.length-4 ? "*" : e),"");
}

console.log(solution(phone_number));