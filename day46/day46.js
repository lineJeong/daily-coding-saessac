// 문제46 : 각 자리수의 합 2
// 1부터 20까지의 모든 숫자를 일렬로 놓고 모든 자릿수의 총 합을 구하세요.

// 예를 들어 10부터 15까지의 모든 숫자를 일렬로 놓으면 101112131415이고
// 각 자리의 숫자를 더하면 21입니다. (1+0+1+1+1+2+1+3+1+4+1+5 = 21)

const nums = "1234567891011121314151617181920";
const SumOfNums = nums.split("")
    .map(num => (parseInt(num)))
    .reduce((a, b) => a + b)

console.log(SumOfNums)

// function getSumOfNumSInARow(startNum, endNum) {
//     let NumsInARow = '';
//     let result = 0;

//     for (let i = startNum; i <= endNum; i++) {
//         NumsInARow += i
//     }

//     for (let i = 0; i < NumsInARow.length; i++) {
//         result += parseInt(NumsInARow[i])
//     }

//     return result;
// }

// console.log(getSumOfNumSInARow(1, 20))