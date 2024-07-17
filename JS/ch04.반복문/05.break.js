// break - 반복문 탈출

// 04.while.js에 있는 방법보다 아래 방법이 더 많이 쓰임
let sumDice = 0;
let diceArray = [];
while (true) {
    let dice = Math.ceil(Math.random() * 6);
    diceArray.push(dice);
    sumDice += dice
    if (sumDice > 21 )
        break;
}
console.log(diceArray);
console.log(sumDice);


for (;;) {
    let dice = Math.ceil(Math.random() * 6);
    diceArray.push(dice);
    sumDice += dice
    if (sumDice > 21 )
        break;
}

console.log(diceArray);
console.log(sumDice);
// 위의 while 문과 동일한 역할을 함

for (let i =0; i < 3; i++) {
    for (let k = 0; k < 5; k++) {
        if (k == i)
            break
    }
    console.log('point A', i);
}
console.log('Point B');