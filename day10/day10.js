// 문제 10 : 별 찍기
// 크리스마스 날, 은비는 친구들과 함께 파티를 하기로 했습니다.
// 그런데, 크리스마스 트리를 사는 것을 깜빡하고 말았습니다.
// 온 가게를 돌아다녀 봤지만 크리스마스 트리는 모두 품절이었습니다.
// 하는 수 없이 은비는 프로그래밍으로 트리를 만들기로 합니다.

// 은비를 위해 프로그램을 작성해 주세요.

function programmingTree(num) {
    let result = "";

    for (let i = 1; i <= num; i++) {
        let stars = "";
        for (let j = 1; j <= num - i; j++) {
            stars = stars + " ";
        }
        for (let n = 1; n <= 2 * i - 1; n++) {
            stars = stars + "*";
        }
        result = result + stars + '\n'
    }
    return result;
}

// function programmingTree(num) {
//     let result = "";

//     for (let i = 0; i < num; i++) {
//         let stars = "";
//         for (let j = 0; j < num - i - 1; j++) {
//             stars = stars + " ";
//         }
//         for (let n = 0; n < 2 * (i + 1) - 1; n++) {
//             stars = stars + "*";
//         }
//         result = result + stars + '\n'
//     }
//     return result;
// }

console.log(programmingTree(5));


//     *
//    ***
//   *****
//  *******
// *********

// 4 3 2 1 0

// 0 1 2 3 4

// 1 3 5 7 9