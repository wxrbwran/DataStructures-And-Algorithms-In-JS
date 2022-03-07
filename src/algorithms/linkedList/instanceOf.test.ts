import instanceOf from './instanceOf';

test('instanceOf', () => {
  // console.log(instanceOf([], Object));
  expect(instanceOf([], Object)).toBeTruthy();
  expect(instanceOf({}, Array)).toBeFalsy();
});
