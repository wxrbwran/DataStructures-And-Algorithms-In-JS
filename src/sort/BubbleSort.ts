// import { swap } from '../utils';
// 冒泡排序
// O(n^2)
function bubbleSort(array: number[]) {
  const { length } = array;
  for (let i = 0; i < length; i++) {
    for (let j = 0; j < length - i; j++) {
      if (array[j] > array[j + 1]) {
        [array[j], array[j + 1]] = [array[j + 1], array[j]];
      }
    }
  }
  return array;
}
// bubbleSort([5, 4, 3, 2, 1]);
export default bubbleSort;
