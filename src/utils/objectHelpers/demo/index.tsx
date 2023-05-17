import React from 'react';
import { removeEmpty } from '../index';

const object = {
  a: 'a',
  b: '',
  c: null,
  d: [1, 2],
  e: [],
  f: undefined,
  g: false,
  h: true,
  i: 0,
  j: {},
};

export default () => {
  return (
    <div>
      <div>before: {JSON.stringify(object)}</div>
      <div>after: {JSON.stringify(removeEmpty(object))}</div>
    </div>
  );
};
