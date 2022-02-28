// O(n+k)
function countingSort(array: number[]) {
  if (array.length < 2) {
    return array;
  }
  const maxValue = Math.max.apply(null, array);
  const counts = new Array(maxValue + 1);
  array.forEach((element: number) => {
    if (!counts[element]) {
      counts[element] = 0;
    }
    counts[element]++;
  });
  let sortedIndex = 0;
  counts.forEach((count, i) => {
    while (count > 0) {
      array[sortedIndex++] = i;
      count--;
    }
  });
  return array;
}

export default countingSort;
