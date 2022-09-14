import React from 'react';
import useUpdate from '../index';

export default () => {
  const update = useUpdate();

  console.log('update');

  return (
    <>
      <div>Time: {Date.now()}</div>
      <button type="button" onClick={update} style={{ marginTop: 8 }}>
        update
      </button>
    </>
  );
};
