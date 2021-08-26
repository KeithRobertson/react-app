import Util from './Util';

test('increment of 1 is 2', () => {
  expect(Util.increment(1)).toBe(2);
});

test('increment of field is 1', () => {
  let util = new Util();
  expect(util.increment()).toBe(1);
});