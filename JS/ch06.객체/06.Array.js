// Array 객체

// 배열 생성
let fruits = ['apple', 'banana', 'cherry'];
let cars = new Array('Audi', 'Benz', 'BMW');
console.log(cars);

// 배열 메소드
// concat() 자기파괴적 메소드는 아니다. 비파괴적 메소드
let newFruits = fruits.concat('mango', 'orange');
console.log(newFruits, fruits);

// join - 문자열로 연결                                     // cars = new Array('Audi', 'Benz', 'BMW');
console.log(`내가 갖고 싶은 차는 ${cars.join(', ')}`);      // 내가 갖고 싶은 차는 Audi, Benz, BMW

// pop()* - 맨 뒤에 있는 요소를 끄집어 내고, 파괴적 메소드
console.log(cars.pop());
console.log(cars);

// push()* 맨 뒤에 요소를 추가. 파괴적 메소드
cars.push('Volvo'); cars.push('Hyundai');
console.log(cars);

// reverse()* 순서 뒤집기. 파괴적 메소드
cars.reverse();
console.log(cars);

// sort()* 정렬. 파괴적 메소드
cars.sort();                                // 문자열을 기준으로, 오름차순 정렬이 기본
console.log(cars);


let numbers = [34, 25, 89, 7, 45, 55, 19];
//오름차순(Ascending Order)
// numbers.sort(function(a, b) {
//     return a - b;
// });
numbers.sort((a, b) => a - b );
console.log(numbers);

//내림차순(Descending Order)
numbers.sort((a, b) => b - a);
console.log(numbers);

// slice
console.log(fruits);
console.log(fruits.slice(1));           // fruits.slice(1, 3)