// 문제 43 : 10진수를 2진수로

// 우리가 흔히 사용하는 숫자 1, 8, 19, 28893 등등...은 10진수 체계입니다.
// 이를 컴퓨터가 알아 들을 수 있는 2진수로 바꾸려고 합니다. 어떻게 해야 할까요?

// 예를들어 13은 2^3 + 2^2 + 2^0 = 13 이기 때문에 1101으로 표현합니다.

// 사용자에게 숫자를 입력받고 이를 2진수로 바꾸고 그 값을 출력해주세요.

// function getBinaryNumber(num) {
//     let result = "";

//     function recur(n) {
//         if (n === 0) return; // base case
//         else {
//             recur(Math.floor(n / 2));
//             result = result + (n % 2);
//         }
//     }
//     recur(num)
//     return parseInt(result);
// }

function getBinaryNumber(num) {
    let result = "";

    while (num >= 0) {
        result = result + (num % 2)
        num = Math.floor(num / 2)
        if (num === 0) break;
    }

    return parseInt(result);
}

console.log(getBinaryNumber(13))