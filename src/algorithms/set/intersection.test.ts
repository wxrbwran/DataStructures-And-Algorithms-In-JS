import intersection from './intersection';

test('intersection 交集', () => {
  // console.log(instanceOf([], Object));
  expect(intersection([1, 2, 3], [2, 3, 3])).toMatchObject([2, 3]);
});
