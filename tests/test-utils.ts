import {BigNumber, utils} from "ethers";
import {expect} from "chai";

export function assertBN(bn: BigNumber, expected: number, dec = 18) {
  expect(+utils.formatUnits(bn, dec)).is.eq(expected);
}
