// 재귀(recursive) 함수
// 팩토리얼: n! = n * (n-1)!
// 단, 0의 팩토리얼은 1이다.

function factorial(num) {
    let product = 1;
    for (let i = 1; i <= num; i++)
        product *= i;
    return product;
}
console.log(factorial(10));

function facto(num) {
    if (num == 0)
        return 1;
    return num * facto(num - 1);
}
console.log(facto(9));

// Fibonacci 수열
// f(n) = f(n-1) + f(n-2), n >= 2
// f(0) = 1, f(1) = 1
function fibonacci (num) {
    if (num == 0 || num == 1)
        return 1;
    return fibonacci(num - 1) + fibonacci(num - 2);
}
let fiboArray = [];
for (let i = 0; i < 20; i++)
    fiboArray.push(fibonacci(i));
console.log(fiboArray);