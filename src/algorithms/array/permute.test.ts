import permute from './permute';

test('permute', () => {
  expect(permute('2')).toMatchObject(['a', 'b', 'c']);
  // expect(permute('23')).toMatchObject(['a', 'b', 'c']);
  // expect(permute('234')).toMatchObject(['a', 'b', 'c']);
});
