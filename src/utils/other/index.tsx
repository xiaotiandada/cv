import { isArray } from 'lodash';

/**
 * 数据格式化 [ [{}], [{}], [{}] ] ===> [ {} ]
 * @param arr 需要处理的数组
 */
export const convertArray = (arr: any[]) => {
  if (isArray(arr[0])) {
    return [].concat(...arr);
  }
  return arr;
};

// compose
// https://github.com/reduxjs/redux/blob/master/src/compose.ts
export const compose = (...fn: Function[]) => {
  if (fn.length === 0) {
    return <T,>(arg: T) => arg;
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

/**
 * sleep
 * @param time number
 * @returns
 */
export const sleep = (time: number) => new Promise((resolve) => setTimeout(resolve, time));

// ------ REG --------
// match 不包含 AB 的字符
export const matchStr = (str: string, left: string, right: string) => {
  const pattern = new RegExp(`(?<=${left}).*?(?=${right})`);
  return str.match(pattern);
};

/**
 * 首字母大写
 * @param param0 string
 * @returns String
 */
export const firstUpperCase = ([first, ...other]: any) => {
  return first.toLocaleUpperCase() + other.join('');
};

/**
 * 范围随机数
 * @param min 最小
 * @param max 最大
 * @returns number
 */

export const randomRange = (min: number, max: number): number =>
  Math.floor(Math.random() * (max - min + 1) + min);
