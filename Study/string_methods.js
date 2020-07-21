var str = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
console.log(str.length)
//길이 반환

str = "Please locate where 'locate' occurs!"
console.log(str.indexOf('locate'))
//문자열에서 문자열을 찾아 index위치 반환, 못찾으면 -1 반환
//※ js는 0부터 셈
console.log(str.lastIndexOf('locate'))
//마지막으로 찾아지는 위치 반환, 못찾으면 -1 반환

console.log(str.indexOf('locate', str.indexOf('locate')+1))
//두 함수 다 두번째 인자로 찾기 시작하는 index를 입력 받을 수 있다.
console.log(str.lastIndexOf('locate', 20))
//lastIndexOf는 뒤에서 앞으로 찾기 때문에 2번쨰 인자 위치부터 앞으로 탐색한다.

console.log(str.search('locate'))
//indexOf와 같아보이지만 차이점이 있다.
//search는 2번째 인자를 가질 수 없다.
//search는 정규표현식으로 검색이 가능하다.

var str = "Apple, Banana, Kiwi"
var res = str.slice(7, 13)
console.log(res)
console.log(str)
//시작 위치와 끝 위치를 입력받아 글자를 자른다. 원래 글자는 유지된다.

console.log(str.slice(7, -6))
//음수 파라미터는 글자의 뒤에서부터 index를 정한다.
console.log(str.slice(7))
//두번째 인자를 빠뜨리면 끝까지 자른다.
console.log(str.slice(-12))
//물론 이것도 같다

//subString
console.log(str.substring(7, 13))
console.log(str.substring(7))
//slice랑 같아보이지만 음수 파라미터를 받지 못한다.

//substr
console.log(str.substr(7, 6))
//이것도 slice랑 비슷한 메서드인데 2번째 인자가 짜를 글자의 길이라는 점이 다르다. 2번째 인자를 입력안하면 끝까지 자른다.
console.log(str.substr(-12, 6))
//첫번째 인자는 음수를 받을 수 있다.

var str = "Please visit Microsoft and Microsoft"
console.log(str.replace("Microsoft", "W3Schools"))
//가장 첫번째 것만 바꾼다
console.log(str)
//원래 문자열은 바뀌지 않는다.
console.log(str.replace("MICROSOFTY", "W3Schools"))
//대소문자를 구분한다.
console.log(str.replace(/Microsoft/g, "W3Schools"))
//정규식으로 replaceAll기능을 할 수 있다. g는 global match

var str = "lower UPPER"
console.log(str.toUpperCase())
console.log(str.toLowerCase())
console.log(str)
//원래 문자열은 바뀌지않는다.

var txt1 = "Hello"
var txt2 = "Roki"
console.log(txt1.concat(txt2))
console.log(txt1.concat(" ", txt2))
console.log(txt1 + " " + txt2)
//여러개의 문자열을 붙일 수 있으며 +연산자로 대체가능하다.

console.log(txt1.concat(txt2, " ").trim() + "end")
//문자열 앞뒤의 공백을 지워준다.


var str = "HELLO WORLD"
console.log(str.charAt(0))
console.log(str.charCodeAt(0)) // utf-16 code
console.log(str[0]) //property access
console.log(str[11]) // undefinded
console.log(str.charAt(11)) // empty string
str[0] = "A"
console.log(str[0]) // property read only

//저렇게 변경하곳 싶으면 property로 접근하지 않고 String을 array로 변경하여주면 된다.
console.log(str.split(""))
var array = str.split("")
array[0] = 'A'
console.log(array.join(""))