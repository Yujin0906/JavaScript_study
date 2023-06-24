// 변수를 선언할 때는 변하지 않는 값은 const, 변할 수 있는 값은 let으로 선언!
// 변수 규칙 
//    - 문자와 숫자, $, _만 사용
//    - 첫 글자는 숫자 x, 예약어 사용 x, 가급적 상수는 대문자
//    - 변수명은 읽기 쉽고 이해할 수 있게 선언

// 자료형 - "", '', ``를 통해 사용 가능
const name1 = "mike";
const name2 = 'mike';
const name3 = `mike`;

const message = "I'm a boy."; // ""에서 ${}를 사용하면 ${}이 그대로 노출됨
const message2 = 'I\'m a boy.'; // ''에서 ${}를 사용하면 ${}이 그대로 노출됨
const message3 = `My name is ${name}`; // ``에서만 ${} 사용 가능
const message4 = `나는 ${30+1}살 입니다.`;

console.log(message3);

// 숫자형
const age1 = 30;
const PI = 3.14;

console.log(1+2); // 더하기
console.log(5-3); // 빼기
console.log(1*6); // 곱하기
console.log(6/5); // 나누기
console.log(7%5); // 나머지

const y = name/2;
console.log(y) // NaN

// Boolean
const a = true;
const b = false;

console.log(name1=='mike');
console.log(age1>40);

// null과 undefined
let age2;
console.log(age2); // undefined
let user = null;

// ```````````객체형과 심볼형````````

// typeof 연산자
console.log(typeof 3); // number
console.log(typeof name1); // string
console.log(typeof true); // boolean
console.log(typeof "xxx"); //string
console.log(typeof null); // object(객체형) 그러나 null은 객체가 아님!
console.log(typeof undefined); // undefined

// 문자형 더하기
const c = "나는 ";
const d = " 입니다.";

console.log(c + name1 + d);
console.log(c + age1 + "살" + d);

// 대화 상자 - alert(알려줌), prompt(입력 받음), confirm(확인 받음)
// const name4 = prompt("이름을 입력하세요");
// alert("환영합니다, " + name4 + "님");

// 배틱(${}) 사용하기(대화 상자)
// const name4 = prompt("이름을 입력하세요");
// alert(`안녕하세요, ${name4}님. 환영합니다.`);

// 디폴트 값 설정(대화 상자)
// const name4 = prompt("예약일을 입력해주세요", "2023-06-"); // 두 번째 값 ""는 디폴트값

// confirm은 확인과 취소 버튼이 함께 존재-> 확인을 누르면 true, 취소를 누르면 false 반환
// const isAdult = confirm("당신은 성인 입니까?"); 
// console.log(isAdult);

// 지금까지의 단점 -> 스크립트 일시 정지, 스타일링 불가능

// 형변환
// - String() : 문자형으로 변환
// - Number() : 숫자형으로 변환
// - Boolean() : 불린형으로 변환
// const mathScore = prompt("수학 점수 입력 : ");
// const engScore = prompt("영어 점수 입력 : ");
// const result = (mathScore + engScore) / 2; // 이상한 값이 나옴
// console.log(result);
/* 위 코드에 대한 해설
   => prompt는 문자형임 따라서 mathScore에 90, engScore에 80을 대입하면 9080이라는 숫자가 출력됨, reuslt는 9080 / 2 = 4050이라는 값 출력됨 ** /(나누기)는 자동 형변환으로 문자형을 숫자형으로 변환시킴*/

// String() 형변환
console.log( // 쉼표를 이용해 한 번에 출력 가능
String(3),
String(true),
String(false),
String(null),
String(undefined))

// Number() 형변환
console.log(
Number("1234sdfd"), // NaN
Number(true), // 1
Number(false), // 0
Number("521"), // 521
Number(null), // 0 (주의사항! 외우기)
Number(undefined)) // NaN (주의사항! 외우기) 

// Boolean() 형변환
// 숫자 0, 빈 문자열""('', ``), null, undefined, NaN은 모두 false를 출력 이 외에는 모두 true 출력
console.log(
Boolean(0),
Boolean('0'), // true (주의사항! 외우기) 
Boolean(''),
Boolean(' '), // true (주의사항! 외우기) 
Boolean(null),
Boolean(undefined),
Boolean(NaN))

