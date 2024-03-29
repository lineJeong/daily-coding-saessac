// 문제73 : 최단 경로 찾기
// 다음과 같이 노드의 연결 관계가 리스트 형태로 주어집니다. 그다음 경로를 구할 두 정점이 공백으로 구분되어 주어질 것입니다.

// 두 정점 사이를 이동할 수 있는 최단 거리를 출력하는 프로그램을 작성해 주세요.

// 이때 최단 거리란, 정점의 중복 없이 한 정점에서 다른 정점까지 갈 수 있는 가장 적은 간선의 수를 의미합니다.

// 데이터
const graph = {
  A: ["B", "C"],
  B: ["A", "D", "E"],
  C: ["A", "F"],
  D: ["B"],
  E: ["B", "F"],
  F: ["C", "E"],
};

// 입력
// A F

// 출력
// 2

function getShortestPath(from, to) {
  let queue = [from];
  let visited = [from];
  let count = -1;

  while (queue.length > 0) {
    count += 1;

    for (let i = 0; i < queue.length; i++) {
      let node = queue.splice(0, 1);

      if (node == to) {
        return count;
      }

      for (let next in graph[node]) {
        if (!visited.includes(graph[node][next])) {
          visited.push(graph[node][next]);
          queue.push(graph[node][next]);
        }
      }
    }
  }
}

console.log(getShortestPath("A", "F"));
