import React from 'react';
import { parseFilename } from '../index';

const filename = 'test.t1.t2.png';

export default () => {
  return (
    <div>
      <div>name: {filename}</div>
      <div>filename: {parseFilename(filename)}</div>
    </div>
  );
};
