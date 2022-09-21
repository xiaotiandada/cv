import { parseFilename, parseFileExtension } from '../index';

const filename = 'test.t1.t2.png';

test('parseFilename', () => {
  expect(parseFilename(filename)).toEqual('test.t1.t2');
});

test('parseFileExtension', () => {
  expect(parseFileExtension(filename)).toEqual('.png');
});
