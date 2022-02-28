import bubbleSort from './BubbleSort';

const arr = [2, 5, 7, 8, 0, 1];
const sorted = [0, 1, 2, 5, 7, 8];
test('sort', () => {
  const handled = bubbleSort(arr);
  // console.log(handled);
  expect(handled).toMatchObject(sorted);
});
