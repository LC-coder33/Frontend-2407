// JSON - Javascript Object Notation
// 이기종 컴퓨터간에 데이터를 주고 받는 표준 - XML (eXtensible Markup Language)
// 실제는 json 이 업계 표준임(de facto standard)

let name = 'James', age = 27, job = '프로그래머';
let person = {name: name, age: age, job: job};
let newPerson = {name, age, job};                   // key 이름과 변수명이 같으면 하나만 사용가능
console.log(person, newPerson);

let externalForm = JSON.stringify(person);          // 객체를 문자열로 변환(외부로 내보낼 때 사용)
console.log(externalForm);

let internalForm = JSON.parse(externalForm);        // 문자열을 객체로 변환(내부로 들여올 때 사용)
console.log(internalForm);

let personArray = [person, {name: 'Maria', age: 25, job: '디자이너'}];
console.log(JSON.stringify(personArray));
console.log(personArray);

// comparator                                       // (a, b) => a - b   오름차순
                                                    // (a, b) => b - a   내림차순
p = [
    { id: 1, name: 'James', age: 27, job: '프로그래머'},
    { id: 2, name: 'Maria', age: 25, job: '디자이너'}
]
p.sort((a,b) => a.age - b.age)
console.log(p);