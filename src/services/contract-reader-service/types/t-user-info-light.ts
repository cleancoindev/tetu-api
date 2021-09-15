import { BigNumber } from "ethers";
import type { ICommonUseInfo } from "./common";

export type TUserInfoLight = [BigNumber, BigNumber, BigNumber] & ICommonUseInfo;