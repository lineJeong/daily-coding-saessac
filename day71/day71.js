// 문제71 : 깊이 우선 탐색
// 깊이 우선 탐색이란 목표한 노드를 찾기 위해 가장 우선순위가 높은 자식으로 깊이 들어갔다가 노드가 존재하지 않으면 처음 방문한 노드와 연결된 다른 노드부터 그 자식 노드로 파고드는 검색 방법을 말합니다.

// 다음 과같이 리스트 형태로 노드들의 연결 관계가 주어진다고 할 때 깊이 우선 탐색으로 이 노드들을 탐색 했을 때의 순서를 공백으로 구분하여 출력하세요

const graph = {
  E: ["D", "A"],
  F: ["D"],
  A: ["E", "C", "B"],
  B: ["A"],
  C: ["A"],
  D: ["E", "F"],
};

function dfs(graph, start) {
  const stack = [start];
  const visited = [];

  while (stack.length != 0) {
    let n = stack.pop();
    if (!visited.includes(n)) {
      visited.push(n);
      let x = graph[n].filter((x) => !visited.includes(x));
      for (let i in x) {
        stack.push(x[i]);
      }
    }
  }
  return visited;
}

console.log(dfs(graph, "E"));
