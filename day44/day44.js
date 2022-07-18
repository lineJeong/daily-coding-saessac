// 문제44 : 각 자리수의 합
// 사용자가 입력한 양의 정수의 각 자리수의 합을 구하는 프로그램을 만들어주세요.

// 예를들어
// 18234 = 1+8+2+3+4이고 정답은 18입니다.
// 3849 = 3+8+4+9이고 정답은 24입니다.

// 입출력
// 입력 : 18234
// 출력 : 18

// 입력 : 3849
// 출력 : 24

// function getSumOfEachDigit(str) {
//     let result = 0

//     for (let i = 0; i < num.length; i++) {
//         result += parseInt(num[i])
//     }

//     return result;
// }

// console.log(getSumOfEachDigit('18234'))
// console.log(getSumOfEachDigit('3849'))


function getSumOfEachDigit(num) {
    let str = num + "";

    let head = parseInt(str[0]);
    let tail = parseInt(str.slice(1));

    if (!tail) return head;

    return head + getSumOfEachDigit(tail)
}

console.log(getSumOfEachDigit(18234))
console.log(getSumOfEachDigit(3849))
