// 문제19 : 제곱을 구하자
// 공백으로 구분하여 두 숫자 a와 b가 주어지면, a의 b승을 구하는 프로그램을 작성하세요.

// 1. **
// 2. Math.pow()
// 3. 반복문

function pow1(str) {
    let arr = str.split(" "); // 배열화 안하려면 => str[0], str[2] 사용
    return parseInt(arr[0]) ** parseInt(arr[1]);
}


function pow2(str) {
    let arr = str.split(" ");
    return Math.pow(parseInt(arr[0]), parseInt(arr[1]));
}

function pow3(str) {
    let arr = str.split(" ");

    let result = 1;
    for (let i = 0; i < parseInt(arr[1]); i++) {
        result = result * parseInt(arr[0]);
    }
    return result;
}

console.log(pow1("5 3"));
console.log(pow2("5 3"));
console.log(pow3("5 3"));