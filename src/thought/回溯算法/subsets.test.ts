import subsets from './subsets';

test('子集', () => {
  const arr = [1, 2];
  const res = subsets(arr);
  // console.log(res);
  expect(res).toMatchObject([[], [1], [2], [1, 2]]);
  expect(subsets([])).toMatchObject([[]]);
});
