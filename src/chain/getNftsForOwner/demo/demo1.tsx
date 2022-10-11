import React, { useCallback, useState } from 'react';
import { getAllNfts } from '../index';
import { OwnedNftsResponse } from 'alchemy-sdk';
import { Goerli } from '@usedapp/core';

const address = '0x8Dd609188f6479732AC5aEa52e53264FF8Dc0Eb6';

export default () => {
  const [nfts, setNfts] = useState<OwnedNftsResponse>({
    ownedNfts: [],
    pageKey: undefined,
    totalCount: 0,
  });

  const getNfts = useCallback(() => {
    getAllNfts(address).then((response) => {
      console.log('response', response);
      setNfts(response);
    });
  }, []);

  return (
    <div>
      <div>{Goerli.chainName}</div>
      <div>{Goerli.chainId}</div>
      <div>{address}</div>
      <ul>
        {nfts.ownedNfts.map((nft, index) => (
          <li key={index}>
            tokenId: {nft.tokenId}, tokenType: {nft.tokenType}, title: {nft.title},
          </li>
        ))}
      </ul>
      <button onClick={getNfts}>Get All NFT</button>
    </div>
  );
};
