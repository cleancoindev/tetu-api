import { BigNumber } from "ethers";

export type TUserInfo = [
  string,
  string,
  BigNumber,
  BigNumber,
  BigNumber,
  BigNumber,
  BigNumber,
  string[],
  BigNumber[],
  BigNumber[],
  BigNumber[],
  BigNumber[]
];

export type TUserInfoLight = [BigNumber, BigNumber, BigNumber] & {
  depositedUnderlying: BigNumber;
  depositedUnderlyingUsdc: BigNumber;
  depositedShare: BigNumber;
};

export type TUserInfosLight = ([BigNumber, BigNumber, BigNumber] & {
  depositedUnderlying: BigNumber;
  depositedUnderlyingUsdc: BigNumber;
  depositedShare: BigNumber;
})[];

export type TVaultInfo = [
  string,
  string,
  BigNumber,
  boolean,
  BigNumber,
  BigNumber,
  BigNumber,
  string,
  string[],
  BigNumber[],
  BigNumber[],
  BigNumber,
  BigNumber[],
  BigNumber,
  BigNumber,
  string,
  BigNumber,
  number,
  string[],
  string[],
  boolean,
  BigNumber
] & {
  addr: string;
  name: string;
  created: BigNumber;
  active: boolean;
  tvl: BigNumber;
  tvlUsdc: BigNumber;
  decimals: BigNumber;
  underlying: string;
  rewardTokens: string[];
  rewardTokensBal: BigNumber[];
  rewardTokensBalUsdc: BigNumber[];
  duration: BigNumber;
  rewardsApr: BigNumber[];
  ppfsApr: BigNumber;
  users: BigNumber;
  strategy: string;
  strategyCreated: BigNumber;
  platform: number;
  assets: string[];
  strategyRewards: string[];
  strategyOnPause: boolean;
  earned: BigNumber;
};

export type TVaultInfoLight = [
  string,
  BigNumber,
  boolean,
  BigNumber,
  BigNumber,
  string,
  string[],
  BigNumber[],
  BigNumber,
  number,
  string[],
  BigNumber
] & {
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
};

export type TVaultInfos = ([
  string,
  string,
  BigNumber,
  boolean,
  BigNumber,
  BigNumber,
  BigNumber,
  string,
  string[],
  BigNumber[],
  BigNumber[],
  BigNumber,
  BigNumber[],
  BigNumber,
  BigNumber,
  string,
  BigNumber,
  number,
  string[],
  string[],
  boolean,
  BigNumber
] & {
  addr: string;
  name: string;
  created: BigNumber;
  active: boolean;
  tvl: BigNumber;
  tvlUsdc: BigNumber;
  decimals: BigNumber;
  underlying: string;
  rewardTokens: string[];
  rewardTokensBal: BigNumber[];
  rewardTokensBalUsdc: BigNumber[];
  duration: BigNumber;
  rewardsApr: BigNumber[];
  ppfsApr: BigNumber;
  users: BigNumber;
  strategy: string;
  strategyCreated: BigNumber;
  platform: number;
  assets: string[];
  strategyRewards: string[];
  strategyOnPause: boolean;
  earned: BigNumber;
})[];

export type TVaultInfosLight = ([
  string,
  BigNumber,
  boolean,
  BigNumber,
  BigNumber,
  string,
  string[],
  BigNumber[],
  BigNumber,
  number,
  string[],
  BigNumber
] & {
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
})[];

