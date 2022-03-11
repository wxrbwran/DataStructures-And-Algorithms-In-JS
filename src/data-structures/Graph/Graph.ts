// 邻接表
export const Graph = {
  0: [1, 2],
  1: [2],
  2: [0, 3],
  3: [5],
  5: [5],
};
// 深度优先遍历
// 1. 访问根节点
// 2. 对根节点未访问过的相邻节点进行dfs
export const dfs = (function () {
  const visited: number[] = [];
  function fn(node: number, graph: Record<number, number[]>) {
    if (!visited.includes(node)) {
      // console.log(node);
      visited.push(node);
      graph[node].forEach((n) => {
        fn(n, graph);
      });
    }
  }
  return fn;
})();

// 广度优先遍历
// 1. 新建一个队列，把根节点入队
// 2. 把队头出队并访问
// 3. 把队头的没访问过的相邻节点入队

export const bfs = (function () {
  const queue: number[] = [];
  const visited: number[] = [];
  function fn(node: number, graph: Record<number, number[]>) {
    queue.push(node);
    while (queue.length) {
      const n = queue.shift() as number;
      if (!visited.includes(n)) {
        console.log(n);
        visited.push(n);
        graph[n].forEach((k) => {
          queue.push(k);
        });
      }
    }
  }
  return fn;
})();
