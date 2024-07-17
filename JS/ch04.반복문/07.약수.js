// 약수 구하기
let num = 12;
let divisors = [];
for ( i = 0; i <=num; i++) {
    if (num % i == 0)
        divisors.push(i);
}
console.log(divisors);

// 소수(Prime number) 판별
for (let i = 2; i < num; i++) {
    if ( num % i == 0 ) {
        console.log(`${num} 은/는 소수가 아님`);
        break;
    }
}

let numbers = [5, 11, 17, 23, 27];
for (num of numbers) {
    for (let i = 2; i < num; i++) {
        if (num % i == 0 ) {
            console.log(`${num} 은/는 소수가 아님`);
        break;
        }
    }
}