// 연산자(+, -, *, /, %)
// 거듭제곱 (**)
const num1 = 2**3;
console.log(num1); // 8

// 연산자 줄여쓰기
let num2 = 10;
num2 += 5; // num2 = num2 + 5;와 같음
console.log(num2);

// 증가 연산자, 감소 연산자
let num3 = 10;
let num4 = 10;
console.log(num3++); // 10 -> 출력한 후 증가
console.log(++num4); // 11 -> 증가 시킨 후 출력

// 비교 연산자(<, >, <=, >=, ==, !=), 조건문
console.log(10>5);
console.log(10==5); // 동등 연산자
console.log(10!=5);

// 동등 연산자, 일치 연산자
const e = 1; // 숫자형
const f = "1"; // 문자형
console.log(e==f); // true -> 이럴 때는 타입까지 비교해주는 일치 연산자를 사용해야함!
console.log(e===f); // false, 일치 연산자 -> 타입까지 비교해줌

// 조건문(if)
const age3 = 19;
if(age3 > 19){
    console.log('환영');
  }
else if(age3===19){
  console.log('수능');
}
else{
  console.log('안녕');
}

// 논리 연산자 - AND(&&), OR(||), NOT(!)
// AND(&&) - 모든 값이 true면 true, 하나라도 false면 false
//         - AND는 첫번째 false를 발견하는 즉시 평가를 멈춤
if(name1 === 'mike' && age1 > 19){ // name1 = mike, age1 = 30
  console.log('통과');
}
else{
  console.log('불통');
}

// OR(||) - 여러개 중 하나라도 true면 true, 모든 값이 fasle일때만 false
//        - OR은 첫번째 true를 발견하는 즉시 평가를 멈춤
if(name1 === 'Tom' || age1 > 19){ // name1 = mike, age1 = 30
  console.log('통과');
}

// NOT(!) - true면 false, false면 true
// const age4 = prompt('나이 입력');
// const isAdult = age4 > 19

// if(!isAdult){
//   console.log('불통');
// }

// 우선 순위
// 남자이고 이름이 mike이거나 성인이면 통과
const gender = 'F';
const name4 = 'Jone';
const Adult = true;

if(gender==='M'&&name4==='Mike'||Adult){
    console.log('통과');
  }
else
  {console.log('불통');}

// 반복문(loop) - 동일한 작업을 여러번 반복
//              - for, while, do~while

// for문
for(let i = 0; i < 10; i++){ // for( 초기값; 조건; 코드 실행 후 작업)
  // 반복할 코드 입력
}
// 1부터 10까지 로그(for문)
for (let i = 1; i < 11; i++)
  {
    console.log(i);
  }

// while문
// 1부터 10까지 로그(while문)
let i = 1;
while(i<11) {
  console.log(i);
  i++;
  }

// do~while문 - 적어도 1번은 실행을 해야 함, while문과 다른 점
// break(do~while문)
//while(true){
  // let answer = confirm('계속 할까요?');
//  if(!answer){
//    break;
//  }
//}

// continue - 짝수만 출력
for(let i = 0; i < 10; i++){
  if(i%2){
    continue;
  }
  console.log(i);
}

// switch문
/*
사과 100원, 바나나 200원, 키위 300원, 멜론 500원. 수박 500원
사고 싶은 과일을 물어보고 가격 알려주기
*/
// let fruit = prompt('무슨 과일을 사고 싶나요?');

// switch(fruit){
//   case '사과':
//     console.log('100원');
//     break;
//   case '바나나':
//     console.log('200원');
//     break;
//   case '키위':
//     console.log('300원');
//     break;
//   case '멜론':
//   case '수박':
//     console.log('500원');
//     break;
//   default:
//     console.log('과일 없음');

// }

// 함수(function)
//    - 한 번에 한 작업에 집중
//    - 읽기 쉽고 어떤 동작인지 알 수 있게 네이밍

// 매개 변수가 없는 함수
function showError(){ 
  alert('에러가 발생했습니다. 다시 시도해주세요.');
}

// showError();

// 매개 변수가 있는 함수
let msg = `Hello`; // 전역 변수 (global variable)
console.log('함수 호출 전');
console.log(msg);

function sayHello(name){
  if(name){
    msg += ', '+name;
  }
  console.log('함수 내부');
  console.log(msg);
}

