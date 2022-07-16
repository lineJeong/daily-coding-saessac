// 문제42 : 2020년
// 2020년 1월 1일은 수요일입니다. 2000년 a월 b일은 무슨 요일일까요?
// 두 수 a, b를 입력받아 2020년 a월 b일이 무슨요일인지 리턴하는 함수 solution을 완성하세요.
// 요일의 이름은 일요일부터 월요일까지 SUN, MON, TUE, WED, THU, FRI, SAT 입니다.

// 예를 들어 a=5, b=24라면 5월 24일은 일요일이므로 문자열 'SUN'을 반환하세요

// 제한조건
// 2020년은 윤년입니다
// 2020년 a월 b일은 실제로 있는 날입니다.

function getDayOfWeekIn2020(a, b) {
    const dayOfWeek = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'];
    const dayIdx = new Date(`${2020}-${a}-${b}`).getDay();

    return dayOfWeek[dayIdx];
}

console.log(getDayOfWeekIn2020(5, 24))