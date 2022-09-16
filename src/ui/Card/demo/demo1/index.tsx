import React from 'react';
import styles from './index.less';

const src =
  'https://lh3.googleusercontent.com/kAQkLdqLgGCwfziMoYr8EypmnRVF82l8ns0dr27iCLGAVwq5f3w7cxhNOFx3veyPqxNkc3HY0bjFHYO_r_9AdnPCL46SAT6Y1NrIJg=w289';

const id = '#1';

const Card = () => {
  return (
    <div className={styles['u-card']}>
      <img src={src} />
      <span>{id}</span>
    </div>
  );
};

export default Card;