sayHello();
sayHello('mike');
console.log('함수 호출 후');
console.log(msg);

// 전역 변수 (global variable), 지역 변수(local variable) -> 동일한 변수 이름 설정 가능, 서로 간섭 받지 않음
let msg2 = "welcome"; // 전역 변수 (global variable)

function sayHello2(name){
  let msg2 = "Hello" // 지역 변수(local variable)
  console.log(msg2+' '+name);
}

sayHello('mike');
console.log(msg);

// OR을 사용한 함수
function sayHello3(name){
  let newName = name || 'friend';
  let msg = `Hello, ${newName}`
  console.log(msg)
}

sayHello3(); // 매개변수를 입력하지 않으면 friend 출력
sayHello3('Jone'); // 매개변수를 입력하면 name 출력

// default 값을 사용한 함수
function sayHello4(name = 'friend'){ // friend는 default값
  let msg = `Hello, ${name}`
  console.log(msg)
}

sayHello4(); // 매개변수를 입력하지 않으면 friend 출력
sayHello4('Jone'); // 매개변수를 입력하면 name 출력

// return으로 값 반환 함수 - (1)
function add(num1, num2){ 
  return num1 + num2;
}

const result = add(2,3);
  console.log(result);

// return으로 값 반환 함수 - (2)
function showError(){ 
  alert('에러 발생');
  return;
  alert('이 코드는 절대 실행되지 않음');
}

// const result2 = showError();
// console.log(result2);

// 함수 표현식 - 함수 선언문은 어디서든 호출이 가능하나 함수 표현식은 코드에 도달하면 생성함

// 화살표 함수(arrow function)
/*
showError2();

function showError2(){ // 함수 선언문
  console.log('error');
} 
*/

let showError2 = () => { // 위의 함수 선언문을 화살표 함수로 표현
  console.log('error');
}

const sayHello5 = (name) => {
  const msg = `Hello, ${name}`;
  console.log(msg);
}

// 객체(object)
const superman = {
  name:'clark',
  age:33,
}

// 객체 접근
console.log(superman.name);
console.log(superman['age']);
console.log(superman);
// 객체 추가
console.log(superman.gender = 'male');
console.log(superman['hairColor'] = 'black');

// 객체 삭제
console.log(delete superman.hairColor);
console.log(superman)

// 단축 프로퍼티
const name5 = 'clark';
const age4 = 33;
const suerman = {
  name5, // name : name
  age4,  // age : age
  gender : 'male',
}

// 객체 프로퍼티 존재 여부 확인
//    - 존재 하지 않는 프로퍼티에 접근하면 error가 아닌 undefined
//    - in 연산자를 사용하면 프로퍼티가 있는지 확인할 수 있음
console.log(superman.birthDay); // undefined
console.log('birthDay' in superman); // false
console.log('age' in superman); // true

// for ... in 반복문
for(let key in superman){ // key가 의미하는 것은 superman의 프로퍼티
  console.log(key)
  console.log(superman[key])
}

// 객체 정리
function isAdult2(user){
  if(!('age' in user) || // user에 age가 없거나
    user.age < 20){ // user age가 20 미만이면
    return false;
  }
  return true;
}

const Mike = {
  name : 'Mike',
  age : 30
};

const Jane = {
  name : 'Jane'
};

console.log(isAdult2(Jane));

// 객체(method, this)
// method - 객체 프로퍼티로 할당 된 함수

let boy = {
  name : 'Mike',
  sayThis : function(){
    console.log(this);
  }
};

boy.sayThis();

// 배열(array) - 순서가 있는 리스트
let students = ['철수', ' 영희', '영수'];

// 배열의 특징
//    - 문자뿐만 아니라 숫자, 객체, 함수 등도 포함 가능
//    - length : 배열의 길이 / push() : 배열 끝에 추가 / pop() : 배열 끝 요소 제거
//    - unshift(추가), shift(제거) : 배열 앞에 추가, 제거

// 배열 반복문 (for ... of) - 인덱스를 못 얻는다는 단점 존재
//       ** 객체를 순회하는 for in과 헷갈리지 않기!
let days = ['월', '화', '수'];
for(let day of days){
  console.log(day)
}

