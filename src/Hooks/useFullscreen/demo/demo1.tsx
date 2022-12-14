/**
 * title: Default usage
 * desc: Use ref to set elements that need full screen
 *
 * title.zh-CN: 基础用法
 * desc.zh-CN: 使用 ref 设置需要全屏的元素
 */

import React, { useRef } from 'react';
import useFullscreen from '../index';

export default () => {
  const ref = useRef(null);
  const { iosFullscreen, isFullscreen, handleFullscreen } = useFullscreen({
    ref,
  });
  return (
    <div ref={ref} style={{ background: 'white' }}>
      <div style={{ marginBottom: 16 }}>{isFullscreen ? 'Fullscreen' : 'Not fullscreen'}</div>
      <div style={{ marginBottom: 16 }}>isFullscreen: {String(isFullscreen)}</div>
      <div style={{ marginBottom: 16 }}>iosFullscreen: {String(iosFullscreen)}</div>
      <div>
        <button type="button" onClick={handleFullscreen}>
          handleFullscreen
        </button>
      </div>
    </div>
  );
};
