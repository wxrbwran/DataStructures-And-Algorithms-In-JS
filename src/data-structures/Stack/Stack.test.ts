import Stack from './Stack';

const stack = new Stack();

test('初始化Stack,isEmpty应为true', () => {
  expect(stack.isEmpty()).toBeTruthy();
});

test('向stack实例添加item', () => {
  stack.push(1);
  stack.push(2);
  expect(stack.isEmpty()).toBeFalsy();
  expect(stack.peek()).toBe(2);
  expect(stack.toString()).toBe('12');
});

test('stack取出item', () => {
  expect(stack.pop()).toBe(2);
});

test('stack调用clear,isEmpty应为真', () => {
  stack.clear();
  expect(stack.isEmpty()).toBeTruthy();
});
