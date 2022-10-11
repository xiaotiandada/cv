// https://github.com/TrueFiEng/useDApp/blob/3d815ab4f674ce1b63998bc783d7be4408331bff/packages/core/src/helpers/address.ts
export type Falsy = false | 0 | '' | null | undefined;

import { utils } from 'ethers';

export function shortenString(str: string) {
  return str.substring(0, 6) + '...' + str.substring(str.length - 4);
}

export function shortenAddress(address: string): string {
  try {
    const formattedAddress = utils.getAddress(address);
    return shortenString(formattedAddress);
  } catch {
    throw new TypeError("Invalid input, address can't be parsed");
  }
}

export function shortenIfAddress(address: string | Falsy): string {
  if (typeof address === 'string' && address.length > 0) {
    return shortenAddress(address);
  }
  return '';
}

export function addressEqual(firstAddress: string, secondAddress: string): boolean {
  try {
    return utils.getAddress(firstAddress) === utils.getAddress(secondAddress);
  } catch {
    throw new TypeError("Invalid input, address can't be parsed");
  }
}
