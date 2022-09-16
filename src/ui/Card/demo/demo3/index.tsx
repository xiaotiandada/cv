import classNames from 'classnames';
import React from 'react';
import styles from './index.less';

const Card = () => {
  return (
    <div className={classNames(styles['slide-content'], styles['with-shadow'])}>
      <img
        src="https://assets-global.website-files.com/6255fec6bbcc848d9a583a56/62f5ac54a8ba3e1691b4736b_deviants-factions.jpg"
        loading="lazy"
        alt=""
        sizes="(max-width: 991px) 94vw, 100vw"
        srcSet="https://assets-global.website-files.com/6255fec6bbcc848d9a583a56/62f5ac54a8ba3e1691b4736b_deviants-factions-p-500.jpg 500w, https://assets-global.website-files.com/6255fec6bbcc848d9a583a56/62f5ac54a8ba3e1691b4736b_deviants-factions-p-800.jpg 800w, https://assets-global.website-files.com/6255fec6bbcc848d9a583a56/62f5ac54a8ba3e1691b4736b_deviants-factions.jpg 859w"
        className={styles['slider-img']}
      />
      <div className={styles['lens-15']}></div>
      <div className={styles['powered-content']}>
        <div className={styles['powerered-category']}>Trading Card Game</div>
        <div className={styles['powered-logo-wrapper']}>
          <img
            src="https://assets-global.website-files.com/6255fec6bbcc848d9a583a56/62f5ac6d9e02bc5b2b70a363_ISO%20DEVIANTSFACTIONS%20white.png"
            loading="lazy"
            alt=""
            className={styles['powered-logo']}
          />
        </div>
        <div className={styles['powered-btn-wrapper']}>
          <a
            href="http://www.immutable.com/blog/deviants-factions-partner-profile"
            className={styles['btn']}
          >
            View Project
          </a>
        </div>
      </div>
    </div>
  );
};

export default Card;
