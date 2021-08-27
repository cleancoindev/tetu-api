/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Signer, utils } from "ethers";
import { Provider } from "@ethersproject/providers";
import type { IMintHelper, IMintHelperInterface } from "../IMintHelper";

const _abi = [
  {
    inputs: [
      {
        internalType: "uint256",
        name: "idx",
        type: "uint256",
      },
    ],
    name: "devFundsList",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "totalAmount",
        type: "uint256",
      },
      {
        internalType: "address",
        name: "_distributor",
        type: "address",
      },
      {
        internalType: "address",
        name: "_otherNetworkFund",
        type: "address",
      },
      {
        internalType: "bool",
        name: "mintAllAvailable",
        type: "bool",
      },
    ],
    name: "mintAndDistribute",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];

export class IMintHelper__factory {
  static readonly abi = _abi;
  static createInterface(): IMintHelperInterface {
    return new utils.Interface(_abi) as IMintHelperInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): IMintHelper {
    return new Contract(address, _abi, signerOrProvider) as IMintHelper;
  }
}
