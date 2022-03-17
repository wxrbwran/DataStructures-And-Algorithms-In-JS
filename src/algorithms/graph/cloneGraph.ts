// 克隆图
// leetcode 133
//
// 时间O(n) 空间O(n)
class Node {
  public val: number;

  public neighbors: Node[];

  constructor(val?: number, neighbors?: Node[]) {
    this.val = val || 0;
    this.neighbors = neighbors || [];
  }
}
export default function cloneGraph(node: Node): Node | undefined {
  if (!node) {
    return;
  }
  const visited = new Map();
  const dfs = (n: Node) => {
    const nCopy = new Node(n.val);
    visited.set(n, nCopy);
    (n.neighbors || []).forEach((ne: Node) => {
      if (!visited.has(ne)) {
        dfs(ne);
      }
      nCopy.neighbors.push(visited.get(ne));
    });
  };
  dfs(node);
  return visited.get(node);
}
