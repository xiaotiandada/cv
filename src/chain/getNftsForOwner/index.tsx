import { Alchemy, GetNftsForOwnerOptions, OwnedNftsResponse, Network } from 'alchemy-sdk';
import { Goerli, Mainnet } from '@usedapp/core';
import { Writeable } from './index.d';

// Alchemy Network Config
const ALCHEMY_NETWORKS = {
  [Mainnet.chainId]: Network.ETH_MAINNET,
  [Goerli.chainId]: Network.ETH_GOERLI,
};
const ALCHEMY_NETWORK = ALCHEMY_NETWORKS[Goerli.chainId];

/**
 * Init Alchemy
 * @returns
 */
const initAlchemy = (): Alchemy => {
  const ALCHEMY_API_KEY: string | undefined = '';
  if (!ALCHEMY_API_KEY) throw new TypeError('ALCHEMY_API_KEY not set');
  const settings = {
    apiKey: ALCHEMY_API_KEY,
    network: ALCHEMY_NETWORK,
  };

  return new Alchemy(settings);
};

/**
 * Get All NFT
 * @param owner
 * @returns
 */
export const getAllNfts = async (owner: string): Promise<OwnedNftsResponse> => {
  const alchemy = initAlchemy();
  const nfts: Writeable<OwnedNftsResponse> = {
    ownedNfts: [],
    pageKey: undefined,
    totalCount: 0,
  };

  const getNft = async (owner: string, options?: GetNftsForOwnerOptions) => {
    const result = await alchemy.nft.getNftsForOwner(owner, {
      // pageSize: 100,
      ...options,
    });

    nfts.ownedNfts.push(...result.ownedNfts);
    nfts.pageKey = result.pageKey;
    nfts.totalCount = result.totalCount;

    if (result?.pageKey) {
      await getNft(owner, {
        pageKey: result.pageKey,
      });
    }
  };

  await getNft(owner);

  return nfts;
};
