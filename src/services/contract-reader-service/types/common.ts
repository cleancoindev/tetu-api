import { BigNumber } from "ethers";

export interface ICommonUseInfo {
  depositedUnderlying: BigNumber;
  depositedUnderlyingUsdc: BigNumber;
  depositedShare: BigNumber;
}

export interface ICommonVaultInfoLight {
  addr: string;
  created: BigNumber;
  active: boolean;
  tvl: BigNumber;
  tvlUsdc: BigNumber;
  underlying: string;
  rewardTokens: string[];
  rewardsApr: BigNumber[];
  ppfsApr: BigNumber;
  platform: number;
  assets: string[];
  earned: BigNumber;
}

export interface ICommonVaultInfo extends ICommonVaultInfoLight {
  name: string;
  decimals: BigNumber;
  rewardTokensBal: BigNumber[];
  rewardTokensBalUsdc: BigNumber[];
  duration: BigNumber;
  users: BigNumber;
  strategy: string;
  strategyCreated: BigNumber;
  strategyRewards: string[];
  strategyOnPause: boolean;
}

export interface ICommonUserInfo {
  wallet: string;
  vault: string;
  underlyingBalance: BigNumber;
  underlyingBalanceUsdc: BigNumber;
  depositedUnderlying: BigNumber;
  depositedUnderlyingUsdc: BigNumber;
  depositedShare: BigNumber;
  rewardTokens: string[];
  rewards: BigNumber[];
  rewardsUsdc: BigNumber[];
  rewardsBoost: BigNumber[];
  rewardsBoostUsdc: BigNumber[];
}
