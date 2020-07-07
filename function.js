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
// console.log(carName);