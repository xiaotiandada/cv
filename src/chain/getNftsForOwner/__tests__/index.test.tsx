import { shortenString, shortenIfAddress, addressEqual } from '../index';

test('shortenString', function () {
  const result = shortenString('0x8Dd609188f6479732AC5aEa52e53264FF8Dc0Eb6');

  expect(result).toEqual('0x8Dd6...0Eb6');
});

test('shortenIfAddress', function () {
  const result = shortenIfAddress('0x8Dd609188f6479732AC5aEa52e53264FF8Dc0Eb6');

  expect(result).toEqual('0x8Dd6...0Eb6');
});

test('addressEqual', function () {
  const result = addressEqual(
    '0x8Dd609188f6479732AC5aEa52e53264FF8Dc0Eb6',
    '0x8Dd609188f6479732AC5aEa52e53264FF8Dc0Eb6',
  );

  expect(result).toBeTruthy();
});
