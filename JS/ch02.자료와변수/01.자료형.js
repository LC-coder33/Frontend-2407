/*
* 자바스크립트의 자료형
*/

//1. 문자열(String)
console.log("He said 'I love you.'");
console.log('He said "I love you."');
console.log("I'll be back");

// 특수 문자 - 백슬래시(\) + 문자
console.log("\tabc\tdef\"ghi\njkl\\");

// 문자열 연산자(+)
console.log('가나다' + ' ' + '라마바');

// 문자열 선택
let hello = '안녕하세요?';
console.log(hello, hello[0], hello[3]);     // 안녕하세요? 안 세

// 문자열 길이
// 문자열: 속성(attribute), method
console.log(hello.length, hello.charAt(0), hello.charAt(3)); // 6 안 세

// let a = 'this is 'string''; // '' 가 두개가 들어가서 에러가 발생함

// template literal
console.log(hello + ' 문자열의 길이는 ' + hello.length + ' 입니다.'); // <-평범한 방식
console.log(`${hello} 문자열의 길이는 ${hello.length} 입니다.`);

// 2. 숫자(Number)
// 자바스크립트에서는 정수형(integer), 실수형(floating point)을 구분하지 않는다.
let a=3, b=4;
console.log(a + b, a-b, a / b, b % a);
let pi = 0.314159e1;            //0.314159 * 10 **1 / e1=10의 1승
let f = 1.3e-8;                 //1.3 * 10 **-8
console.log(pi, f);
console.log(2 ** 10, 2**20, 2**30);     // 1Kilobyte, 2Megabyte, 1Gigabyte

// 3. 논리형(Boolean) - true, false
// 비교 연산
console.log(a > b, 10=== 10.0);             // === : 타입과 값이 같을 때 참
console.log(10 == '10', 10 === '10');       // == : 타입이 달라도 값이 같으면 참[10은 숫자고 '10'은 문자임에도(자바에서는 둘 다 false로 나옴)]
// 논리연산
// x > 5, x <=0     , 는 논리합이다. 즉, or ||
// 3 < x <= 8       논리곱이다. and &&
let x = 10;
console.log(x > 8 || x < 0);
console.log(x >0 && x < 8);

// 자료형 검사
console.log(typeof hello, typeof(a), typeof(true));

let y = a + -b;     // 이와 같은 경우엔   + : binary operator  - : unary operator 이다
