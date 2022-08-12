// 문제68 : 버스 시간표
// 학교가 끝난 지원이는 집에 가려고 합니다. 학교 앞에 있는 버스 시간표는 너무 복잡해서 버스 도착 시간이 몇 분 남았는지 알려주는 프로그램을 만들고 싶습니다.

// 버스 시간표와 현재 시간이 주어졌을 때 버스 도착 시간이 얼마나 남았는지 알려주는 프로그램을 만들어주세요.

// - 버스 시간표와 현재 시간이 입력으로 주어집니다.
// - 출력 포맷은 "00시 00분"입니다.
// - 만약 1시간 3분이 남았다면 "01시간 03분"으로 출력해야 합니다.
// - 버스 시간표에 현재 시간보다 이전인 버스가 있다면 "지나갔습니다."라고 출력합니다.

// 입력
// ["12:30", "13:20", "14:13"]
// "12:40"

// 출력
// ["지나갔습니다.", "00시간 40분", "01시간 33분"]

function getBusWaitingTime(timetable, now) {
  const result = [];
  const convertedNow = parseInt(now.slice(0.2)) * 60 + parseInt(now.slice(3));

  for (let i = 0; i < timetable.length; i++) {
    let temp = "";
    let convertedTimtable =
      parseInt(timetable[i].slice(0.2)) * 60 + parseInt(timetable[i].slice(3));

    if (convertedTimtable >= convertedNow) {
      let difference = convertedTimtable - convertedNow;
      let hours = String(Math.floor(difference / 60));
      let minutes = String(difference - hours * 60);
      temp = `${hours.padStart(2, "0")}시간 ${minutes.padStart(2, "0")}분`;
      result.push(temp);
    } else {
      temp = "지나갔습니다.";
      result.push(temp);
    }
  }

  return result;
}

// function getBusWaitingTime(timetable, time) {
//   let [hour, min] = time.split(":").map((item) => Number(item));
//   const currentTime = hour * 60 + min;

//   let result = timetable.map((time) => {
//     let [hour, min] = time.split(":").map((item) => Number(item));
//     const busTime = hour * 60 + min;
//     if (busTime < currentTime) {
//       return "지나갔습니다.";
//     } else {
//       const diff = busTime - currentTime;
//       const hour = Math.floor(diff / 60);
//       const min = diff % 60;
//       return `${hour < 10 ? `0${hour}` : hour}시간 ${
//         min < 10 ? `0${min}` : min
//       }분`;
//     }
//   });
//   return result;
// }

console.log(getBusWaitingTime(["12:30", "13:20", "14:13"], "12:40"));
