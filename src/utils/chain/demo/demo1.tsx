import React from 'react';
import { shortenString } from '../index';

const address = '0x8Dd609188f6479732AC5aEa52e53264FF8Dc0Eb6';

export default () => {
  return (
    <div>
      <div>address: {address}</div>
      <div>address: {shortenString(address)}</div>
    </div>
  );
};
