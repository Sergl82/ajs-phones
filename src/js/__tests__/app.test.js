import Validator from '../app';

test('should return numbers', () => {
  expect(Validator.numberPhone('8 (927) 000-00-00')).toBe('+79270000000');
  expect(Validator.numberPhone('+7 960 000 00 00')).toBe('+79600000000');
  expect(Validator.numberPhone('+86 000 000 0000')).toBe('+860000000000');
});
