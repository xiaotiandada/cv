import React from 'react';
import styles from './index.less';
import classNames from 'classnames';

type PartnerItem = {
  src: string;
  alt: string;
};

const partnerList: PartnerItem[][] = [
  [
    {
      src: 'https://assets-global.website-files.com/62535c6262b90afd768b9b26/629fdc2126004253841734e1_x-circle.svg',
      alt: 'Immutable X icon',
    },
  ],
  [
    {
      src: 'https://assets-global.website-files.com/62535c6262b90afd768b9b26/629fd97dfc8d732514ffb6a3_Gamestop.svg',
      alt: 'Gamestop logo',
    },
    {
      src: 'https://assets-global.website-files.com/62535c6262b90afd768b9b26/629fd9940ddc54324af5e4d8_Kinguin.svg',
      alt: 'Kinguin icon',
    },
    {
      src: 'https://assets-global.website-files.com/62535c6262b90afd768b9b26/629fdb69a7bfc0417636bf24_icon-logo-green.svg',
      alt: 'icon',
    },
    {
      src: 'https://assets-global.website-files.com/62535c6262b90afd768b9b26/629fd9b09339021fa7ae5986_Rarible.svg',
      alt: 'Rarible icon',
    },
    {
      src: 'https://assets-global.website-files.com/62535c6262b90afd768b9b26/62aaf83dc78813242bba848e_M.png',
      alt: 'logo',
    },
    {
      src: 'https://assets-global.website-files.com/62535c6262b90afd768b9b26/629fd99b23c237dd2a0a48f5_OKX.svg',
      alt: 'OKX icon',
    },
    {
      src: 'https://assets-global.website-files.com/62535c6262b90afd768b9b26/62aaf8655ff3991eb0e32e2a_Logo%20%E2%80%93%20Games%20Studio.svg',
      alt: 'Games Studio logo',
    },
    {
      src: 'https://assets-global.website-files.com/62535c6262b90afd768b9b26/629fd9b6423c1b74718e0bc0_Token-Trove.svg',
      alt: 'Token Trove icon',
    },
  ],
  [
    {
      src: 'https://assets-global.website-files.com/62535c6262b90afd768b9b26/629fdb68260042085c17298c_E%20Sports%20League.svg',
      alt: 'E Sports League icon',
    },
    {
      src: 'https://assets-global.website-files.com/62535c6262b90afd768b9b26/629fdb6923c2376c610a563b_Green%20Parks.svg',
      alt: 'Green park logo',
    },
    {
      src: 'https://assets-global.website-files.com/62535c6262b90afd768b9b26/629fdb69554ad96e7e8bf353_VY%20Worlds.svg',
      alt: 'VY Worlds logo',
    },
    {
      src: 'https://assets-global.website-files.com/62535c6262b90afd768b9b26/62b3c970babdc322ee62214a_Kolex.png',
      alt: 'Kolex logo ',
    },
    {
      src: 'https://assets-global.website-files.com/62535c6262b90afd768b9b26/62aaf88ecac1925036fe2322_v.png',
      alt: 'logo',
    },
    {
      src: 'https://assets-global.website-files.com/62535c6262b90afd768b9b26/629fdb6958b43a6f355933d4_Blocklords.svg',
      alt: 'Blocklords icon',
    },
    {
      src: 'https://assets-global.website-files.com/62535c6262b90afd768b9b26/629fdb690111b109085f7f19_IMVU.svg',
      alt: 'IMVU icon',
    },
    {
      src: 'https://assets-global.website-files.com/62535c6262b90afd768b9b26/62aaf8ab38611f151c6e01ee_Vee%20Friends.png',
      alt: 'Vee Friends logo',
    },
    {
      src: 'https://assets-global.website-files.com/62535c6262b90afd768b9b26/629fd98980bd66b93063f1e7_Gods%20Unchained.svg',
      alt: 'Gods Unchained logo',
    },
    {
      src: 'https://assets-global.website-files.com/62535c6262b90afd768b9b26/629fdb69f7acc35d3a5ccf77_Embersword.svg',
      alt: 'Embersword icon',
    },
    {
      src: 'https://assets-global.website-files.com/62535c6262b90afd768b9b26/629fdb693482a712f566816d_Illuvium.svg',
      alt: 'Illuvium logo',
    },
    {
      src: 'https://assets-global.website-files.com/62535c6262b90afd768b9b26/629fdb699ff090659d21990b_Habbo.svg',
      alt: 'Habbo logo',
    },
    {
      src: 'https://assets-global.website-files.com/62535c6262b90afd768b9b26/629fdb69e11513346c6be663_MARVEL.svg',
      alt: 'Marvel logo',
    },
    {
      src: 'https://assets-global.website-files.com/62535c6262b90afd768b9b26/62aaf8dbf254496cb1e98687_Guild%20of%20Guardians.svg',
      alt: 'Guild of Guardians logo',
    },
    {
      src: 'https://assets-global.website-files.com/62535c6262b90afd768b9b26/629fd6e7bdfbddb63469cd99_Disney.svg',
      alt: 'Disney logo',
    },
    {
      src: 'https://assets-global.website-files.com/62535c6262b90afd768b9b26/629fdb696060235f77a71839_icon-logo.svg',
      alt: 'icon',
    },
  ],
];

