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

interface FundKeeperInterface extends ethers.utils.Interface {
  functions: {
    "controller()": FunctionFragment;
    "created()": FunctionFragment;
    "initialize(address)": FunctionFragment;
    "initializeControllable(address)": FunctionFragment;
    "isController(address)": FunctionFragment;
    "isGovernance(address)": FunctionFragment;
    "withdrawToController(address,uint256)": FunctionFragment;
  };

  encodeFunctionData(
    functionFragment: "controller",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "created", values?: undefined): string;
  encodeFunctionData(functionFragment: "initialize", values: [string]): string;
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
  encodeFunctionData(
    functionFragment: "withdrawToController",
    values: [string, BigNumberish]
  ): string;

  decodeFunctionResult(functionFragment: "controller", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "created", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "initialize", data: BytesLike): Result;
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
  decodeFunctionResult(
    functionFragment: "withdrawToController",
    data: BytesLike
  ): Result;

  events: {
    "TokenWithdrawn(address,uint256)": EventFragment;
    "UpdateController(address,address)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "TokenWithdrawn"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "UpdateController"): EventFragment;
}

export class FundKeeper extends BaseContract {
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

  interface: FundKeeperInterface;

  functions: {
    controller(overrides?: CallOverrides): Promise<[string] & { adr: string }>;

    created(
      overrides?: CallOverrides
    ): Promise<[BigNumber] & { ts: BigNumber }>;

    initialize(
      _controller: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    initializeControllable(
      _controller: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    isController(_adr: string, overrides?: CallOverrides): Promise<[boolean]>;

    isGovernance(_adr: string, overrides?: CallOverrides): Promise<[boolean]>;

    withdrawToController(
      _token: string,
      amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;
  };

  controller(overrides?: CallOverrides): Promise<string>;

  created(overrides?: CallOverrides): Promise<BigNumber>;

  initialize(
    _controller: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  initializeControllable(
    _controller: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  isController(_adr: string, overrides?: CallOverrides): Promise<boolean>;

  isGovernance(_adr: string, overrides?: CallOverrides): Promise<boolean>;

  withdrawToController(
    _token: string,
    amount: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  callStatic: {
    controller(overrides?: CallOverrides): Promise<string>;

    created(overrides?: CallOverrides): Promise<BigNumber>;

    initialize(_controller: string, overrides?: CallOverrides): Promise<void>;

    initializeControllable(
      _controller: string,
      overrides?: CallOverrides
    ): Promise<void>;

    isController(_adr: string, overrides?: CallOverrides): Promise<boolean>;

    isGovernance(_adr: string, overrides?: CallOverrides): Promise<boolean>;

    withdrawToController(
      _token: string,
      amount: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;
  };

  filters: {
    TokenWithdrawn(
      token?: string | null,
      amount?: null
    ): TypedEventFilter<
      [string, BigNumber],
      { token: string; amount: BigNumber }
    >;

    UpdateController(
      oldValue?: null,
      newValue?: null
    ): TypedEventFilter<
      [string, string],
      { oldValue: string; newValue: string }
    >;
  };

  estimateGas: {
    controller(overrides?: CallOverrides): Promise<BigNumber>;

    created(overrides?: CallOverrides): Promise<BigNumber>;

    initialize(
      _controller: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    initializeControllable(
      _controller: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    isController(_adr: string, overrides?: CallOverrides): Promise<BigNumber>;

    isGovernance(_adr: string, overrides?: CallOverrides): Promise<BigNumber>;

    withdrawToController(
      _token: string,
      amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    controller(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    created(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    initialize(
      _controller: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

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

    withdrawToController(
      _token: string,
      amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;
  };
}