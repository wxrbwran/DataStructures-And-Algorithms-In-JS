// O(n^2)
// 插入排序
function insertionSort(array: number[]) {
  const { length } = array;
  let temp;
  for (let i = 1; i < length; i++) {
    let j = i;
    temp = array[i];
    while (j > 0) {
      if (array[j - 1] > temp) {
        array[j] = array[j - 1];
      } else {
        break;
      }
      j--;
    }
    array[j] = temp;
  }
  return array;
}

export default insertionSort;
