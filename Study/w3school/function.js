function fn(num){
    return 5/9 * (num-32);
}

console.log(fn(77))
console.log(fn)

var x = fn(12)
console.log(x)

function localVariable(){
    var carName = 5;
    console.log(carName);
}
localVariable();
//var 형이 함수형 scope 변수라서 외부에서 접근 불가
// console.log(carName);