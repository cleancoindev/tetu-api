/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Signer, utils } from "ethers";
import { Provider } from "@ethersproject/providers";
import type { IControllable, IControllableInterface } from "../IControllable";

const _abi = [
  {
    inputs: [
      {
        internalType: "address",
        name: "_contract",
        type: "address",
      },
    ],
    name: "isController",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_contract",
        type: "address",
      },
    ],
    name: "isGovernance",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
];

export class IControllable__factory {
  static readonly abi = _abi;
  static createInterface(): IControllableInterface {
    return new utils.Interface(_abi) as IControllableInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): IControllable {
    return new Contract(address, _abi, signerOrProvider) as IControllable;
  }
}