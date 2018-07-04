import {getRank, getSuit} from './get-rank-suit';

test('should return the right rank', () => {
  expect(getRank('c7')).toEqual('7');
  expect(getRank('sA')).toEqual('A');
  expect(getRank('h4')).toEqual('4');
  expect(getRank('d10')).toEqual('10');
});

test('should return the right rank', () => {
  expect(getSuit('c7')).toEqual('clubs');
  expect(getSuit('sA')).toEqual('spades');
  expect(getSuit('h4')).toEqual('hearts');
  expect(getSuit('d10')).toEqual('diamonds');
});
