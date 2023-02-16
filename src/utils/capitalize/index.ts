/**
 * Capitalizes the first letter of a string.
 * @param str The string to be capitalized.
 * @returns The capitalized string.
 */
export const capitalize = (str: string): string => {
  if (typeof str !== 'string') {
    throw new Error('Input must be a string');
  }
  return str.charAt(0).toUpperCase() + str.slice(1);
};