const Partner = () => {
  return (
    <div
      id="w-node-_59a4f1f4-309e-c117-2868-3afa33c29200-b38b9b28"
      className={styles['partner-logo-wrapper']}
    >
      {partnerList[0].map((partner, index) => (
        <a
          href="#"
          className={classNames(styles['partner-center-circle'], styles['w-inline-block'])}
          key={index}
        >
          <img src={partner.src} loading="lazy" alt={partner.alt} className={styles['img-cover']} />
        </a>
      ))}

      <div
        data-w-id="59a4f1f4-309e-c117-2868-3afa33c29202"
        className={styles['partner-inner-circle-wrapper']}
      >
        <div
          data-w-id="59a4f1f4-309e-c117-2868-3afa33c29203"
          className={styles['partner-inner-circle-spin']}
          data-style="transform: translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(56.4948deg) skew(0deg, 0deg); transform-style: preserve-3d; will-change: transform;"
        >
          {partnerList[1].map((partner, index) => (
            <a
              data-tippy-content="GameStop"
              href="https://www.gamestop.com/"
              target="_blank"
              className={classNames(
                styles['partner-inner-circle'],
                'circle-one tippy',
                styles['w-inline-block'],
              )}
              key={index}
            >
              <img
                src={partner.src}
                loading="lazy"
                alt={partner.alt}
                className={classNames(styles['img-cover'], 'inner-rotate')}
                data-style="transform: translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(-56.4948deg) skew(0deg, 0deg); transform-style: preserve-3d; will-change: transform;"
              />
            </a>
          ))}
        </div>
      </div>
      <div
        data-w-id="59a4f1f4-309e-c117-2868-3afa33c2920c"
        className={styles['partner-outer-circle-wrapper']}
      >
        <div
          data-w-id="59a4f1f4-309e-c117-2868-3afa33c2920d"
          className={styles['partner-outer-circle-spin']}
          data-style="transform: translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(-37.6632deg) skew(0deg, 0deg); transform-style: preserve-3d; will-change: transform;"
        >
          {partnerList[2].map((partner, index) => (
            <a
              data-tippy-content="ESL Gaming"
              href="https://www.eslgaming.com/"
              target="_blank"
              className={classNames(
                styles['partner-circle-outer'],
                'outer-1 tippy',
                styles['w-inline-block'],
              )}
              key={index}
            >
              <img
                src={partner.src}
                loading="lazy"
                alt={partner.alt}
                className={classNames(styles['img-cover'], 'outer-rotate')}
                data-style="transform: translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(37.6632deg) skew(0deg, 0deg); transform-style: preserve-3d; will-change: transform;"
              />
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Partner;
