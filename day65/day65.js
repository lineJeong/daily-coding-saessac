// 문제65 : 변형된 리스트
// a = [1, 2, 3, 4]
// b = ["a", "b", "c" ,"d"]
// 이런 리스트가 있을 때 [[1, a], [b, 2], [c, 3],[d, 4]] 이런 식으로 a, b 리스트가 번갈아가면서 출력되게 해주세요.

function mergedList(a, b) {
  const result = [];

  for (let i = 0; i < a.length; i++) {
    if (i % 2) {
      result.push([b[i], a[i]]);
    } else {
      result.push([a[i], b[i]]);
    }
  }

  return result;
}

const a = [1, 2, 3, 4];
const b = ["a", "b", "c", "d"];

console.log(mergedList(a, b));
