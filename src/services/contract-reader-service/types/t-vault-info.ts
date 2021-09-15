import { BigNumber } from "ethers";
import type { ICommonVaultInfo } from "./common";

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
] &
  ICommonVaultInfo;
