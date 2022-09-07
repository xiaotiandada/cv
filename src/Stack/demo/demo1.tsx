import React from 'react';
import styles from '../index.less';

const Stack = () => {
  return (
    <div>
      <div className={styles['l-stack-column']}>
        <button className="u-btn">Button</button>
        <button className="u-btn">Button</button>
        <button className="u-btn">Button</button>
      </div>
      <br />
      <div className={styles['l-stack-row']}>
        <button className="u-btn">Button</button>
        <button className="u-btn">Button</button>
        <button className="u-btn">Button</button>
      </div>
    </div>
  );
};

export default Stack;
