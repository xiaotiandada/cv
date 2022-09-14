import React, { useState } from 'react';
import useReRender from '../index';

export default function () {
  const [time, setTime] = useState('0');
  const { visible } = useReRender(time);

  console.log('render');

  return (
    <div>
      <div>visible: {String(visible)}</div>
      <div>time: {String(time)}</div>
      <br />
      <button onClick={() => setTime(String(Date.now()))}>Set time</button>
    </div>
  );
}
