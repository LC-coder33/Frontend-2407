/*
 * 객체(object)
*/

// 1. 자료구조의 의미 - 파이썬의 딕셔너리, 자바의 맵과 유사함
//      키, 밸류의 조합
let personArray = ['James', 27, '남자', '프로그래머', 175.2];
let personObject = { name: 'James', age: 27, gender: '남자', 
                            job: '프로그래머', height: 175.2 };

// 2. 객체 본연의 의미 - 속성(attribute)과 메소드(method) 사물을 묘사
const pet = {
    name: '구름', 
    eat: function(food = '사료') {
        console.log(`${food} 을/를 먹습니다.`);
    }
}

console.log(pet.name);
pet.eat();
pet.eat('간식');

// 객체에 대한 접근
console.log(personObject.job);              // 이렇게 사용하는 것이 일반적
console.log(personObject['job']);           // 이런식으로는 사용하지 않는다.
let key = 'job';
console.log(personObject[key]);             //허나 key 값을 변수로 사용하는 경우는 []를 사용하여 쓸 수 있다.

// 배열은 객체의 특수한 형태
console.log(typeof personArray);
let fruitArray = ['감', '밤', '배']
let fruitObject = { 0: '감', 1: '밤', 2: '배'};     // 위의 배열을 풀어쓰면 지금과 같은 객체가 된다

