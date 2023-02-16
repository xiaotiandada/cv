/**
 * Parse file name and extension
 * @param filename
 * @returns
 */
export const parseFileName = (filename: string): { name: string; extension: string } => {
  const match = filename.match(/(.*)\.(.*)/);

  return {
    name: match ? match[1] : '',
    extension: match ? match[2] : '',
  };
};
