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

interface LiquidityBalancerInterface extends ethers.utils.Interface {
  functions: {
    "DENOMINATOR()": FunctionFragment;
    "VERSION()": FunctionFragment;
    "changeLiquidity(address,address)": FunctionFragment;
    "controller()": FunctionFragment;
    "created()": FunctionFragment;
    "initializeControllable(address)": FunctionFragment;
    "isController(address)": FunctionFragment;
    "isGovernance(address)": FunctionFragment;
    "lpTvlTargets(address)": FunctionFragment;
    "moveTokensToController(address,uint256)": FunctionFragment;
    "needToRemove(address,address)": FunctionFragment;
    "needToSell(address,address)": FunctionFragment;
    "priceTargets(address)": FunctionFragment;
    "removeLiqRatioNumerator()": FunctionFragment;
    "routers(address)": FunctionFragment;
    "setRemoveLiqRatioNumerator(uint256)": FunctionFragment;
    "setRouter(address,address)": FunctionFragment;
    "setTargetLpTvl(address,uint256)": FunctionFragment;
    "setTargetPrice(address,uint256)": FunctionFragment;
    "setTargetPriceUpdateNumerator(uint256)": FunctionFragment;
    "setTargetTvlUpdateNumerator(uint256)": FunctionFragment;
    "targetPriceUpdateNumerator()": FunctionFragment;
    "targetTvlUpdateNumerator()": FunctionFragment;
  };

