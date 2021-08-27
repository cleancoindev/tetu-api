/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Signer, utils } from "ethers";
import { Provider } from "@ethersproject/providers";
import type { ITetuProxy, ITetuProxyInterface } from "../ITetuProxy";

const _abi = [
  {
    inputs: [],
    name: "implementation",
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
        internalType: "address",
        name: "_newImplementation",
        type: "address",
      },
    ],
    name: "upgrade",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];

export class ITetuProxy__factory {
  static readonly abi = _abi;
  static createInterface(): ITetuProxyInterface {
    return new utils.Interface(_abi) as ITetuProxyInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): ITetuProxy {
    return new Contract(address, _abi, signerOrProvider) as ITetuProxy;
  }
}