// 변수(var, let, const)
// var - 한 번 선언된 변수를 다시 선언 가능하며 선언 하기 전에 사용 가능하다
//       (선언만 호이스팅 되고 할당은 호이스팅 되지 않음!!)
// let - 한 번 선언된 변수를 다시 선언할 수 없음, let도 호이스팅 되지만 Temporal Dead Zone때문에 var와 달리 error 발생함
// 호이스팅 - 스코프 내부 어디서든 변수 선언은 최상위에 선언된 것처럼 행동
// Temporal Dead Zone(TDZ)

// 변수의 생성 과정 - 1. 선언 2. 초기화 3. 할당
// var의 생성 과정 - 1. 선언, 초기화 2. 할당
// let의 생성 과정 - 1. 선언 2. 초기화 3. 할당
// const의 생성 과정 - 1. 선언, 초기화, 할당

// 스코프
// var - 함수 스코프(function-scoped) : 블록 스코프와 달리 코드 블록에 구애받지(?) 않지만 유일하게 함수 블록에서만 코드 블록이 유효하며 외부에서 접근 불가함!
// let, const - 블록 스코프(block-scoped) : 코드 블록(함수, if문, for문, while문, try/catch문 등) 내에서만 유효하며 외부에서는 접근 불가-> 지역변수

// 생성자 함수
// 객체 리터럴 - 첫 글자는 대문자로, new 연산자를 사용해서 호출함
function Item(title, price){
  // this = {};
  this.title = title;
  this.price = price;
  this.showPrice = function(){
    console.log(`가격은 ${price}원 입니다`);
  }
  // return this;
}

const item1 = new Item('인형', 3000);
const item2 = new Item('가방', 4000);
const item3 = new Item('지갑', 5000);

console.log(item1, item2, item3);

item2.showPrice();

// Computed property(계산된 프로퍼티)
let g = 'age';
const user2 = {
  name2 : 'mike',
  [g] : 30  
}

const user3 = {
  [1+4] : 5, // 식 자체를 넣는 것도 가능함
  ["안녕"+"하세요"] : "hello"
}

console.log(user3);

// Methods
// Object.assign() : 객체 복제
const newUser = Object.assign({},user2);
newUser.name2 = 'Tom';
console.log(user2.name2); // mike -> newUser != user2

// Object.keys() : 키 배열 반환
console.log(Object.keys(user2));

// Object.values() : 값 배열 반환
console.log(Object.values(user2));

// Object.entries() : 키/값 배열 반환
console.log(Object.entries(user2));

// Objcet.fromEntries() : 키/값 배열을 객체로
const arr = [["name","Mike"],["age",30],["gender","male"]];
console.log(Object.fromEntries(arr));

// 심볼(Symbol) - 유일성 보장
const h = Symbol(); // new를 붙이지 않음!
const j = Symbol(); // h != j

console.log(h);
console.log(j);

const id = Symbol('id');
const user4 = {
  name : 'Mike',
  age: 30,
  [id]:'myid'
}
console.log(Object.keys(user4)); // 심볼은 출력 x(values, entries, for.. in, .. 도 마찬가지)

// Symbol.for() : 전역 심볼 - 하나의 심볼만 보장받을 수 있음
//                          - 없으면 만들고 있으면 가져오기 때문
//                          - Symbol 함수는 매번 다른 Symbol 값을 생성하지만 Symbol.for 메소드는 하나를 생성한 뒤 키를 통해 같은 Symbol을 공유함

// 숨겨진 Symbol key 보는 법
console.log(Object.getOwnPropertySymbols(user4));
console.log(Reflect.ownKeys(user4));

// Number, Math
// toString : 10진수 -> 2진수/16진수
let num = 10;
console.log(num.toString()); // 10진수
console.log(num.toString(2)); // 2진수 변경
console.log(num.toString(16)); // 16진수 변경

// Math
console.log(Math.PI);

// Math.ceil() : 올림, Math.floor() : 내림, Math.round() : 반올림
let num5 = 5.1;
let num6 = 5.7;
console.log(Math.ceil(num5)); // 6
console.log(Math.ceil(num6)); // 6
console.log(Math.floor(num5)); // 5
console.log(Math.floor(num6)); // 5
console.log(Math.round(num5)); // 5
console.log(Math.round(num6)); // 6

