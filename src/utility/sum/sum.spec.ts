import { sum } from './sum';

describe('sum', () => {
  test('1 + 2 = 3', () => {
    expect(3).toEqual(sum(1, 2));
  });
});