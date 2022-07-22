// 문제48 : 대소문자 바꿔서 출력하기
// 문자열이 주어지면 대문자와 소문자를 바꿔서 출력하는 프로그램을 작성하세요.

function convertUpperAndLower(letter) {
  let result = "";

  for (let i = 0; i < letter.length; i++) {
    if (letter[i].toUpperCase() === letter[i]) {
      result += letter[i].toLowerCase();
    } else {
      result += letter[i].toUpperCase();
    }
  }
  return result;
}

console.log(convertUpperAndLower("abcdABCD"));
