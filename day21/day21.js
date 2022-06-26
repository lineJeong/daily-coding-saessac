// 문제21 : set은 어떻게 만드나요?
// 다음 중 set을 만드는 방법으로 올바른 것을 모두 고르시오.

// 1) var x1 = {1, 2, 3, 5, 6, 7};
// 2) var x2 = {};
// 3) var x3 = new Set('javascript'); 🔥
// 4) var x4 = new Set(range(5));
// 5) var x5 = new Set(); 🔥

// Set 객체는 자료형에 관계 없이 원시 값과 객체 참조 모두 유일한 값을 저장할 수 있습니다.

var mySet = new Set();

console.log(mySet.add(1))
console.log(mySet.add(5))
console.log(mySet.add(5))
console.log(mySet.add('some text'))
var o = { a: 1, b: 2 };
console.log(mySet.add(o));
console.log(mySet.has(o));

