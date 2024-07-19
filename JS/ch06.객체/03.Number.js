// 표준 내장 객체 - Number
let num = 273;
let numberFromConstructor = new Number(273);
console.log(num, numberFromConstructor);

const pi = Math.PI;
console.log(pi);                        // 3.141592653589793
console.log(pi.toFixed(5));             // 3.14159 - 보여질 소숫점 자리수를 toFixed 를 통해서 정해줄 수 있음
console.log(pi.toExponential());
console.log(pi.toPrecision(3));         // 3.14, 유효숫자 3개

console.log(Number.MAX_VALUE, Number.MIN_VALUE);
console.log(Number.MAX_SAFE_INTEGER, Number.MIN_SAFE_INTEGER);
console.log(Math.pow(2, 53) - 1);
console.log(Number.NEGATIVE_INFINITY, Number.POSITIVE_INFINITY);

// NaN (Not a Number)