// 문제16 : 로꾸거
// 문장이 입력되면 거꾸로 출력하는 프로그램을 만들어 봅시다.

// 임출력
// 입력 : 거꾸로
// 출력 : 로꾸거

function reverseText(str) {
    let result = ""
    for (let i = str.length - 1; i >= 0; i--) {
        result = result + str[i];
    }
    return result;
}

console.log(reverseText("거꾸로"))