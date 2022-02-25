import Dictionary from './Dictionary';

const dictionary = new Dictionary();

test('初始化dictionary,isEmpty应为true, size为0', () => {
  expect(dictionary.isEmpty()).toBeTruthy();
  expect(dictionary.size()).toBe(0);
});

test('向dictionary实例添加数据', () => {
  dictionary.set('Gandalf', 'gandalf@email.com');
  dictionary.set('John', 'johnsnow@email.com');
  dictionary.set('Tyrion', 'tyrion@email.com');
  expect(dictionary.isEmpty()).toBeFalsy();
  expect(dictionary.has('Gandalf')).toBeTruthy();
  expect(dictionary.get('John')).toBe('johnsnow@email.com');
  expect(dictionary.has('John1')).toBeFalsy();
  expect(dictionary.get('John1')).toBeFalsy();
  expect(dictionary.size()).toBe(3);
  // console.log(dictionary.toString());
});

test('dictionary调用clear,isEmpty应为真', () => {
  dictionary.clear();
  expect(dictionary.isEmpty()).toBeTruthy();
  expect(dictionary.size()).toBe(0);
});
