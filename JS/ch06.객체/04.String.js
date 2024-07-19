// String 객체

let hello = '안녕하세요?';

// 속성
console.log(hello.length);

// 메소드
console.log(hello[2], hello.charAt(2));     // '하'
console.log(hello + ' 여러분!', hello.concat(' 여러분!'));
// 문자열에 특정 문자열이 있는지 없는지 확인할 때 사용
console.log(hello.indexOf('세'), hello.indexOf('가'));          // 3, -1
console.log(hello.includes('세요'));
console.log('pineapple'.lastIndexOf('p'));                      // 6

// 문자열을 분리하여 배열을 생성
let fruits = '수박 참외 포도';
let fruitsArray = fruits.split(' ');
console.log(fruitsArray);                                        // [ '수박', '참외', '포도' ]

// 문자열을 분리하여 배열을 생성
let fruit = '수박,참외,포도';
let fruitArray = fruit.split(',');
console.log(fruitArray);                                        // [ '수박', '참외', '포도' ]

// 문자열 일부분(substring) - 시작하는 숫자는 포함, 끝나는 숫자는 미포함
let today = new Date().toISOString();                           // 2024-07-19T02:12:31.147Z
console.log(today);
// 날짜 추출 - 2024-07-19
console.log(today.substring(0,10));                             // 0은 포함, 10은 미포함

// 시간 추출 - 02:12:31
console.log(today.substring(11, 19));                           // 11에서 출발해서 8 글자를 읽음 (11 + 8)
console.log(new Date().toLocaleString());                       // 2024. 7. 19. 오전 11:20:36
console.log(new Date().toLocaleString().substring(16));         // 11:21:49

// 공백 제거
let space = '\t   Hello?    \r\n';                                    // 양쪽의 WAhite space: 공백, 탭, /r, /n
console.log(space.trim(), space.trimStart(), space.trimEnd());

// Method chaining
console.log(space.trim().substring(0,5).toUpperCase());

// 문자열 변환
let sample= 'A quick brown fox';
console.log(sample.replace('A','This'));
console.log(sample.replace('o', 'O'));

// 정규표현식(Regular Expression)
sample = 'A quick brown fox - 3 - 갈색의 재빠른 여우 the lazy dog = 5 = 게으른 개';
// 영문자와 공백만 남기고 모두 지움
console.log(sample.replace(/[^A-Z a-z]/g, ''));                     // A quick brown fox       the lazy dog
// 한글과 공백만 남기고 모두 지움
console.log(sample.replace(/[^가-힣ㄱ-ㅎ ㅏ-ㅣ]/g, ''));            //        갈색의 재빠른 여우       게으른 개
// 숫자만 남기고 모두 지움
console.log(sample.replace(/[^0-9]/g, ''));                         // 35
// 숫자, 특수기호만 남기고 모두 지움
console.log(sample.replace(/[^0-9-=]/g, ''));                       // -3-=5=