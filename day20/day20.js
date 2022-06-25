// 문제20 : 몫과 나머지
// 공백으로 구분하여 두 숫자가 주어집니다.
// 두번째 숫자로 첫번째 숫자를 나누었을 때 그 몫과 나머지를 공백으로 구분하여 출력하세요.

// 입출력
// 입력 : 10 2
// 출력 : 5 0

function getQuotientAndRemainder(str) {
    const arr = str.split(" ");

    const quotient = parseInt(arr[0]) / parseInt(arr[1]);
    const remainder = parseInt(arr[0]) % parseInt(arr[1]);

    return `${quotient} ${remainder}`
}

console.log(getQuotientAndRemainder("10 2"))
console.log(getQuotientAndRemainder("20 2"))