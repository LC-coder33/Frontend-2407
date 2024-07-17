// for 반복문

let summerFruits = ['수박','참외', '복숭아', '포도'];

for (let i = 0; i <= 3; i++) {
    console.log(i, summerFruits[i]);
}

for (let i = 0; i < 4; i++) {
    console.log(i, summerFruits[i]);
}

for (let i = 0; i < summerFruits.length; i++) {
    console.log(i, summerFruits[i]);
}

// 1에서 100사이의 정수의 합 구하기
let sum100 = 0;
for (let i = 1; i <= 100; i++) {
    sum100 += i;
}
console.log(`1에서 100사이의 정수의 합 = ${sum100}`);

// 1에서 100사이의 홀수의 합 구하기
/* let sumOdd = 0;
for (let i = 1; i <= 100; i++) {
    if (i % 2 == 1)
        sumOdd += i;
}
console.log(`1에서 100사이의 홀수의 합 = ${sumOdd}`);           <-- 홀짝을 구하기 위한 가장 추천되는 방법
*/

// 위의 코드 개선사항
let sumOdd = 0;
for (let i = 1; i < 100; i += 2) {
    sumOdd += i;
}
console.log(`1에서 100사이의 홀수의 합 = ${sumOdd}`);

// 1에서 100사이의 짝수의 합
let sumEven = 0;
for (let i = 2; i <= 100; i += 2) {
    sumEven += i;
}
console.log(`1에서 100사이의 짝수의 합 = ${sumEven}`);

// 3의 배수
let summ3 = 0;
for (let i = 3; i <= 100; i += 3) {
    summ3 += i;
}
console.log(`1에서 100사이의 3의 배수의 합 = ${summ3}`);

// 200에서 100사이의 5의 배수의 합
let summ5 = 0;
for (let i = 200; i >= 100; i -= 5) {
    summ5 += i;
}
console.log(`200에서 100사이의 5의 배수의 합 = ${summ5}`);

let sum5 = 0;
for (let i = 100; i <= 200; i += 5) {
    sum5 += i;
}
console.log(`200에서 100사이의 5의 배수의 합 = ${summ5}`);

// 하루는 몇분이냐?
let sumMinute = 0;
for (let hour = 0; hour <=23; hour++) {
    for (let minute = 0; minute <= 59; minute++) {
        sumMinute++;
    }
}
console.log(sumMinute);