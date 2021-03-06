// 集合单元测试

import NewSet from './NewSet';

const set = new NewSet();

test('初始化set,isEmpty应为true', () => {
  expect(set.isEmpty()).toBeTruthy();
  expect(set.size()).toBe(0);
});

test('向set实例添加1,2, set不为空, 包含1,2, 但不包含3', () => {
  set.add(1);
  set.add(2);
  expect(set.isEmpty()).toBeFalsy();
  expect(set.has(1)).toBeTruthy();
  expect(set.has(2)).toBeTruthy();
  expect(set.has(3)).toBeFalsy();
});

test('set调用values, 应为[1,2]数组', () => {
  const arr = set.values();
  expect(arr[0]).toBe(1);
  expect(arr[1]).toBe(2);
  expect(arr.length).toBe(2);
});

test('并集', () => {
  const otherSet = new NewSet({ 3: 3, 4: 4 });
  expect(set.union(otherSet)).toMatchObject({ items: { 1: 1, 2: 2, 3: 3, 4: 4 } });
});

test('交集', () => {
  const otherSet = new NewSet({ 3: 3, 4: 4 });
  expect(set.intersection(otherSet)).toMatchObject({ items: {} });
  otherSet.add(1);
  expect(set.intersection(otherSet)).toMatchObject({ items: { 1: 1 } });
});

test('差集', () => {
  const otherSet = new NewSet({ 3: 3, 4: 4 });
  expect(set.difference(otherSet)).toMatchObject({ items: { 1: 1, 2: 2 } });
  otherSet.add(1);
  expect(set.difference(otherSet)).toMatchObject({ items: { 2: 2 } });
});
test('子集', () => {
  const otherSet = new NewSet({ 3: 3, 4: 4 });
  expect(set.isSubsetOf(otherSet)).toBeFalsy();
  otherSet.add(1);
  otherSet.add(2);
  expect(set.isSubsetOf(otherSet)).toBeTruthy();
});
test('set调用clear,isEmpty应为真', () => {
  set.clear();
  expect(set.isEmpty()).toBeTruthy();
  expect(set.size()).toBe(0);
});
