/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Signer, utils } from "ethers";
import { Provider } from "@ethersproject/providers";
import type { IMultiSwap, IMultiSwapInterface } from "../IMultiSwap";

const _abi = [
  {
    inputs: [
      {
        internalType: "address",
        name: "_tokenIn",
        type: "address",
      },
      {
        internalType: "address",
        name: "_tokenOut",
        type: "address",
      },
    ],
    name: "findLpsForSwaps",
    outputs: [
      {
        internalType: "address[]",
        name: "",
        type: "address[]",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address[]",
        name: "lps",
        type: "address[]",
      },
      {
        internalType: "address",
        name: "tokenIn",
        type: "address",
      },
      {
        internalType: "address",
        name: "tokenOut",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "slippageTolerance",
        type: "uint256",
      },
    ],
    name: "multiSwap",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "pair",
        type: "address",
      },
    ],
    name: "routerForPair",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
];

export class IMultiSwap__factory {
  static readonly abi = _abi;
  static createInterface(): IMultiSwapInterface {
    return new utils.Interface(_abi) as IMultiSwapInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): IMultiSwap {
    return new Contract(address, _abi, signerOrProvider) as IMultiSwap;
  }
}
