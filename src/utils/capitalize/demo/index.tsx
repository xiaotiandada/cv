import React from 'react';
import { capitalize } from '../index';

const str = 'hello';

export default () => {
  return (
    <div>
      <div>old string: {str}</div>
      <div>new string: {capitalize(str)}</div>
    </div>
  );
};