// 소수점 자릿수
let userRate = 30.1234; // 요구 사항 : 소수점 둘째자리 까지 표현(셋째 자리에서 반올림) <- 30.12

// sol 1)
console.log(Math.round(userRate*100)/100); // 100을 곱하고 반올림을 해준뒤 100으로 나눠주면 됨

// sol 2) toFixed()사용 -> 문자열을 반환하기 때문에 주의해야 함
console.log(userRate.toFixed(2));
console.log(Number(userRate.toFixed(2))); // Number로 반환하여 문자열을 숫자로 변환하기!

// isNaN() - NaN인지 판단
let x = Number('x'); // NaN

console.log(x==NaN); // false
console.log(x===NaN); // false
console.log(NaN==NaN); // false

console.log(isNaN(x)); // true
console.log(isNaN(3)); // false

// parseInt() - 문자열을 숫자로 바꿈, Number()와 다른 점은 문자가 혼용되어 있어도 동작을 함
let margin = '10px'
console.log(parseInt(margin)); // 10
console.log(Number(margin)); // NaN
console.log(parseInt('f3')); // NaN을 반환 하는 이유는 숫자가 아닌 문자로 시작했기 때문

console.log(parseInt('f3', 16)); // 243 -> 16진수에서 10진수로 변환함
console.log(parseInt('11', 2)); // 3 -> 2진수에서 10진수로 변환함

// parseFloat() - 부동소수점
let padding = '18.5%';
console.log(parseFloat(padding)); // 18.5

// Math.random() - 0 ~ 1 사이 무작위 숫자 생성
console.log(Math.random());
// 1 ~ 100 사이 임의의 숫자를 뽑고 싶다면?
console.log(Math.random()*100)+1; // 식을 만들어 사용해야 함

// Math.max(), Math.min()
console.log(Math.max(1, 4, -1, 5, 10, 9, 5.54)); // 10
console.log(Math.min(1, 4, -1, 5, 10, 9, 5.54)); // -1

// Math.abs() - 절대값
console.log(Math.abs(-1)); // 1

// Math.pow(n, m) - 제곱
console.log(Math.pow(2, 10)); // 1024

// Math.sqrt() - 제곱근(루트)
console.log(Math.sqrt(16)); // 4

// String
// length - 문자열 길이
let desc1 = '안녕하세요.';
console.log(desc1.length); // 6

// 특정 위치에 접근
console.log(desc1[2]); // '하'
desc1[4] = '용';
console.log(desc1); // 바꾸는 것이 허용되지 않음

// toUpperCase() / toLowerCase()
let desc2 = "Hi guys. Nice to meet you.";
console.log(desc2.toUpperCase()); // 모든 문자를 대문자로 변경
console.log(desc2.toLowerCase()); // 모든 문자를 소문자로 변경

// str.indexOf(text)
console.log(desc2.indexOf('to')); // 14 -> 문자가 여러 개라도 첫번째 위치만 반환함
console.log(desc2.indexOf('man')); // 찾는 문자가 없으면 -1을 반환

if(desc2.indexOf('Hi')){ // Hi는 인덱스가 0 이므로 if에서 0은 false
  console.log('Hi가 포함된 문장입니다.'); // false이므로 실행 x
}

if(desc2.indexOf('Hi' > -1)){ // -1보다 크다라고 바꿔줘야 함(if 쓸 때 주의!!)
  console.log('Hi가 포함된 문장입니다.'); 
}

// str.slice(n, m) - 특정 문자만 뽑기
//                 - n : 시작점, m : 없으면 문자열 끝까지, 양수면 그 숫자까지(포함x), 음수면 끝에서부터 셈
let desc3 = "abcdefg";
console.log(desc3.slice(2)); // "cdefg"
console.log(desc3.slice(0, 5)); // "abcde"
console.log(desc3.slice(2, -2)); // "cde"

// str.substring(n, m) - n과 m 사이 문자열 반환, m과 m을 바꿔도 동장, 음수는 0으로 인식함
console.log(desc3.substring(2, 5)); // "cde"
console.log(desc3.substring(5, 2)); // "cde"

// str.substr(n, m) - n부터 시작, m은 범위가 아닌 개수임
console.log(desc3.substr(2, 4)); // "cdef"
console.log(desc3.substr(-4, 2)); // "de"

