import { BigNumber, utils } from "ethers";
import Web3 from "web3";
import { expect } from "chai";

export function assertBN(bn: BigNumber, expected: number, dec = 18): void {
  expect(+utils.formatUnits(bn, dec)).is.eq(expected);
}

export const isBigNumber = (value: any): boolean => value instanceof BigNumber;

export const isBigNumbers = (values: any[]): boolean =>
  values.every((value) => isBigNumber(value));

export const isAddresses = (values: any[]): boolean =>
  values.every((value) => Web3.utils.isAddress(value));

export const arrayHasArray = (values: any[]): boolean =>
  values.some((value) => Array.isArray(value));

export const arrayHasString = (values: any[]): boolean =>
  values.some((value) => typeof value === "string");

export const arrayHasAddress= (values: any[]): boolean =>
  values.some((value) => Web3.utils.isAddress(value));

export const arrayHasBigNumber = (values: any[]): boolean =>
  values.some((value) => isBigNumber(value));
