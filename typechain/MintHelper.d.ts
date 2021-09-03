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

interface MintHelperInterface extends ethers.utils.Interface {
  functions: {
    "BASE_RATIO()": FunctionFragment;
    "FIRST_NETWORK_RATIO()": FunctionFragment;
    "FUNDS_RATIO()": FunctionFragment;
    "TOTAL_NETWORK_RATIO()": FunctionFragment;
    "TOTAL_RATIO()": FunctionFragment;
    "VERSION()": FunctionFragment;
    "controller()": FunctionFragment;
    "created()": FunctionFragment;
    "devFunds(address)": FunctionFragment;
    "devFundsLength()": FunctionFragment;
    "devFundsList(uint256)": FunctionFragment;
    "initialize(address,address[],uint256[])": FunctionFragment;
    "initializeControllable(address)": FunctionFragment;
    "isController(address)": FunctionFragment;
    "isGovernance(address)": FunctionFragment;
    "mintAndDistribute(uint256,address,address,bool)": FunctionFragment;
    "setDevFunds(address[],uint256[])": FunctionFragment;
    "token()": FunctionFragment;
  };

  encodeFunctionData(
    functionFragment: "BASE_RATIO",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "FIRST_NETWORK_RATIO",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "FUNDS_RATIO",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "TOTAL_NETWORK_RATIO",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "TOTAL_RATIO",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "VERSION", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "controller",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "created", values?: undefined): string;
  encodeFunctionData(functionFragment: "devFunds", values: [string]): string;
  encodeFunctionData(
    functionFragment: "devFundsLength",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "devFundsList",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "initialize",
    values: [string, string[], BigNumberish[]]
  ): string;
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
    functionFragment: "mintAndDistribute",
    values: [BigNumberish, string, string, boolean]
  ): string;
  encodeFunctionData(
    functionFragment: "setDevFunds",
    values: [string[], BigNumberish[]]
  ): string;
  encodeFunctionData(functionFragment: "token", values?: undefined): string;

  decodeFunctionResult(functionFragment: "BASE_RATIO", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "FIRST_NETWORK_RATIO",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "FUNDS_RATIO",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "TOTAL_NETWORK_RATIO",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "TOTAL_RATIO",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "VERSION", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "controller", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "created", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "devFunds", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "devFundsLength",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "devFundsList",
    data: BytesLike
  ): Result;
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
    functionFragment: "mintAndDistribute",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "setDevFunds",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "token", data: BytesLike): Result;

  events: {
    "FundsChanged(address[],uint256[])": EventFragment;
    "UpdateController(address,address)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "FundsChanged"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "UpdateController"): EventFragment;
}

export class MintHelper extends BaseContract {
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

  interface: MintHelperInterface;

