import MinHeap from './MinHeap';

const minHeap = new MinHeap<number>();

minHeap.insert(4);
minHeap.insert(3);
minHeap.insert(2);
minHeap.insert(1);
// console.log(minHeap.heap);
minHeap.pop();
// console.log(minHeap.heap);
test('MinHeap 堆顶', () => {
  expect(minHeap.peek()).toBe(2);
});
