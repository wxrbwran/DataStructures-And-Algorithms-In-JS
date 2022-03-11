import { Graph as graph, dfs, bfs } from './Graph';

test('dfs', () => {
  dfs(0, graph);
  expect(1).toBeTruthy();
});

test('bfs', () => {
  bfs(0, graph);
  expect(1).toBeTruthy();
});
