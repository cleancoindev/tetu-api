/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Signer, utils } from "ethers";
import { Provider } from "@ethersproject/providers";
import type {
  IVaultController,
  IVaultControllerInterface,
} from "../IVaultController";

const _abi = [
  {
    inputs: [],
    name: "rewardBoostDuration",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "rewardRatioWithoutBoost",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
];

export class IVaultController__factory {
  static readonly abi = _abi;
  static createInterface(): IVaultControllerInterface {
    return new utils.Interface(_abi) as IVaultControllerInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): IVaultController {
    return new Contract(address, _abi, signerOrProvider) as IVaultController;
  }
}
