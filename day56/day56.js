// 문제56 : 객체의 함수 응용
// 다음의 객체가 주어졌을 때 한국의 면적과 가장 비슷한 국가와 그 차이를 출력하세요.

// 데이터
nationWidth = {
  Korea: 220877,
  Russia: 17098242,
  China: 9596961,
  France: 543965,
  Japan: 377915,
  England: 242900,
};

// 출력
// England 22023

const kr = nationWidth.Korea; // 한국의 면적 (기준)
let result = Math.max(...Object.values(nationWidth)) - kr; // 최대 면적 차이
let nation;

for (let country in nationWidth) {
  if (country === "Korea") continue; // Korea 무시

  // 면적 차이가 가장 작게 차이 나는 결과 찾기
  const output = Math.abs(nationWidth[country] - kr);
  if (result > output) {
    result = output;
    nation = country;
  }
}

console.log(nation, result);
