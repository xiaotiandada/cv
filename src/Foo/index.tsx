/**
 * iframe: true // 设置为数值可控制 iframe 高度
 */

import React from 'react';

export default ({ title }: { title: string }) => (
  <div>
    <button className="u-btn">Button</button>
    <h1>{title}</h1>
  </div>
);
