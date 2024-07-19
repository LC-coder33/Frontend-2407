// 1. 1에서 1000사이에 0은 몇번, ..., 9는 몇번 사용되었는가?
function countzeroes(start, end) {
    let count = 0;

    for (let i = start; i <= end; i++) {
        let numStr = i.toString();
        
        for (let char of numStr) {
            if (char === '0') {
                count++;
            }
        }
    }

    return count;
}

let start = 1;
let end = 1000;

let a = countzeroes(start, end);

console.log(`1에서 1000 사이에 숫자 0은 총 ${a}번 사용되었습니다.`);


// 2. C:/Workspace/FrontEnd/JS/ch06.객체/Q2.연습문제.js
//    위 문자열에서 파일명 Q2.연습문제.js 만 분리하세요.
let practice = 'C:/Workspace/FrontEnd/JS/ch06.객체/Q2.연습문제.js'
console.log(practice.substring(33));


// 3. 두개의 세자리수를 곱해서 나온 결과가 palindrome일 때
//    가장 큰 palindrome 수와 어떤 수를 곱해서 나온 결과인가?


// 4. 다음 문장에서 the 단어는 몇번 사용되었는가?
let sample = `the grown-ups' response, this time, was to advise me to lay aside my drawings of 
boa constrictors, whether from the inside or the outside, and devote myself instead to geography, 
history, arithmetic, and grammar. That is why, at the, age of six, I gave up what might have been a 
magnificent career as a painter. I had been disheartened by the failure of my Drawing Number One and 
my Drawing Number Two. Grown-ups never understand anything by themselves, and it is tiresome for children 
to be always and forever explaining things to the.`;

