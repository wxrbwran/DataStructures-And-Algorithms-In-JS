// 链表单元测试

import LinkedList from './LinkedList';

const linkedList = new LinkedList();

test('初始化LinkedList,isEmpty应为true', () => {
  expect(linkedList.isEmpty()).toBeTruthy();
});
// 1 2
test('插入2个元素, size应为2', () => {
  linkedList.push(1);
  linkedList.push(2);
  expect(linkedList.size()).toBe(2);
});
// 1 2 3
test('insertAt(3, 2)', () => {
  expect(linkedList.insert(3, 2).ele).toBe(3);
});

test('indexOf(1), 结果应为0', () => {
  expect(linkedList.indexOf(1)).toBe(0);
});

test('indexOf(3), 结果应为2', () => {
  expect(linkedList.indexOf(3)).toBe(2);
});

test('indexOf(33), 结果应为-1', () => {
  expect(linkedList.indexOf(33)).toBe(-1);
});

test('insertAt(4, 9)', () => {
  expect(() => linkedList.insert(4, 9)).toThrow();
});

test('getEleAt(1)应为2', () => {
  expect(linkedList.getEleAt(1)?.ele).toBe(2);
});

test('position超出时, getEleAt(11)应为undefined', () => {
  expect(linkedList.getEleAt(13)?.ele).toBe(undefined);
});
// 1 2 3
test('删除第1个位置, 结果应为2', () => {
  expect(linkedList.removeAt(1)).toBe(2);
});

// 1 3
test('删除3, 结果应为3', () => {
  expect(linkedList.remove(3)).toBe(3);
});

// 1
test('删除99, 结果应为-1', () => {
  expect(linkedList.remove(99)).toBeFalsy();
});

test('toString, 结果应为"1"', () => {
  expect(linkedList.toString()).toBe('1');
});

test('加入4,9后toString, 结果应为"149"', () => {
  linkedList.push(4);
  linkedList.push(9);
  expect(linkedList.toString()).toBe('149');
});

test('加入undefined后toString, 结果应也为"149"', () => {
  linkedList.push(undefined);
  expect(linkedList.toString()).toBe('149');
});
