/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import {
  ethers,
  EventFilter,
  Signer,
  BigNumber,
  BigNumberish,
  PopulatedTransaction,
  BaseContract,
  ContractTransaction,
  Overrides,
  CallOverrides,
} from "ethers";
import { BytesLike } from "@ethersproject/bytes";
import { Listener, Provider } from "@ethersproject/providers";
import { FunctionFragment, EventFragment, Result } from "@ethersproject/abi";
import { TypedEventFilter, TypedEvent, TypedListener } from "./commons";

interface IMultiSwapInterface extends ethers.utils.Interface {
  functions: {
    "findLpsForSwaps(address,address)": FunctionFragment;
    "multiSwap(address[],address,address,uint256,uint256)": FunctionFragment;
    "routerForPair(address)": FunctionFragment;
  };

  encodeFunctionData(
    functionFragment: "findLpsForSwaps",
    values: [string, string]
  ): string;
  encodeFunctionData(
    functionFragment: "multiSwap",
    values: [string[], string, string, BigNumberish, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "routerForPair",
    values: [string]
  ): string;

  decodeFunctionResult(
    functionFragment: "findLpsForSwaps",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "multiSwap", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "routerForPair",
    data: BytesLike
  ): Result;

  events: {};
}

export class IMultiSwap extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  listeners<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter?: TypedEventFilter<EventArgsArray, EventArgsObject>
  ): Array<TypedListener<EventArgsArray, EventArgsObject>>;
  off<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this;
  on<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this;
  once<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this;
  removeListener<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this;
  removeAllListeners<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>
  ): this;

  listeners(eventName?: string): Array<Listener>;
  off(eventName: string, listener: Listener): this;
  on(eventName: string, listener: Listener): this;
  once(eventName: string, listener: Listener): this;
  removeListener(eventName: string, listener: Listener): this;
  removeAllListeners(eventName?: string): this;

  queryFilter<EventArgsArray extends Array<any>, EventArgsObject>(
    event: TypedEventFilter<EventArgsArray, EventArgsObject>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TypedEvent<EventArgsArray & EventArgsObject>>>;

  interface: IMultiSwapInterface;

  functions: {
    findLpsForSwaps(
      _tokenIn: string,
      _tokenOut: string,
      overrides?: CallOverrides
    ): Promise<[string[]]>;

    multiSwap(
      lps: string[],
      tokenIn: string,
      tokenOut: string,
      amount: BigNumberish,
      slippageTolerance: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    routerForPair(pair: string, overrides?: CallOverrides): Promise<[string]>;
  };

  findLpsForSwaps(
    _tokenIn: string,
    _tokenOut: string,
    overrides?: CallOverrides
  ): Promise<string[]>;

  multiSwap(
    lps: string[],
    tokenIn: string,
    tokenOut: string,
    amount: BigNumberish,
    slippageTolerance: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  routerForPair(pair: string, overrides?: CallOverrides): Promise<string>;

  callStatic: {
    findLpsForSwaps(
      _tokenIn: string,
      _tokenOut: string,
      overrides?: CallOverrides
    ): Promise<string[]>;

    multiSwap(
      lps: string[],
      tokenIn: string,
      tokenOut: string,
      amount: BigNumberish,
      slippageTolerance: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    routerForPair(pair: string, overrides?: CallOverrides): Promise<string>;
  };

  filters: {};

  estimateGas: {
    findLpsForSwaps(
      _tokenIn: string,
      _tokenOut: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    multiSwap(
      lps: string[],
      tokenIn: string,
      tokenOut: string,
      amount: BigNumberish,
      slippageTolerance: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    routerForPair(pair: string, overrides?: CallOverrides): Promise<BigNumber>;
  };

  populateTransaction: {
    findLpsForSwaps(
      _tokenIn: string,
      _tokenOut: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    multiSwap(
      lps: string[],
      tokenIn: string,
      tokenOut: string,
      amount: BigNumberish,
      slippageTolerance: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    routerForPair(
      pair: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;
  };
}