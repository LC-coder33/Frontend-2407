/*
 * 함수 형태
*/

// 1. 매개변수(인수)와 반환값이 있는 함수
function add(a, b) {                    // add 안에 있는 a, b: 매개변수
    return a + b;                       // return a + b: 반환값
}

// 2. 매개변수 없이 반환값만 있는 함수(생산자, producer)
function dice() {
    return Math.ceil(Math.random()*6);
}
console.log(dice());

// 3. 매개변수만 있고 반환값이 없는 함수(소비자, consumer)
function print(a) {
    console.log(a);
}
print('반환값이 없는 함수');

// 4. 매개변수도 없고 반환값도 없눈 함수
var globalVar = 0;
function increment() {
    globalVar++;
}
increment();
console.log(globalVar);