  functions: {
    BASE_RATIO(overrides?: CallOverrides): Promise<[BigNumber]>;

    FIRST_NETWORK_RATIO(overrides?: CallOverrides): Promise<[BigNumber]>;

    FUNDS_RATIO(overrides?: CallOverrides): Promise<[BigNumber]>;

    TOTAL_NETWORK_RATIO(overrides?: CallOverrides): Promise<[BigNumber]>;

    TOTAL_RATIO(overrides?: CallOverrides): Promise<[BigNumber]>;

    VERSION(overrides?: CallOverrides): Promise<[string]>;

    controller(overrides?: CallOverrides): Promise<[string] & { adr: string }>;

    created(
      overrides?: CallOverrides
    ): Promise<[BigNumber] & { ts: BigNumber }>;

    devFunds(arg0: string, overrides?: CallOverrides): Promise<[BigNumber]>;

    devFundsLength(overrides?: CallOverrides): Promise<[BigNumber]>;

    devFundsList(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[string]>;

    initialize(
      _controller: string,
      _funds: string[],
      _fundsFractions: BigNumberish[],
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    initializeControllable(
      _controller: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    isController(_adr: string, overrides?: CallOverrides): Promise<[boolean]>;

    isGovernance(_adr: string, overrides?: CallOverrides): Promise<[boolean]>;

    mintAndDistribute(
      totalAmount: BigNumberish,
      _distributor: string,
      _otherNetworkFund: string,
      mintAllAvailable: boolean,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    setDevFunds(
      _funds: string[],
      _fractions: BigNumberish[],
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    token(overrides?: CallOverrides): Promise<[string]>;
  };

  BASE_RATIO(overrides?: CallOverrides): Promise<BigNumber>;

  FIRST_NETWORK_RATIO(overrides?: CallOverrides): Promise<BigNumber>;

  FUNDS_RATIO(overrides?: CallOverrides): Promise<BigNumber>;

  TOTAL_NETWORK_RATIO(overrides?: CallOverrides): Promise<BigNumber>;

  TOTAL_RATIO(overrides?: CallOverrides): Promise<BigNumber>;

  VERSION(overrides?: CallOverrides): Promise<string>;

  controller(overrides?: CallOverrides): Promise<string>;

  created(overrides?: CallOverrides): Promise<BigNumber>;

  devFunds(arg0: string, overrides?: CallOverrides): Promise<BigNumber>;

  devFundsLength(overrides?: CallOverrides): Promise<BigNumber>;

  devFundsList(arg0: BigNumberish, overrides?: CallOverrides): Promise<string>;

  initialize(
    _controller: string,
    _funds: string[],
    _fundsFractions: BigNumberish[],
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  initializeControllable(
    _controller: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  isController(_adr: string, overrides?: CallOverrides): Promise<boolean>;

  isGovernance(_adr: string, overrides?: CallOverrides): Promise<boolean>;

  mintAndDistribute(
    totalAmount: BigNumberish,
    _distributor: string,
    _otherNetworkFund: string,
    mintAllAvailable: boolean,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  setDevFunds(
    _funds: string[],
    _fractions: BigNumberish[],
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  token(overrides?: CallOverrides): Promise<string>;

  callStatic: {
    BASE_RATIO(overrides?: CallOverrides): Promise<BigNumber>;

    FIRST_NETWORK_RATIO(overrides?: CallOverrides): Promise<BigNumber>;

    FUNDS_RATIO(overrides?: CallOverrides): Promise<BigNumber>;

    TOTAL_NETWORK_RATIO(overrides?: CallOverrides): Promise<BigNumber>;

    TOTAL_RATIO(overrides?: CallOverrides): Promise<BigNumber>;

    VERSION(overrides?: CallOverrides): Promise<string>;

    controller(overrides?: CallOverrides): Promise<string>;

    created(overrides?: CallOverrides): Promise<BigNumber>;

    devFunds(arg0: string, overrides?: CallOverrides): Promise<BigNumber>;

    devFundsLength(overrides?: CallOverrides): Promise<BigNumber>;

    devFundsList(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<string>;

    initialize(
      _controller: string,
      _funds: string[],
      _fundsFractions: BigNumberish[],
      overrides?: CallOverrides
    ): Promise<void>;

    initializeControllable(
      _controller: string,
      overrides?: CallOverrides
    ): Promise<void>;

    isController(_adr: string, overrides?: CallOverrides): Promise<boolean>;

    isGovernance(_adr: string, overrides?: CallOverrides): Promise<boolean>;

    mintAndDistribute(
      totalAmount: BigNumberish,
      _distributor: string,
      _otherNetworkFund: string,
      mintAllAvailable: boolean,
      overrides?: CallOverrides
    ): Promise<void>;

    setDevFunds(
      _funds: string[],
      _fractions: BigNumberish[],
      overrides?: CallOverrides
    ): Promise<void>;

    token(overrides?: CallOverrides): Promise<string>;
  };

  filters: {
    FundsChanged(
      funds?: null,
      fractions?: null
    ): TypedEventFilter<
      [string[], BigNumber[]],
      { funds: string[]; fractions: BigNumber[] }
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
    BASE_RATIO(overrides?: CallOverrides): Promise<BigNumber>;

    FIRST_NETWORK_RATIO(overrides?: CallOverrides): Promise<BigNumber>;

    FUNDS_RATIO(overrides?: CallOverrides): Promise<BigNumber>;

    TOTAL_NETWORK_RATIO(overrides?: CallOverrides): Promise<BigNumber>;

    TOTAL_RATIO(overrides?: CallOverrides): Promise<BigNumber>;

    VERSION(overrides?: CallOverrides): Promise<BigNumber>;

    controller(overrides?: CallOverrides): Promise<BigNumber>;

    created(overrides?: CallOverrides): Promise<BigNumber>;

    devFunds(arg0: string, overrides?: CallOverrides): Promise<BigNumber>;

    devFundsLength(overrides?: CallOverrides): Promise<BigNumber>;

    devFundsList(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    initialize(
      _controller: string,
      _funds: string[],
      _fundsFractions: BigNumberish[],
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    initializeControllable(
      _controller: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    isController(_adr: string, overrides?: CallOverrides): Promise<BigNumber>;

    isGovernance(_adr: string, overrides?: CallOverrides): Promise<BigNumber>;

    mintAndDistribute(
      totalAmount: BigNumberish,
      _distributor: string,
      _otherNetworkFund: string,
      mintAllAvailable: boolean,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    setDevFunds(
      _funds: string[],
      _fractions: BigNumberish[],
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    token(overrides?: CallOverrides): Promise<BigNumber>;
  };

  populateTransaction: {
    BASE_RATIO(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    FIRST_NETWORK_RATIO(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    FUNDS_RATIO(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    TOTAL_NETWORK_RATIO(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    TOTAL_RATIO(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    VERSION(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    controller(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    created(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    devFunds(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    devFundsLength(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    devFundsList(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    initialize(
      _controller: string,
      _funds: string[],
      _fundsFractions: BigNumberish[],
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

    mintAndDistribute(
      totalAmount: BigNumberish,
      _distributor: string,
      _otherNetworkFund: string,
      mintAllAvailable: boolean,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    setDevFunds(
      _funds: string[],
      _fractions: BigNumberish[],
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    token(overrides?: CallOverrides): Promise<PopulatedTransaction>;
  };
}