// str.trim() - 앞 뒤 공백 제거
let desc4 = "  coding       ";
console.log(desc4.trim()); // "coding"

// str.repeat(n) - 문자열을 n번 반복
let hello = "hello!";
console.log(hello.repeat(3)); //"hello!hello!hello!"

// 문자열 비교
console.log("a"<"c"); // true

// 아스키 코드
console.log("a".codePointAt(0)); // 97
console.log(String.fromCodePoint(97)); // "a"

// 문제) 숫자는 제외하고 문자열만 출력하기!
let list = [
  "01. 들어가며",
  "02. js의 역사",
  "03. 자료형",
  "04. 함수",
  "05. 배열"
];

let newList = [];

for(let i = 0; i< list.length; i++) {
    newList.push(list[i].slice(4));
  }

console.log(newList); // ["들어가며","js의 역사","자료형","함수","배열"]

// 문제) 금칙어 : 콜라
function hasCola(str){
  if(str.indexOf('콜라')>-1){ // 주의!!
    console.log('금칙어 존재');
  }
  else {
    console.log('통과');
  }
}

hasCola('사이다');
hasCola('콜라가 있어');
hasCola('콜라');

// 문제) 금칙어 : 콜라, includes

function hasCola2(str){
  if(str.includes('콜라')){ // 주의!!
    console.log('금칙어 존재');
  }
  else {
    console.log('통과');
  }
}

hasCola2('사이다');
hasCola2('콜라가 있어');
hasCola2('콜라');

// 배열 메소드
// arr.splice(n, m, x) - 특정 요소를 지움/추가, 삭제된 요소 반환
//                  - n : 시작, m : 개수, x : 추가
let array = [1, 2, 3, 4, 5];
array.splice(1, 2); // 인덱스 1부터 2개(2, 3) 지움 -> 1, 4, 5 남음
console.log(array);  // [1,4,5]

array = [1, 2, 3, 4, 5];
array.splice(1, 3, 100, 200); // 인덱스 1부터 3개(2,3,4) 지움 -> 지운 2,3,4 자리에 100, 200 추가
console.log(array); // [1,100,200,5]

array = ["나는", "철수", "입니다"];
array.splice(1, 0, "대한민국", "소방관"); // 0과 1 사이에 들어감
console.log(array); // ["나는","대한민국","소방관","철수","입니다"]

array = [1, 2, 3, 4, 5];
let result2 = array.splice(1, 2); // 삭제된 요소 반환
console.log(array); // [1,4,5]
console.log(result2); // [2,3]

// arr.slice(n, m) - n부터 m까지 반환
array = [1, 2, 3, 4, 5];
console.log(array.slice(1, 4)); // [2,3,4]
console.log(array.slice()); // [1,2,3,4,5] -> 괄호 안에 아무것도 넣지 않으면 배열이 복사됨

// arr.concat(arr2, arr3, ..) - 합쳐서 새 배열 반환
array = [1, 2]
console.log(array.concat([3,4])); // [1,2,3,4]
console.log(array.concat([3,4],[5,6])); // [1,2,3,4,5,6]
console.log(array.concat([3,4],5,6)); // [1,2,3,4,5,6]

// arr.forEach(fn) - 배열 반복
let users = ['Mike', 'Tom', 'Jane'];
users.forEach((name, index) =>{
  console.log(`${index+1}, ${name}`);
});

// arr.indexOf, arr.lastIndesOf
array = [1,2,3,4,5,1,2,3];
console.log(array.indexOf(3)); // 2
console.log(array.indexOf(3, 3)); // 7 -> 앞의 3은 찾아야 하는 수, 뒤의 3은 인덱스 3부터 시작하라는 뜻
console.log(array.lastIndexOf(3)); // 7 -> 끝에서부터 찾음

// arr.includes() - 포함하는지 확인
array = [1,2,3];
console.log(array.includes(2)); // true
console.log(array.includes(8)); // false

// arr.find(fn), arr.findIndex(fn)  **fn - 함수
array = [1, 2, 3, 4, 5];
const result3 = array.find((item)=>{
  return item % 2 === 0;
})
console.log(result3); // 2

let userList = [
  {name:"mike",age:30},
  {name:"jane",age:27},
  {name:"tom",age:10}
];
const result4 = userList.findIndex((user)=>{
  if(user.age < 19){
    return true;
  }
  return false;
});

