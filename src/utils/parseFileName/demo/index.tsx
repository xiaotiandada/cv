import React from 'react';
import { parseFileName } from '../index';

const filename = 'test.t1.t2.png';

export default () => {
  return (
    <div>
      <div>name: {filename}</div>
      <div>filename: {JSON.stringify(parseFileName(filename))}</div>
    </div>
  );
};
