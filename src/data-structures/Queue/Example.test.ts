import hotPatato from './Example';

test('hotPatato', () => {
  const names = ['a', 'b', 'c'];
  expect(hotPatato(names, 2)).toBe('b');
  expect(hotPatato(names, 7)).toBe('b');
});