console.log(result4); // 2

// arr.filter(fn) - 만족하는 모든 요소를 배열로 반환
array = [1, 2, 3, 4, 5, 6];
const result5 = array.filter((item)=>{
  return item % 2 === 0;
})
console.log(result5); // [2,4,6]

// arr.reverse() : 역순으로 재정렬
array = [1,2,3,4,5];
console.log(array.reverse()); // [5,4,3,2,1]

// arr.map(fn) - 함수를 받아 특정 기능을 시행하고 새로운 배열을 반환
userList = [
  {name:"mike",age:30},
  {name:"jane",age:27},
  {name:"tom",age:10}
];

let newUserList = userList.map((user,index)=>{
  return Object.assign({},user,{
    id : index + 1,
    isAdult:user.age>19
  });
});

console.log(newUserList);
console.log(userList);

// arr.join(), arr.split()
array = ["안녕", "나는", "철수야"];
let result6 = array.join("-");
console.log(result6); // "안녕-나는-철수야"

const users2 = "Mike,Jane,Tom,Tomy";
const result7 = users2.split(","); // ,(쉼표)를 기준으로 배열을 만들어줌
console.log(result7); // ["Mike","Jane","Tom","Tomy"]

// Array.isArray()
let user5 = {
  name:"mike",
  age:30
};

let user5List = ["Mike", "Tom", "Jane"];

console.log(typeof user5); // "object"
console.log(typeof user5List); // "object"

console.log(Array.isArray(user5)); // 일반적인 객체이므로 false
console.log(Array.isArray(user5List)); // 배열은 true

// arr.sort() : 배열 재정렬, 배열 자체가 변경되니 주의 , arr.reduce() : 

array = [1,5,4,2,3];
array.sort();
console.log(array); // [1,2,3,4,5]

array = ["d","b","a","c"];
array.sort();
console.log(array); // ["a","b","c","d"]

array = [27,8,5,13]; // 주의!
function fn(a,b){
  console.log(a,b);
  return a-b;
}
array.sort(fn);
console.log(array); // [5,8,13,27]

// 배열의 모든 수 합치기(for, for of, forEach)
array = [1,2,3,4,5];

const result8 = array.reduce((prev, cur)=>{ // 계산값, 현재값
  return prev + cur;
},0) // 초기값은 0

console.log(result8); // 15

userList = [
  {name:"mike",age:30},
  {name:"jane",age:27},
  {name:"tom",age:10},
  {name:"sue",age:26},
  {name:"harry",age:3},
  {name:"steve",age:60}
];

let result9 = userList.reduce((prev,cur)=>{
  if(cur.age > 19){
    prev.push(cur.name);
  }
  return prev;
}, [])

console.log(result9); // 성인들의 이름만 나옴

// 구조 분해 할당(Destructuring assignment) - 배열이나 객체의 속성을 분해해서 그 값을 변수에 담을 수 있게 하는 표현식
users = ['mike','tom','jane'];
let [user6, user7, user8] = users; // let user6 = users[0]; let user7 = users[1]; let user7 = users[2];

console.log(user6);
console.log(user7);
console.log(user8);

let str = "mike-tom-jane";
let [user9,user10,user11] = str.split('-');
console.log(user9);
console.log(user10);
console.log(user11);

let [k,l,m] = [1,2];
console.log(k);
console.log(l);
console.log(m); // undefined

[k=3,l=4,m=5]=[1,2]; // m은 기본값
console.log(k); // 1
console.log(l); // 2
console.log(m); // 5

let [user12, ,user13] = ['mike','tom','jane','tony']; // tom과 tony는 할당되지 않음
console.log(user12); // mike
console.log(user13); // jane

// 바꿔치기
let n = 1;
let o = 2;

[n,o]=[o,n]; // 임시변수(temp)를 사용하지 않아도 됨
console.log(n);
console.log(o);

// 객체 구조 분해
let user14 = {name6 : 'mike', age5:30};
let {name6, age5} = user14; // let name = user.name; let age = user.age;

console.log(name6);
console.log(age5);

let {name6 : newname, age5: newage} = user14; // 변수 이름을 바꿀 수 있음
console.log(newname);
console.log(newage);

