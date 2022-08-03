// 문제59 : 빈칸채우기
// 총 문자열의 길이는 50으로 제한하고 사용자가 문자열을 입력하면 그 문자열을 가운데 정렬을 해주고, 나머지 빈 부분에는 '='을 채워 넣어주세요.

function fillBlank(str) {
  const length = str.length;
  const startIdx = 25 - Math.floor(length / 2);
  let result = "";
  let idx = 0;

  for (let i = 0; i < 50; i++) {
    if (i >= startIdx && i < startIdx + length) {
      result += str[idx];
      idx++;
    } else {
      result += "=";
    }
  }

  return result;
}

// function fillBlank(str) {
//   let half = str.padStart(25 + Math.floor(str.length / 2), "=");
//   return half.padEnd(50, "-");
// }

console.log(fillBlank("hi"));
