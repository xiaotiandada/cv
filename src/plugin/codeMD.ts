import { IApi } from 'dumi';
import fs from 'fs';
import path from 'path';

const isDS_Store = (fileName: string) => {
  return fileName !== '.DS_Store';
};

// Get all files
const getAllFiles = (path: string): string[] => {
  try {
    const data = fs.readdirSync(path).filter(isDS_Store);
    // console.log(data, data.length)
    return data;
  } catch (err) {
    console.error(err);
    return [];
  }
};

// Read file
const readFile = (path: string): string => {
  try {
    const data = fs.readFileSync(path, 'utf8');
    // console.log(data)
    return data;
  } catch (err) {
    console.error(err);
    return '';
  }
};

// Save To File
const saveToFile = (path: string, content: string | NodeJS.ArrayBufferView): void => {
  try {
    if (fs.existsSync(path)) {
      fs.unlinkSync(path);
    }

    fs.writeFileSync(path, content);
  } catch (err) {
    console.error(err);
  }
};

/**
 * parse filename
 * @param filename
 * @returns
 */
const parseFilename = (filename: string): string => {
  if (!filename) {
    return '';
  }
  return filename.substring(0, filename.lastIndexOf('.'));
};

/**
 * parse file extension
 * @param filename
 * @returns
 */
const parseFileExtension = (filename: string): string => {
  if (!filename) {
    return '';
  }
  return filename.substring(filename.lastIndexOf('.'));
};

// https://github.com/reduxjs/redux/blob/master/src/compose.ts
export const compose = (...fn: Function[]) => {
  if (fn.length === 0) {
    return <T>(arg: T) => arg;
  }

  if (fn.length === 1) {
    return fn[0];
  }

  return fn.reduce(
    (a, b) =>
      (...args: any) =>
        a(b(...args)),
  );
};

// @TODO Released as a separate package
export default (api: IApi) => {
  const basePath = path.join(__dirname, '../../source/leetcode');
  const targetPath = path.join(__dirname, '../../docs/algorithms');

  // 获取文件目录
  const files = getAllFiles(basePath);
  // console.log('files', files)

  // 获取文件内容
  let markdownContent = `---
title: leetcode
order: 1
---
`;

  /**
   * Files Sort
   * @param files
   * @returns
   */
  const filesSort = (files: string[]): string[] =>
    files.sort((a: string, b: string) => {
      const afilename = parseFilename(a);
      const bfilename = parseFilename(b);

      const aName = afilename.split('.')[0];
      const bName = bfilename.split('.')[0];

      if (isNaN(Number(aName)) || isNaN(Number(bName))) {
        return 0;
      }

      return Number(aName) - Number(bName);
    });

  const filesList = compose(filesSort)(files);

  filesList.forEach((file: string) => {
    const fileContent = readFile(path.join(basePath, file));
    const extension = parseFileExtension(file);
    const filename = parseFilename(file);

    markdownContent += `
### ${filename}
\`\`\`${extension.slice(1)}
${fileContent}
\`\`\`
`;
  });

  // 保存为 Markdown
  // console.log('markdownContent', markdownContent);
  saveToFile(path.join(targetPath, 'leetcode.md'), markdownContent);
};
