/**
 * iframe: true // 设置为数值可控制 iframe 高度
 */

import React from 'react';
import './index.less';

const Button = () => {
  return (
    <div>
      <button className="u-btn">Button</button>
      <button className="u-btn u-btn-primary">Button</button>
      <button className="u-btn u-btn-disabled">Button</button>

      <br />
      <br />

      <button className="u-btn loading">Button</button>
      <button className="u-btn u-btn-primary loading">Button</button>
      <button className="u-btn u-btn-disabled loading">Button</button>

      <br />
      <br />

      <button className="u-btn full">Button</button>
      <button className="u-btn u-btn-primary full">Button</button>
      <button className="u-btn u-btn-disabled full">Button</button>
    </div>
  );
};

export default Button;
