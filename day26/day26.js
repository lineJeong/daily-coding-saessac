// 문제26 : 행성 문저2

// 우리 태양계를 이루는 행성은 수성, 금성, 지구, 화성, 목성, 토성, 천황성, 해왕성이 있습니다.
// 이 행성들의 영어 이름은 Murcury, Venus, Earth, Mars, Jupiter, Saturn, Uranus, Neptune입니다.

// 행성의 한글 이름을 입력하면 영어 이름을 반환하는 프로그램을 만들어 주세요.

function translatePlanetIntoEnglish(planet) {
    let planetInKoean = ['수성', '금성', '지구', '화성', '목성', '토성', '천왕성', '해왕성'];
    let planetInEnglish = ['Murcury', 'Venus', 'Earth', 'Mars', 'Jupiter', 'Saturn', 'Uranus', 'Neptune'];

    return planetInEnglish[planetInKoean.indexOf(planet)];
}

console.log(translatePlanetIntoEnglish('수성'))
console.log(translatePlanetIntoEnglish('금성'))
console.log(translatePlanetIntoEnglish('지구'))
console.log(translatePlanetIntoEnglish('화성'))
console.log(translatePlanetIntoEnglish('목성'))
console.log(translatePlanetIntoEnglish('토성'))
console.log(translatePlanetIntoEnglish('천왕성'))
console.log(translatePlanetIntoEnglish('해왕성'))