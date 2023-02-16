import { parseFileName } from '../index';

describe('parseFileName', () => {
  it('should return name and extension of a file', () => {
    const filename = 'test-file.ts';
    const result = parseFileName(filename);
    expect(result).toEqual({ name: 'test-file', extension: 'ts' });
  });

  it('should return empty strings for name and extension when input is not a filename', () => {
    const result = parseFileName('not-a-filename');
    expect(result).toEqual({ name: '', extension: '' });
  });

  it('should return the extension when input has no name', () => {
    const result = parseFileName('.txt');
    expect(result).toEqual({
      name: '',
      extension: 'txt',
    });
  });
});