// 나머지 매개변수, 전개 구문
function showname(name){ // 인수 전달에 대한 개수 제한이 없음
  console.log(name);
}

showname('mike'); // 'mike'
showname('mike', 'tom'); // ?
showname(); // undefined

// arguments
//   - 함수로 넘어 온 모든 인수에 접근
//   - 함수 내에서 이용 가능한 지역 변수
//   - length / index
//   - Array 형태의 객체
//   - 배열의 내장 메서드 없음(forEach, map)
function showname2(name){
  console.log(arguments.length);
  console.log(arguments[0]);
  console.log(arguments[1]);
}

showname2('mike', 'tom');

// 나머지 매개변수(Rest parameters)
function showname3(...names){
  console.log(names);
}

showname3(); // undefined가 아닌 빈 배열이 나옴
showname3('mike');
showname3('mike', 'tom');

function add(...numbers){
  let result = 0;
  numbers.forEach((num)=>(result+=num));
  console.log(result);
}

add(1,2,3);
add(1,2,3,4,5,6,7,8,9,10);

function User(name, age, ...skills){ // 나머지 매개변수는 항상 마지막에 위치
  this.name = name;
  this.age - age;
  this.skills = skills;
}

const user1 = new User("mike",30,"sgd","sgd");

console.log(user1);

// 전개 구문(Spread syntax) : 배열
let arr1 = [1,2,3];
let arr2 = [4,5,6];
let result10 = [...arr1, ...arr2, 7, 8, 9]; // ...arr1 = 1,2,3, ...arr2 = 4,5,6
console.log(result10); // [1,2,3,4,5,6,7,8,9]

// 클로저(Closure) - 함수와 렉시컬 환경의 조합, 함수가 새성될 당시의 외부 변수를 기억, 생성 이후에도 계속 접근이 가능함
// 어휘적 환경(Lexical Environment)
function makeCounter() {
  let num = 0;
  
  return function() {
    return num++;
  };
}

let counter = makeCounter();

console.log(counter()); // 0
console.log(counter()); // 1
console.log(counter()); // 2

// setTimeout : 일정 시간이 지난 후 함수를 실행
setTimeout(function fn(){
  // console.log(3)
},3000); // 3000은 3초를 의미함

function showname(name){
  console.log(name);
}
// setTimeout(showname, 3000, 'mike'); // 함수, 시간, 인수

// setInterval : 일정 시간 간격으로 함수를 반복
num = 0;
function showTime(){
  console.log(`안녕하세요. 접속한지 ${num++}초가 지났습니다.`);
  if(num > 5){
    clearInterval(tId);}
}

// const tId = setInterval(showTime, 1000);  

// call, apply, bind : 함수 호출 방식과 관계없이 this를 지정할 수 있음
// call - 모든 함수에서 사용할 수 있으며 this를 특정값으로 지정할 수 있음
const mike = {
  name : "Mike"
};

const tom = {
  name : "Tom"
};

function showThisName(){
  console.log(this.name);
}

function update(birthYear, occupation){
  this.birthYear = birthYear;
  this.occupation = occupation;
};

update.call(mike, 1999, 'singer')
console.log(mike);

update.call(tom, 2002, 'teacher')
console.log(tom);

// apply - 매개변수를 처리하는 방법을 제외하면 call과 완전히 같음, call은 매개변수를 직접 받지만, apply는 매개변수를 배열로 받음
const numss = [3, 10, 1, 6, 4];
const minNum = Math.min.apply(null, numss);
// = Math.min.apply(null, [3, 10, 1, 6, 4])
const maxNum = Math.max.call(null, ...numss);
// = Math.min.apply(null, 3, 10, 1, 6, 4)

console.log(minNum);
console.log(maxNum);

// bind - 함수의 this 값을 영구히 바꿀 수 있음
const updateMike = update.bind(mike);
updateMike(1980, "police");
console.log(mike);

const userr = {
  name: "mike",
  showname: function(){
    console.log(`hello, ${this.name}`);
  }
};

userr.showname();
let fn2 = userr.showname;

fn2.call(userr);
fn2.apply(userr);

let boundFn = fn2.bind(userr);

boundFn();

// 상속, prototype
console.log(userr.hasOwnProperty('name')); // true
console.log(userr.hasOwnProperty('age')); // false

