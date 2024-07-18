








function isPrimeNumber(num) {
    let sqrtNum = Math.floor(Math.sqrt(num));
    for ( let i = 2; i <= sqrtNum; i++)
        if (num % i == 0)
            return false;
}