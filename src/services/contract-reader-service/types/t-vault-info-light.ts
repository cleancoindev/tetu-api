import { BigNumber } from "ethers";
import type { ICommonVaultInfoLight } from "./common";

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
] &
  ICommonVaultInfoLight;
