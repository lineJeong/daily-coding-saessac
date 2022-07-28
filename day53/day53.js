// 문제53 : 괄호 문자열
// 괄호 문자열이란 괄화 기호인 '{', '}', '[', ']', '(', ')'와 같은 것을 말한다.
// 그중 괄호의 모양이 바르게 구성된 문자열을 바른 문자열, 그렇지 않은 문자열을 바르지 않은 문자열이라고 부르도록 하자.

// (())와 같은 문자열은 바른 문자열이지만 ()())와 같은 문자열은 바르지 않은 문자열이다.
// (해당 문제에서는 소괄호만 판별하지만, 중괄호와 대괄호까지 판별해 보세요.)

// 입력으로 주어진 괄호 문자열이 바른 문자열인지 바르지 않은 문자열인지 "YES와 "NO"로 구분된 문자열을 출력해보자.

// function balancedBrackets(brackets) {
//   const stack = [];

//   for (let i = 0; i < brackets.length; i++) {
//     let bracket = brackets[i];

//     if (bracket === "(" || bracket === "{" || bracket === "[") {
//       stack.push(bracket);
//     } else if (bracket === ")" && stack[stack.length - 1] === "(") {
//       stack.pop();
//     } else if (bracket === "}" && stack[stack.length - 1] === "{") {
//       stack.pop();
//     } else if (bracket === "]" && stack[stack.length - 1] === "[") {
//       stack.pop();
//     } else return "NO"; // 닫는 괄호 중, 여는 괄호와 대치되지 않는 모든 경우
//   }

//   return stack.length === 0 ? "YES" : "NO";
// }

const balancedBrackets = function (str) {
  const stack = [];
  const opener = {
    "{": "}",
    "[": "]",
    "(": ")",
  };
  const closer = "}])";

  for (let i = 0; i < str.length; i++) {
    if (str[i] in opener) {
      stack.push(str[i]);
    } else if (closer.includes(str[i])) {
      const top = stack.pop();
      const pair = opener[top];
      if (pair !== str[i]) {
        return "NO";
      }
    }
  }

  return stack.length === 0 ? "YES" : "NO";
};

console.log(balancedBrackets("(({[]}{}()))"));
