import React from 'react';
import { firstUpperCase } from '../index';

const str = 'hello';

export default () => {
  return (
    <div>
      <div>old: {str}</div>
      <div>new: {firstUpperCase(str)}</div>
    </div>
  );
};
