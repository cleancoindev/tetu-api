import { BigNumber } from "ethers";
import { ICommonUserInfo } from "./common";

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
] &
  ICommonUserInfo;
