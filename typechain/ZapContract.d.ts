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

interface ZapContractInterface extends ethers.utils.Interface {
  functions: {
    "VERSION()": FunctionFragment;
    "controller()": FunctionFragment;
    "created()": FunctionFragment;
    "initializeControllable(address)": FunctionFragment;
    "isController(address)": FunctionFragment;
    "isGovernance(address)": FunctionFragment;
    "multiSwap()": FunctionFragment;
    "salvage(address,uint256)": FunctionFragment;
    "zapInto(address,address,address,address[],uint256,uint256)": FunctionFragment;
    "zapIntoLp(address,address,address,address[],address,address[],uint256,uint256)": FunctionFragment;
    "zapOut(address,address,address,address[],uint256,uint256)": FunctionFragment;
    "zapOutLp(address,address,address,address[],address,address[],uint256,uint256)": FunctionFragment;
  };

  encodeFunctionData(functionFragment: "VERSION", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "controller",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "created", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "initializeControllable",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "isController",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "isGovernance",
    values: [string]
  ): string;
  encodeFunctionData(functionFragment: "multiSwap", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "salvage",
    values: [string, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "zapInto",
    values: [string, string, string, string[], BigNumberish, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "zapIntoLp",
    values: [
      string,
      string,
      string,
      string[],
      string,
      string[],
      BigNumberish,
      BigNumberish
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "zapOut",
    values: [string, string, string, string[], BigNumberish, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "zapOutLp",
    values: [
      string,
      string,
      string,
      string[],
      string,
      string[],
      BigNumberish,
      BigNumberish
    ]
  ): string;

  decodeFunctionResult(functionFragment: "VERSION", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "controller", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "created", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "initializeControllable",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "isController",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "isGovernance",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "multiSwap", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "salvage", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "zapInto", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "zapIntoLp", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "zapOut", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "zapOutLp", data: BytesLike): Result;

  events: {
    "UpdateController(address,address)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "UpdateController"): EventFragment;
}

export class ZapContract extends BaseContract {
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

  interface: ZapContractInterface;

  functions: {
    VERSION(overrides?: CallOverrides): Promise<[string]>;

    controller(overrides?: CallOverrides): Promise<[string] & { adr: string }>;

    created(
      overrides?: CallOverrides
    ): Promise<[BigNumber] & { ts: BigNumber }>;

    initializeControllable(
      _controller: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    isController(_adr: string, overrides?: CallOverrides): Promise<[boolean]>;

    isGovernance(_adr: string, overrides?: CallOverrides): Promise<[boolean]>;

    multiSwap(overrides?: CallOverrides): Promise<[string]>;

    salvage(
      _token: string,
      _amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    zapInto(
      _vault: string,
      _tokenIn: string,
      _asset: string,
      _assetRoute: string[],
      _tokenInAmount: BigNumberish,
      slippageTolerance: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    zapIntoLp(
      _vault: string,
      _tokenIn: string,
      _asset0: string,
      _asset0Route: string[],
      _asset1: string,
      _asset1Route: string[],
      _tokenInAmount: BigNumberish,
      slippageTolerance: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    zapOut(
      _vault: string,
      _tokenOut: string,
      _asset: string,
      _assetRoute: string[],
      _shareTokenAmount: BigNumberish,
      slippageTolerance: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    zapOutLp(
      _vault: string,
      _tokenOut: string,
      _asset0: string,
      _asset0Route: string[],
      _asset1: string,
      _asset1Route: string[],
      _shareTokenAmount: BigNumberish,
      slippageTolerance: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;
  };

  VERSION(overrides?: CallOverrides): Promise<string>;

  controller(overrides?: CallOverrides): Promise<string>;

  created(overrides?: CallOverrides): Promise<BigNumber>;

  initializeControllable(
    _controller: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  isController(_adr: string, overrides?: CallOverrides): Promise<boolean>;

  isGovernance(_adr: string, overrides?: CallOverrides): Promise<boolean>;

  multiSwap(overrides?: CallOverrides): Promise<string>;

  salvage(
    _token: string,
    _amount: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  zapInto(
    _vault: string,
    _tokenIn: string,
    _asset: string,
    _assetRoute: string[],
    _tokenInAmount: BigNumberish,
    slippageTolerance: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  zapIntoLp(
    _vault: string,
    _tokenIn: string,
    _asset0: string,
    _asset0Route: string[],
    _asset1: string,
    _asset1Route: string[],
    _tokenInAmount: BigNumberish,
    slippageTolerance: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  zapOut(
    _vault: string,
    _tokenOut: string,
    _asset: string,
    _assetRoute: string[],
    _shareTokenAmount: BigNumberish,
    slippageTolerance: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  zapOutLp(
    _vault: string,
    _tokenOut: string,
    _asset0: string,
    _asset0Route: string[],
    _asset1: string,
    _asset1Route: string[],
    _shareTokenAmount: BigNumberish,
    slippageTolerance: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  callStatic: {
    VERSION(overrides?: CallOverrides): Promise<string>;

    controller(overrides?: CallOverrides): Promise<string>;

    created(overrides?: CallOverrides): Promise<BigNumber>;

    initializeControllable(
      _controller: string,
      overrides?: CallOverrides
    ): Promise<void>;

    isController(_adr: string, overrides?: CallOverrides): Promise<boolean>;

    isGovernance(_adr: string, overrides?: CallOverrides): Promise<boolean>;

    multiSwap(overrides?: CallOverrides): Promise<string>;

    salvage(
      _token: string,
      _amount: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    zapInto(
      _vault: string,
      _tokenIn: string,
      _asset: string,
      _assetRoute: string[],
      _tokenInAmount: BigNumberish,
      slippageTolerance: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    zapIntoLp(
      _vault: string,
      _tokenIn: string,
      _asset0: string,
      _asset0Route: string[],
      _asset1: string,
      _asset1Route: string[],
      _tokenInAmount: BigNumberish,
      slippageTolerance: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    zapOut(
      _vault: string,
      _tokenOut: string,
      _asset: string,
      _assetRoute: string[],
      _shareTokenAmount: BigNumberish,
      slippageTolerance: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    zapOutLp(
      _vault: string,
      _tokenOut: string,
      _asset0: string,
      _asset0Route: string[],
      _asset1: string,
      _asset1Route: string[],
      _shareTokenAmount: BigNumberish,
      slippageTolerance: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;
  };

  filters: {
    UpdateController(
      oldValue?: null,
      newValue?: null
    ): TypedEventFilter<
      [string, string],
      { oldValue: string; newValue: string }
    >;
  };

  estimateGas: {
    VERSION(overrides?: CallOverrides): Promise<BigNumber>;

    controller(overrides?: CallOverrides): Promise<BigNumber>;

    created(overrides?: CallOverrides): Promise<BigNumber>;

    initializeControllable(
      _controller: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    isController(_adr: string, overrides?: CallOverrides): Promise<BigNumber>;

    isGovernance(_adr: string, overrides?: CallOverrides): Promise<BigNumber>;

    multiSwap(overrides?: CallOverrides): Promise<BigNumber>;

    salvage(
      _token: string,
      _amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    zapInto(
      _vault: string,
      _tokenIn: string,
      _asset: string,
      _assetRoute: string[],
      _tokenInAmount: BigNumberish,
      slippageTolerance: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    zapIntoLp(
      _vault: string,
      _tokenIn: string,
      _asset0: string,
      _asset0Route: string[],
      _asset1: string,
      _asset1Route: string[],
      _tokenInAmount: BigNumberish,
      slippageTolerance: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    zapOut(
      _vault: string,
      _tokenOut: string,
      _asset: string,
      _assetRoute: string[],
      _shareTokenAmount: BigNumberish,
      slippageTolerance: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    zapOutLp(
      _vault: string,
      _tokenOut: string,
      _asset0: string,
      _asset0Route: string[],
      _asset1: string,
      _asset1Route: string[],
      _shareTokenAmount: BigNumberish,
      slippageTolerance: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    VERSION(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    controller(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    created(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    initializeControllable(
      _controller: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    isController(
      _adr: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    isGovernance(
      _adr: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    multiSwap(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    salvage(
      _token: string,
      _amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    zapInto(
      _vault: string,
      _tokenIn: string,
      _asset: string,
      _assetRoute: string[],
      _tokenInAmount: BigNumberish,
      slippageTolerance: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    zapIntoLp(
      _vault: string,
      _tokenIn: string,
      _asset0: string,
      _asset0Route: string[],
      _asset1: string,
      _asset1Route: string[],
      _tokenInAmount: BigNumberish,
      slippageTolerance: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    zapOut(
      _vault: string,
      _tokenOut: string,
      _asset: string,
      _assetRoute: string[],
      _shareTokenAmount: BigNumberish,
      slippageTolerance: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    zapOutLp(
      _vault: string,
      _tokenOut: string,
      _asset0: string,
      _asset0Route: string[],
      _asset1: string,
      _asset1Route: string[],
      _shareTokenAmount: BigNumberish,
      slippageTolerance: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;
  };
}
