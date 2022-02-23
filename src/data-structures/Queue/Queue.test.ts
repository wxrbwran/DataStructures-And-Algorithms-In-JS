import Queue from './Queue';

const queue = new Queue();

test('初始化Queue,isEmpty应为true', () => {
  expect(queue.isEmpty()).toBeTruthy();
});

test('向queue实例添加item', () => {
  queue.enqueue(1);
  queue.enqueue(2);
  expect(queue.isEmpty()).toBeFalsy();
  expect(queue.peek()).toBe(1);
  expect(queue.toString()).toBe('12');
});

test('queue取出item', () => {
  expect(queue.dequeue()).toBe(1);
});

test('queue调用clear,isEmpty应为真', () => {
  queue.clear();
  expect(queue.isEmpty()).toBeTruthy();
});
