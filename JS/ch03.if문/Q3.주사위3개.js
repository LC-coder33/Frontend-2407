// 주사위 3개 - 백준 도장 2480

let first = Math.ceil(Math.random() * 6); 
let second = Math.ceil(Math.random() * 6); 
let third = Math.ceil(Math.random() * 6); 

if (first == second && first == third && second == third)
dice = first * 1000 + 10000;
else if(first == second)
dice = 1000 + first * 100;
else if(first == third)
dice = 1000 + first * 100;
else if(second == third)
dice = 1000 + second * 100;
else
dice = Math.max(first, second, third) * 100;

console.log(`${first} ${second} ${third} ${dice}원`);