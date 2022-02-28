import { hotPatato, recentCounter } from './Example';

test('hotPatato', () => {
  const names = ['a', 'b', 'c'];
  expect(hotPatato(names, 2)).toBe('b');
  expect(hotPatato(names, 7)).toBe('b');
});

test('recentCounter', () => {
  const ins = recentCounter();
  expect(ins.ping(1)).toBe(1);
  expect(ins.ping(100)).toBe(2);
  expect(ins.ping(3001)).toBe(3);
  expect(ins.ping(3002)).toBe(3);
});
