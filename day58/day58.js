// 문제58 : 콤마 찍기
// 원범이는 편의점 아르바이트가 끝난 후 정산을 하고자 합니다. 정산을 빨리하고 집에 가고 싶은 원범이는 프로그램을 만드려고 합니다.

// 숫자를 입력받고 천 단위로 콤마(,)를 찍어주세요.
// 예를 들어, 123456789를 입력 받았으면 123,456,789를 출력해야 한다.

function addComma(num) {
  let str = String(num);
  let lastIdx = str.length - 1;

  let temp = "";
  let result = "";

  for (let i = lastIdx; i >= 0; i--) {
    temp = str[i] + temp;
    if (temp.length === 3) {
      result = "," + temp + result;
      temp = "";
    }
  }
  result = temp + result;
  if (result[0] === ",") result = result.slice(1);

  return result;
}

// function addComma(num) {
//   return num.toLocaleString();
// }

console.log(addComma(12));
console.log(addComma(123));
console.log(addComma(1234));
console.log(addComma(123456));
console.log(addComma(1234567));
