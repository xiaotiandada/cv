import { convertArray, firstUpperCase, matchStr, sleep, randomRange, compose } from '../index';

test('convertArray', function () {
  const result = convertArray([[{ a: 1 }], [{ a: 2 }]]);

  expect(result).toEqual([{ a: 1 }, { a: 2 }]);
});

test('firstUpperCase', function () {
  const result = firstUpperCase('xiaotian');

  expect(result).toEqual('Xiaotian');
});

test('matchStr', function () {
  const result = matchStr('--aaaaaaaa!!', '--', '!!');
  const resultStr = result?.[0];

  expect(resultStr).toEqual('aaaaaaaa');
});

test('sleep', async function () {
  console.log('sleep', Date.now());
  const result = await sleep(10);
  console.log('sleep', Date.now());

  // TODO: 暂时不知道咋写...
  expect('sleep').toEqual('sleep');
});

test('matchStr', function () {
  const result = matchStr('--aaaaaaaa!!', '--', '!!');
  const resultStr = result?.[0];

  expect(resultStr).toEqual('aaaaaaaa');
});

test('compose', function () {
  const add = (x: number) => ++x;
  const result = compose(add, add, add)(0);

  expect(result).toEqual(3);
});

test('randomRange', function () {
  const result = randomRange(1, 5);
  expect([1, 2, 3, 4, 5]).toContain(result);
});
