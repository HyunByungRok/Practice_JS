var x = "John";
var y = 'Doe';
//you can use single or double quotes

var z = "he is called 'John'";
// 스트링을 싸고 있는 따움표와 매칭되지 않게 사용하여야 한다.

var txt = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
console.log(txt.length)
//String.length 는 글자의 길이 반환

//var x = "We are the so-called "Vikings" from the north.";  - 잘못된 문법
var x = "We are the so-called \"Vikings\" from the north.";
console.log(x)
//백슬래시를 사용하면 백슬래시 뒤에 오는 특수문자들을 그대로 출력할 수 있다.
//ex) \" \' \\

//6개의 다른 경우
console.log(" ㅇㅇ \bㅇㅇ ㅇㅇ\fㅇㅇ ㅇㅇ\nㅇㅇ ㅇㅇ\rㅠㅠ ㅇㅇ\tㅍㅍ ㅇㅇ\vㅇㅇ");
// \b - 백스페이스 \f - Form feed 먼말인지 모르겠음 \n - 새로운줄 \r - 줄의 처음 위치로 \t 수평 탭 \v 수직 탭

var x = "Too \
Long"
console.log(x);
//너무 긴 글씨는 보기 쉽게 줄바꿈으로 표현하면 좋은데 이 때는 문자열 안에 역슬래시를 사용한 후 줄바꿈한다.
//일부 브라우저에서 허용이 안되어서 사용이 권장되지 않은므로 밑의 방법을

var x = "Too " + "Long"
console.log(x);

var x = "John";
var y = new String("John");
console.log(typeof(x) + ' ' + typeof(y));
//String을 Object로도 사용가능하다. 하지만 String을 Object로 생성하는 것은 실행속도를 늦츠무로 사용하지않는 것이 좋다.
console.log(x==y);
console.log(x===y);
// 이 경우 ==는 value만 비교하므로 true가 반환되지만 ===는 type과 value를 둘 다 비교하므로 false가 반환된다.
var x = new String("John");
console.log(x==y)
console.log(x===y);
// Object는 비교를 할 수 없기때문에 ==든 ===든 항상 false를 반환한다.