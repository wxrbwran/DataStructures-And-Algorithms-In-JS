// 邻接表
export const Graph = {
  0: [1, 2],
  1: [2],
  2: [0, 3],
  3: [3],
};
// 深度优先遍历
// 1. 访问根节点
// 2. 对根节点未访问过的相邻节点进行dfs
export const dfs = (graph: Record<number, number[]>, visited: any[] = []) => {
  Object.keys(graph).forEach((node) => {
    if (!visited.includes(node)) {
      console.log(node);
      visited.push(node);
      dfs(graph[node], visited);
    }
  });
};

// dfs(Graph, []);
