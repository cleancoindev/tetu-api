/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Signer, utils } from "ethers";
import { Provider } from "@ethersproject/providers";
import type {
  IFeeRewardForwarder,
  IFeeRewardForwarderInterface,
} from "../IFeeRewardForwarder";

const _abi = [
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_amount",
        type: "uint256",
      },
      {
        internalType: "address",
        name: "_token",
        type: "address",
      },
      {
        internalType: "address",
        name: "_vault",
        type: "address",
      },
    ],
    name: "distribute",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_token",
        type: "address",
      },
      {
        internalType: "address",
        name: "_rewardPool",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "_maxBuyback",
        type: "uint256",
      },
    ],
    name: "notifyCustomPool",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_token",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "_amount",
        type: "uint256",
      },
    ],
    name: "notifyPsPool",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
];

export class IFeeRewardForwarder__factory {
  static readonly abi = _abi;
  static createInterface(): IFeeRewardForwarderInterface {
    return new utils.Interface(_abi) as IFeeRewardForwarderInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): IFeeRewardForwarder {
    return new Contract(address, _abi, signerOrProvider) as IFeeRewardForwarder;
  }
}
