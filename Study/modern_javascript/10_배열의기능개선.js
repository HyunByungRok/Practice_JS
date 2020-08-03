//10.1 배열만들기
//기존의 Array생성자와 배열 리터럴 문법은 초기화가 매우 제한적이었다. 이를 개선하고자 ECMAScript6에선 Array.of()와 Array.from()메서드가 추가되었다.

//10.1.1 Array.of() 메서드
//Array생성자로 배열을 만들었을때 전달된 인자의 타입과 개수에 따라 다르게 동작한다.
print_array(new Array(2));
print_array(new Array("2"));
print_array(new Array(2, 1));
print_array(new Array(1,"2"));

function print_array(arr){
    console.log(arr.length);
    for(let e of arr) console.log(e);
    console.log("#############################");
}
//위와같이 인자가 숫자 한개가 전달되면 배열의 length프로퍼티 값이 되고 숫자외에 데이터나 2개이상의 데이터가 전달되면 배열의 요소가 된다.
//데이터 타입을 항상 알 수 없을때 매우 위험하다. 그래서 ECMAScript6에서 Array.of()가 도입되었다.
//Array.of()는 생성자와 똑같이 사용되지만 어떤 데이터 타입이 몇개가 들어오든 항상 요소로 사용되어 배열을 생성한다.
print_array(Array.of(2));
print_array(Array.of("2"));
//배열 리터럴을 사용할때와 같은 동작을 하는 것 같지만 함수에 배열 생성자를 인자로 전달할 필요가 있을 때 사용하는 것이 좋다.


//10.1.2 Array.from() 메서드
//배열이 아닌 객체를 배열로 변환하는 메서드 - 유사배열(ex arguments)을 배열로 사용하기 위해서는 배열로 변환해야 한다.

function makeArray(arrayLike){
    //기존코드
    var result = [];
    for(var i=0; i<arrayLike.length; i++) result.push(arrayLike[i]);
    return result;
    //네이티브 메서드인 slice()를 호출하는 방법
    return Array.prototype.slice.call(arrayLike);
    //Array.form() 사용 - 위의 slice와 같은 동작이지만 훨씬 직관적이고 간단해졌다. 굳이 메서드로 뺄필요도 없다.
    return Array.from(arrayLike);
}

//매핑 변환 - Array.from() 의 두 번째 인자로 함수를 전달하여 변환 작업을 할 수 있다.
function trans(){
    return Array.from(arguments, v => v**2);
}
console.log(trans(1,2,3));
//3번째 인자로 객체를 전달하면 매핑함수의 this 값을 나타낸다.
let helper = {
    add(v){
        return v+this.diff;
    }
};
let data = {diff:3};
function translate(){
    return Array.from(arguments, helper.add, data);
}
console.log(translate(1,2,3));

// iterator -> 배열로
function* name() {
    yield 1;
    yield 2;
    yield 3;
}
let a = name();
console.log(Array.from(a, v => v**2));

//10.2 배열의 새로운 메서드
//find(), findIndex(), fill(), copyWithin()

//10.2.1 find()와 findIndex()메서드 - 특정조건에 맞는 배열 요소를 찾을때 유용
//기존의 특정값을 찾는 indexOf와 lastIndexOf의 아쉬운점을 해결
let numbers = [22,33,11,44,55];
console.log(numbers.find(v => v>32));
console.log(numbers.findIndex(v => v>32));

//10.2.2 fill()
//특정 값으로 배열을 채운다. 인덱스를 지정할 수 있다. 아래는 초기 0으로 초기화되어있다고 가정
Array().fill(1); //(value) [1,1,1,1,1,1]
Array().fill(1,2); //(value, startIndex) [0,0,1,1,1,1]
Array().fill(1,1,3); //(value, startIndex, endIndex) [0, 1, 1, 0, 0]

//10.2.3 copyWithin()
//배열내의 요소값을 복사하는 메서드
//(start, copy) start에 copy에서 시작하는 값을 복사해나감
//(start, copy, stop) start에 copy에서 시작하는 값을 복사하는데 stop에서 정지 자기는 제외
    