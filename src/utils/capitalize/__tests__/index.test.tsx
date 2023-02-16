import { capitalize } from '../index';

describe('capitalize', () => {
  it('should capitalize the first letter of a word', () => {
    expect(capitalize('hello')).toBe('Hello');
  });

  it('should handle empty string', () => {
    expect(capitalize('')).toBe('');
  });

  it('should handle strings with only one character', () => {
    expect(capitalize('a')).toBe('A');
  });

  it('should handle strings with already capitalized first letter', () => {
    expect(capitalize('Hello')).toBe('Hello');
  });

  it('should handle strings with non-letter characters as the first character', () => {
    expect(capitalize('123hello')).toBe('123hello');
    expect(capitalize('.hello')).toBe('.hello');
  });
});
