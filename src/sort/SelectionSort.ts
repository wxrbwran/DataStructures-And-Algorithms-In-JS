// import { swap } from '../utils';
// O(n^2)
// 选择排序
function selectionSort(array: number[]) {
  const { length } = array;
  let indexMin;
  for (let i = 0; i < length - 1; i++) {
    indexMin = i;
    for (let j = i; j < length; j++) {
      if (array[indexMin] > array[j]) {
        indexMin = j;
      }
    }
    if (i !== indexMin) {
      [array[i], array[indexMin]] = [array[indexMin], array[i]];
    }
  }
  return array;
}

export default selectionSort;
