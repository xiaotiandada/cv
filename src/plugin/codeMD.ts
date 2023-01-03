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

// @TODO Released as a separate package
export default (api: IApi) => {
  // 编写插件内容
  // console.log('api', api)

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

  files.forEach((file) => {
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
