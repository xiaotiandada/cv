import { IApi } from 'dumi';
import fs from 'fs';
import path from 'path';

const isDSStore = (fileName: string) => !/\.DS_Store$/.test(fileName);

// Get all files
const getAllFiles = (dirPath: string): string[] => {
  try {
    const files = fs.readdirSync(dirPath).filter(isDSStore);
    return files;
  } catch (err) {
    console.error(err);
    return [];
  }
};

// Read file
const readFile = async (filePath: string): Promise<string> => {
  try {
    const data = await fs.promises.readFile(filePath, 'utf8');
    return data;
  } catch (err) {
    console.error(err);
    return '';
  }
};

// Save To File
const saveToFile = async (
  filePath: string,
  content: string | NodeJS.ArrayBufferView,
): Promise<void> => {
  try {
    if (fs.existsSync(filePath)) {
      await fs.promises.unlink(filePath);
    }

    await fs.promises.writeFile(filePath, content);
  } catch (err) {
    console.error(err);
  }
};

/**
 * Parse file name and extension
 * @param filename
 * @returns
 */
const parseFileName = (filename: string): { name: string; extension: string } => {
  const match = filename.match(/(.*)\.(.*)/);

  return {
    name: match ? match[1] : '',
    extension: match ? match[2] : '',
  };
};

/**
 * Sort files by file name
 * @param files
 * @returns
 */
const sortByFileName = (files: string[]): string[] =>
  files.sort((a: string, b: string) => {
    const { name: aName } = parseFileName(a);
    const { name: bName } = parseFileName(b);

    if (isNaN(Number(aName)) || isNaN(Number(bName))) {
      return 0;
    }

    return Number(aName) - Number(bName);
  });

// @TODO Released as a separate package
export default async (api: IApi) => {
  const basePath = path.join(__dirname, '../../source/leetcode');
  const targetPath = path.join(__dirname, '../../docs/algorithms');

  // Get all files
  const files = getAllFiles(basePath);
  // console.log('files', files)

  // get file contents
  let markdownContent = `---
title: leetcode
order: 1
---
`;

  // Sort files by file name
  const filesList = sortByFileName(files);

  for (const file of filesList) {
    const fileContent = await readFile(path.join(basePath, file));
    const { name, extension } = parseFileName(file);

    markdownContent += `
### ${name}
\`\`\`${extension}
${fileContent}
\`\`\`
`;
  }

  await saveToFile(path.join(targetPath, 'leetcode.md'), markdownContent);
};
