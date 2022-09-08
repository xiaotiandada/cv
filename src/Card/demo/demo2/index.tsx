import React from 'react';
import styles from './index.less';

const Card = () => {
  return (
    <div className={styles['u-stat-card']}>
      <div className={styles['stat-title']}>The only gas-free minting platform</div>
      <div className={styles['stat-number']}>32,959,701</div>
      <div className={styles['stat-text']}>NFTs minted this year. $0 in gas.</div>
    </div>
  );
};

export default Card;
