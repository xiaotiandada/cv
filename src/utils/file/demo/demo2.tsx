import React from 'react';
import { parseFileExtension } from '../index';

const filename = 'test.t1.t2.png';

export default () => {
  return (
    <div>
      <div>name: {filename}</div>
      <div>extension: {parseFileExtension(filename)}</div>
    </div>
  );
};