  encodeFunctionData(
    functionFragment: "DENOMINATOR",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "VERSION", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "changeLiquidity",
    values: [string, string]
  ): string;
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
  encodeFunctionData(
    functionFragment: "lpTvlTargets",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "moveTokensToController",
    values: [string, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "needToRemove",
    values: [string, string]
  ): string;
  encodeFunctionData(
    functionFragment: "needToSell",
    values: [string, string]
  ): string;
  encodeFunctionData(
    functionFragment: "priceTargets",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "removeLiqRatioNumerator",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "routers", values: [string]): string;
  encodeFunctionData(
    functionFragment: "setRemoveLiqRatioNumerator",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "setRouter",
    values: [string, string]
  ): string;
  encodeFunctionData(
    functionFragment: "setTargetLpTvl",
    values: [string, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "setTargetPrice",
    values: [string, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "setTargetPriceUpdateNumerator",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "setTargetTvlUpdateNumerator",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "targetPriceUpdateNumerator",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "targetTvlUpdateNumerator",
    values?: undefined
  ): string;

  decodeFunctionResult(
    functionFragment: "DENOMINATOR",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "VERSION", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "changeLiquidity",
    data: BytesLike
  ): Result;
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
  decodeFunctionResult(
    functionFragment: "lpTvlTargets",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "moveTokensToController",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "needToRemove",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "needToSell", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "priceTargets",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "removeLiqRatioNumerator",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "routers", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "setRemoveLiqRatioNumerator",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "setRouter", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "setTargetLpTvl",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "setTargetPrice",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "setTargetPriceUpdateNumerator",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "setTargetTvlUpdateNumerator",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "targetPriceUpdateNumerator",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "targetTvlUpdateNumerator",
    data: BytesLike
  ): Result;

  events: {
    "LiqAdded(address,uint256,uint256)": EventFragment;
    "LiqRemoved(address,uint256)": EventFragment;
    "LpTvlTargetChanged(address,uint256)": EventFragment;
    "PriceNumeratorChanged(uint256)": EventFragment;
    "PriceTargetChanged(address,uint256)": EventFragment;
    "RemLiqNumeratorChanged(uint256)": EventFragment;
    "RouterChanged(address,address)": EventFragment;
    "Swap(address,address,uint256)": EventFragment;
    "TokenMoved(address,uint256)": EventFragment;
    "TvlNumeratorChanged(uint256)": EventFragment;
    "UpdateController(address,address)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "LiqAdded"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "LiqRemoved"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "LpTvlTargetChanged"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "PriceNumeratorChanged"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "PriceTargetChanged"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "RemLiqNumeratorChanged"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "RouterChanged"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "Swap"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "TokenMoved"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "TvlNumeratorChanged"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "UpdateController"): EventFragment;
}

export class LiquidityBalancer extends BaseContract {
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

  interface: LiquidityBalancerInterface;

  functions: {
    DENOMINATOR(overrides?: CallOverrides): Promise<[BigNumber]>;

    VERSION(overrides?: CallOverrides): Promise<[string]>;

    changeLiquidity(
      _token: string,
      _lp: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

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

    lpTvlTargets(arg0: string, overrides?: CallOverrides): Promise<[BigNumber]>;

    moveTokensToController(
      _token: string,
      amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    needToRemove(
      _token: string,
      _lp: string,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    needToSell(
      _token: string,
      _lp: string,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    priceTargets(arg0: string, overrides?: CallOverrides): Promise<[BigNumber]>;

    removeLiqRatioNumerator(overrides?: CallOverrides): Promise<[BigNumber]>;

    routers(arg0: string, overrides?: CallOverrides): Promise<[string]>;

    setRemoveLiqRatioNumerator(
      _numerator: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    setRouter(
      _lp: string,
      _router: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    setTargetLpTvl(
      _lp: string,
      _target: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    setTargetPrice(
      _token: string,
      _target: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    setTargetPriceUpdateNumerator(
      _numerator: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    setTargetTvlUpdateNumerator(
      _numerator: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    targetPriceUpdateNumerator(overrides?: CallOverrides): Promise<[BigNumber]>;

    targetTvlUpdateNumerator(overrides?: CallOverrides): Promise<[BigNumber]>;
  };

  DENOMINATOR(overrides?: CallOverrides): Promise<BigNumber>;

  VERSION(overrides?: CallOverrides): Promise<string>;

  changeLiquidity(
    _token: string,
    _lp: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  controller(overrides?: CallOverrides): Promise<string>;

  created(overrides?: CallOverrides): Promise<BigNumber>;

  initializeControllable(
    _controller: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  isController(_adr: string, overrides?: CallOverrides): Promise<boolean>;

  isGovernance(_adr: string, overrides?: CallOverrides): Promise<boolean>;

  lpTvlTargets(arg0: string, overrides?: CallOverrides): Promise<BigNumber>;

  moveTokensToController(
    _token: string,
    amount: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  needToRemove(
    _token: string,
    _lp: string,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  needToSell(
    _token: string,
    _lp: string,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  priceTargets(arg0: string, overrides?: CallOverrides): Promise<BigNumber>;

  removeLiqRatioNumerator(overrides?: CallOverrides): Promise<BigNumber>;

  routers(arg0: string, overrides?: CallOverrides): Promise<string>;

  setRemoveLiqRatioNumerator(
    _numerator: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  setRouter(
    _lp: string,
    _router: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  setTargetLpTvl(
    _lp: string,
    _target: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  setTargetPrice(
    _token: string,
    _target: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  setTargetPriceUpdateNumerator(
    _numerator: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  setTargetTvlUpdateNumerator(
    _numerator: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  targetPriceUpdateNumerator(overrides?: CallOverrides): Promise<BigNumber>;

  targetTvlUpdateNumerator(overrides?: CallOverrides): Promise<BigNumber>;

  callStatic: {
    DENOMINATOR(overrides?: CallOverrides): Promise<BigNumber>;

    VERSION(overrides?: CallOverrides): Promise<string>;

    changeLiquidity(
      _token: string,
      _lp: string,
      overrides?: CallOverrides
    ): Promise<void>;

    controller(overrides?: CallOverrides): Promise<string>;

    created(overrides?: CallOverrides): Promise<BigNumber>;

    initializeControllable(
      _controller: string,
      overrides?: CallOverrides
    ): Promise<void>;

    isController(_adr: string, overrides?: CallOverrides): Promise<boolean>;

    isGovernance(_adr: string, overrides?: CallOverrides): Promise<boolean>;

    lpTvlTargets(arg0: string, overrides?: CallOverrides): Promise<BigNumber>;

    moveTokensToController(
      _token: string,
      amount: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    needToRemove(
      _token: string,
      _lp: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    needToSell(
      _token: string,
      _lp: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    priceTargets(arg0: string, overrides?: CallOverrides): Promise<BigNumber>;

    removeLiqRatioNumerator(overrides?: CallOverrides): Promise<BigNumber>;

    routers(arg0: string, overrides?: CallOverrides): Promise<string>;

    setRemoveLiqRatioNumerator(
      _numerator: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    setRouter(
      _lp: string,
      _router: string,
      overrides?: CallOverrides
    ): Promise<void>;

    setTargetLpTvl(
      _lp: string,
      _target: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    setTargetPrice(
      _token: string,
      _target: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    setTargetPriceUpdateNumerator(
      _numerator: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    setTargetTvlUpdateNumerator(
      _numerator: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    targetPriceUpdateNumerator(overrides?: CallOverrides): Promise<BigNumber>;

    targetTvlUpdateNumerator(overrides?: CallOverrides): Promise<BigNumber>;
  };

  filters: {
    LiqAdded(
      lp?: null,
      amount0?: null,
      amount1?: null
    ): TypedEventFilter<
      [string, BigNumber, BigNumber],
      { lp: string; amount0: BigNumber; amount1: BigNumber }
    >;

    LiqRemoved(
      lp?: null,
      amount?: null
    ): TypedEventFilter<[string, BigNumber], { lp: string; amount: BigNumber }>;

    LpTvlTargetChanged(
      lp?: null,
      target?: null
    ): TypedEventFilter<[string, BigNumber], { lp: string; target: BigNumber }>;

    PriceNumeratorChanged(
      value?: null
    ): TypedEventFilter<[BigNumber], { value: BigNumber }>;

    PriceTargetChanged(
      token?: null,
      target?: null
    ): TypedEventFilter<
      [string, BigNumber],
      { token: string; target: BigNumber }
    >;

    RemLiqNumeratorChanged(
      value?: null
    ): TypedEventFilter<[BigNumber], { value: BigNumber }>;

    RouterChanged(
      lp?: null,
      router?: null
    ): TypedEventFilter<[string, string], { lp: string; router: string }>;

    Swap(
      tokenIn?: null,
      tokenOut?: null,
      amount?: null
    ): TypedEventFilter<
      [string, string, BigNumber],
      { tokenIn: string; tokenOut: string; amount: BigNumber }
    >;

    TokenMoved(
      token?: null,
      amount?: null
    ): TypedEventFilter<
      [string, BigNumber],
      { token: string; amount: BigNumber }
    >;

    TvlNumeratorChanged(
      value?: null
    ): TypedEventFilter<[BigNumber], { value: BigNumber }>;

    UpdateController(
      oldValue?: null,
      newValue?: null
    ): TypedEventFilter<
      [string, string],
      { oldValue: string; newValue: string }
    >;
  };

  estimateGas: {
    DENOMINATOR(overrides?: CallOverrides): Promise<BigNumber>;

    VERSION(overrides?: CallOverrides): Promise<BigNumber>;

    changeLiquidity(
      _token: string,
      _lp: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    controller(overrides?: CallOverrides): Promise<BigNumber>;

    created(overrides?: CallOverrides): Promise<BigNumber>;

    initializeControllable(
      _controller: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    isController(_adr: string, overrides?: CallOverrides): Promise<BigNumber>;

    isGovernance(_adr: string, overrides?: CallOverrides): Promise<BigNumber>;

    lpTvlTargets(arg0: string, overrides?: CallOverrides): Promise<BigNumber>;

    moveTokensToController(
      _token: string,
      amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    needToRemove(
      _token: string,
      _lp: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    needToSell(
      _token: string,
      _lp: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    priceTargets(arg0: string, overrides?: CallOverrides): Promise<BigNumber>;

    removeLiqRatioNumerator(overrides?: CallOverrides): Promise<BigNumber>;

    routers(arg0: string, overrides?: CallOverrides): Promise<BigNumber>;

    setRemoveLiqRatioNumerator(
      _numerator: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    setRouter(
      _lp: string,
      _router: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    setTargetLpTvl(
      _lp: string,
      _target: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    setTargetPrice(
      _token: string,
      _target: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    setTargetPriceUpdateNumerator(
      _numerator: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    setTargetTvlUpdateNumerator(
      _numerator: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    targetPriceUpdateNumerator(overrides?: CallOverrides): Promise<BigNumber>;

    targetTvlUpdateNumerator(overrides?: CallOverrides): Promise<BigNumber>;
  };

  populateTransaction: {
    DENOMINATOR(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    VERSION(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    changeLiquidity(
      _token: string,
      _lp: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

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

    lpTvlTargets(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    moveTokensToController(
      _token: string,
      amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    needToRemove(
      _token: string,
      _lp: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    needToSell(
      _token: string,
      _lp: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    priceTargets(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    removeLiqRatioNumerator(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    routers(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    setRemoveLiqRatioNumerator(
      _numerator: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    setRouter(
      _lp: string,
      _router: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    setTargetLpTvl(
      _lp: string,
      _target: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    setTargetPrice(
      _token: string,
      _target: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    setTargetPriceUpdateNumerator(
      _numerator: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    setTargetTvlUpdateNumerator(
      _numerator: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    targetPriceUpdateNumerator(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    targetTvlUpdateNumerator(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;
  };
}