export type TVaultWithUserInfoPages = ([
  [
    string,
    string,
    BigNumber,
    boolean,
    BigNumber,
    BigNumber,
    BigNumber,
    string,
    string[],
    BigNumber[],
    BigNumber[],
    BigNumber,
    BigNumber[],
    BigNumber,
    BigNumber,
    string,
    BigNumber,
    number,
    string[],
    string[],
    boolean,
    BigNumber
  ] & {
    addr: string;
    name: string;
    created: BigNumber;
    active: boolean;
    tvl: BigNumber;
    tvlUsdc: BigNumber;
    decimals: BigNumber;
    underlying: string;
    rewardTokens: string[];
    rewardTokensBal: BigNumber[];
    rewardTokensBalUsdc: BigNumber[];
    duration: BigNumber;
    rewardsApr: BigNumber[];
    ppfsApr: BigNumber;
    users: BigNumber;
    strategy: string;
    strategyCreated: BigNumber;
    platform: number;
    assets: string[];
    strategyRewards: string[];
    strategyOnPause: boolean;
    earned: BigNumber;
  },
  [
    string,
    string,
    BigNumber,
    BigNumber,
    BigNumber,
    BigNumber,
    BigNumber,
    string[],
    BigNumber[],
    BigNumber[],
    BigNumber[],
    BigNumber[]
  ] & {
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
] & {
  vault: [
    string,
    string,
    BigNumber,
    boolean,
    BigNumber,
    BigNumber,
    BigNumber,
    string,
    string[],
    BigNumber[],
    BigNumber[],
    BigNumber,
    BigNumber[],
    BigNumber,
    BigNumber,
    string,
    BigNumber,
    number,
    string[],
    string[],
    boolean,
    BigNumber
  ] & {
    addr: string;
    name: string;
    created: BigNumber;
    active: boolean;
    tvl: BigNumber;
    tvlUsdc: BigNumber;
    decimals: BigNumber;
    underlying: string;
    rewardTokens: string[];
    rewardTokensBal: BigNumber[];
    rewardTokensBalUsdc: BigNumber[];
    duration: BigNumber;
    rewardsApr: BigNumber[];
    ppfsApr: BigNumber;
    users: BigNumber;
    strategy: string;
    strategyCreated: BigNumber;
    platform: number;
    assets: string[];
    strategyRewards: string[];
    strategyOnPause: boolean;
    earned: BigNumber;
  };
  user: [
    string,
    string,
    BigNumber,
    BigNumber,
    BigNumber,
    BigNumber,
    BigNumber,
    string[],
    BigNumber[],
    BigNumber[],
    BigNumber[],
    BigNumber[]
  ] & {
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
  };
})[];

export type TVaultWithUserInfoPagesLight = ([
  [
    string,
    BigNumber,
    boolean,
    BigNumber,
    BigNumber,
    string,
    string[],
    BigNumber[],
    BigNumber,
    number,
    string[],
    BigNumber
  ] & {
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
  },
  [BigNumber, BigNumber, BigNumber] & {
    depositedUnderlying: BigNumber;
    depositedUnderlyingUsdc: BigNumber;
    depositedShare: BigNumber;
  }
] & {
  vault: [
    string,
    BigNumber,
    boolean,
    BigNumber,
    BigNumber,
    string,
    string[],
    BigNumber[],
    BigNumber,
    number,
    string[],
    BigNumber
  ] & {
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
  };
  user: [BigNumber, BigNumber, BigNumber] & {
    depositedUnderlying: BigNumber;
    depositedUnderlyingUsdc: BigNumber;
    depositedShare: BigNumber;
  };
})[];

export type TVaultWithUserInfos = ([
  [
    string,
    string,
    BigNumber,
    boolean,
    BigNumber,
    BigNumber,
    BigNumber,
    string,
    string[],
    BigNumber[],
    BigNumber[],
    BigNumber,
    BigNumber[],
    BigNumber,
    BigNumber,
    string,
    BigNumber,
    number,
    string[],
    string[],
    boolean,
    BigNumber
  ] & {
    addr: string;
    name: string;
    created: BigNumber;
    active: boolean;
    tvl: BigNumber;
    tvlUsdc: BigNumber;
    decimals: BigNumber;
    underlying: string;
    rewardTokens: string[];
    rewardTokensBal: BigNumber[];
    rewardTokensBalUsdc: BigNumber[];
    duration: BigNumber;
    rewardsApr: BigNumber[];
    ppfsApr: BigNumber;
    users: BigNumber;
    strategy: string;
    strategyCreated: BigNumber;
    platform: number;
    assets: string[];
    strategyRewards: string[];
    strategyOnPause: boolean;
    earned: BigNumber;
  },
  [
    string,
    string,
    BigNumber,
    BigNumber,
    BigNumber,
    BigNumber,
    BigNumber,
    string[],
    BigNumber[],
    BigNumber[],
    BigNumber[],
    BigNumber[]
  ] & {
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
] & {
  vault: [
    string,
    string,
    BigNumber,
    boolean,
    BigNumber,
    BigNumber,
    BigNumber,
    string,
    string[],
    BigNumber[],
    BigNumber[],
    BigNumber,
    BigNumber[],
    BigNumber,
    BigNumber,
    string,
    BigNumber,
    number,
    string[],
    string[],
    boolean,
    BigNumber
  ] & {
    addr: string;
    name: string;
    created: BigNumber;
    active: boolean;
    tvl: BigNumber;
    tvlUsdc: BigNumber;
    decimals: BigNumber;
    underlying: string;
    rewardTokens: string[];
    rewardTokensBal: BigNumber[];
    rewardTokensBalUsdc: BigNumber[];
    duration: BigNumber;
    rewardsApr: BigNumber[];
    ppfsApr: BigNumber;
    users: BigNumber;
    strategy: string;
    strategyCreated: BigNumber;
    platform: number;
    assets: string[];
    strategyRewards: string[];
    strategyOnPause: boolean;
    earned: BigNumber;
  };
  user: [
    string,
    string,
    BigNumber,
    BigNumber,
    BigNumber,
    BigNumber,
    BigNumber,
    string[],
    BigNumber[],
    BigNumber[],
    BigNumber[],
    BigNumber[]
  ] & {
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
  };
})[];

export type TVaultWithUserInfosLight = ([
  [
    string,
    BigNumber,
    boolean,
    BigNumber,
    BigNumber,
    string,
    string[],
    BigNumber[],
    BigNumber,
    number,
    string[],
    BigNumber
  ] & {
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
  },
  [BigNumber, BigNumber, BigNumber] & {
    depositedUnderlying: BigNumber;
    depositedUnderlyingUsdc: BigNumber;
    depositedShare: BigNumber;
  }
] & {
  vault: [
    string,
    BigNumber,
    boolean,
    BigNumber,
    BigNumber,
    string,
    string[],
    BigNumber[],
    BigNumber,
    number,
    string[],
    BigNumber
  ] & {
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
  };
  user: [BigNumber, BigNumber, BigNumber] & {
    depositedUnderlying: BigNumber;
    depositedUnderlyingUsdc: BigNumber;
    depositedShare: BigNumber;
  };
})[];
