// 생년월일에 따른 나이 계산

let bYear = 1991, bmonth = 12, bDay = 5;
const today = new Date();
let tYear = today.getFullYear();
let tMonth = today.getMonth()+1;                // JS는 월에 1을 더해주어야 함
let tDay = today.getDate();

if (tMonth < bmonth) 
age = tYear - bYear - 1
else if (tMonth > bmonth)
    age = tYear - bYear
else {
    if
(tDay >= bDay)
    age = tYear- bYear;
    else
    age = tYear - bYear -1;
}

console.log(`생일: ${bYear}-${bmonth}-${bDay}, 나이: ${age}세`);