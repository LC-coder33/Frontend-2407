/*
 * 함수 선언
*/

// 1. 선언적 함수
function add(a, b) {    // a, b - 매개변수, parameter, argument
    return a + b;       // 반환값
}

let result = add(3, 4);
console.log(result);
console.log(add(4, 5));
console.log( `2 + 5 = ${add(2,5)}`);

// 2. 익명(Anonymous) 함수
const anonyAdd = function (a, b) {
    return a + b
}
console.log(`3 + 4 = ${anonyAdd(3, 4)}`);
console.log(typeof anonyAdd);               // typeof: 문자열, 숫자, Boolean, undefined, function, object

// 3. 화살표 함수, 람다(lamda) 함수
const arrowAdd = (a, b) => a + b;
console.log(`3 + 5 = ${arrowAdd(3, 5)}`);
console.log(typeof arrowAdd);