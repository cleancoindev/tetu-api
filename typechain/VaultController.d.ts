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

interface VaultControllerInterface extends ethers.utils.Interface {
  functions: {
    "VERSION()": FunctionFragment;
    "addRewardTokens(address[],address)": FunctionFragment;
    "changeVaultsStatuses(address[],bool[])": FunctionFragment;
    "controller()": FunctionFragment;
    "created()": FunctionFragment;
    "initialize(address)": FunctionFragment;
    "initializeControllable(address)": FunctionFragment;
    "initializeVaultControllerStorage()": FunctionFragment;
    "isController(address)": FunctionFragment;
    "isGovernance(address)": FunctionFragment;
    "removeRewardTokens(address[],address)": FunctionFragment;
    "rewardBoostDuration()": FunctionFragment;
    "rewardRatioWithoutBoost()": FunctionFragment;
    "setRewardBoostDuration(uint256)": FunctionFragment;
    "setRewardRatioWithoutBoost(uint256)": FunctionFragment;
    "stopVault(address)": FunctionFragment;
    "stopVaultsBatch(address[])": FunctionFragment;
  };

  encodeFunctionData(functionFragment: "VERSION", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "addRewardTokens",
    values: [string[], string]
  ): string;
  encodeFunctionData(
    functionFragment: "changeVaultsStatuses",
    values: [string[], boolean[]]
  ): string;
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
    functionFragment: "initializeVaultControllerStorage",
    values?: undefined
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
    functionFragment: "removeRewardTokens",
    values: [string[], string]
  ): string;
  encodeFunctionData(
    functionFragment: "rewardBoostDuration",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "rewardRatioWithoutBoost",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "setRewardBoostDuration",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "setRewardRatioWithoutBoost",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(functionFragment: "stopVault", values: [string]): string;
  encodeFunctionData(
    functionFragment: "stopVaultsBatch",
    values: [string[]]
  ): string;

  decodeFunctionResult(functionFragment: "VERSION", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "addRewardTokens",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "changeVaultsStatuses",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "controller", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "created", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "initialize", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "initializeControllable",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "initializeVaultControllerStorage",
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
    functionFragment: "removeRewardTokens",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "rewardBoostDuration",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "rewardRatioWithoutBoost",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "setRewardBoostDuration",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "setRewardRatioWithoutBoost",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "stopVault", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "stopVaultsBatch",
    data: BytesLike
  ): Result;

  events: {
    "UpdateController(address,address)": EventFragment;
    "UpdatedAddressSlot(string,address,address)": EventFragment;
    "UpdatedUint256Slot(string,uint256,uint256)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "UpdateController"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "UpdatedAddressSlot"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "UpdatedUint256Slot"): EventFragment;
}

export class VaultController extends BaseContract {
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

  interface: VaultControllerInterface;

  functions: {
    VERSION(overrides?: CallOverrides): Promise<[string]>;

    addRewardTokens(
      _vaults: string[],
      _rt: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    changeVaultsStatuses(
      _targets: string[],
      _statuses: boolean[],
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

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

    initializeVaultControllerStorage(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    isController(_adr: string, overrides?: CallOverrides): Promise<[boolean]>;

    isGovernance(_adr: string, overrides?: CallOverrides): Promise<[boolean]>;

    removeRewardTokens(
      _vaults: string[],
      _rt: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    rewardBoostDuration(overrides?: CallOverrides): Promise<[BigNumber]>;

    rewardRatioWithoutBoost(overrides?: CallOverrides): Promise<[BigNumber]>;

    setRewardBoostDuration(
      duration: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    setRewardRatioWithoutBoost(
      ratio: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    stopVault(
      _vault: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    stopVaultsBatch(
      _vaults: string[],
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;
  };

  VERSION(overrides?: CallOverrides): Promise<string>;

  addRewardTokens(
    _vaults: string[],
    _rt: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  changeVaultsStatuses(
    _targets: string[],
    _statuses: boolean[],
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

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

  initializeVaultControllerStorage(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  isController(_adr: string, overrides?: CallOverrides): Promise<boolean>;

  isGovernance(_adr: string, overrides?: CallOverrides): Promise<boolean>;

  removeRewardTokens(
    _vaults: string[],
    _rt: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  rewardBoostDuration(overrides?: CallOverrides): Promise<BigNumber>;

  rewardRatioWithoutBoost(overrides?: CallOverrides): Promise<BigNumber>;

  setRewardBoostDuration(
    duration: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  setRewardRatioWithoutBoost(
    ratio: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  stopVault(
    _vault: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  stopVaultsBatch(
    _vaults: string[],
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  callStatic: {
    VERSION(overrides?: CallOverrides): Promise<string>;

    addRewardTokens(
      _vaults: string[],
      _rt: string,
      overrides?: CallOverrides
    ): Promise<void>;

    changeVaultsStatuses(
      _targets: string[],
      _statuses: boolean[],
      overrides?: CallOverrides
    ): Promise<void>;

    controller(overrides?: CallOverrides): Promise<string>;

    created(overrides?: CallOverrides): Promise<BigNumber>;

    initialize(_controller: string, overrides?: CallOverrides): Promise<void>;

    initializeControllable(
      _controller: string,
      overrides?: CallOverrides
    ): Promise<void>;

    initializeVaultControllerStorage(overrides?: CallOverrides): Promise<void>;

    isController(_adr: string, overrides?: CallOverrides): Promise<boolean>;

    isGovernance(_adr: string, overrides?: CallOverrides): Promise<boolean>;

    removeRewardTokens(
      _vaults: string[],
      _rt: string,
      overrides?: CallOverrides
    ): Promise<void>;

    rewardBoostDuration(overrides?: CallOverrides): Promise<BigNumber>;

    rewardRatioWithoutBoost(overrides?: CallOverrides): Promise<BigNumber>;

    setRewardBoostDuration(
      duration: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    setRewardRatioWithoutBoost(
      ratio: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    stopVault(_vault: string, overrides?: CallOverrides): Promise<void>;

    stopVaultsBatch(
      _vaults: string[],
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

    UpdatedAddressSlot(
      name?: string | null,
      oldValue?: null,
      newValue?: null
    ): TypedEventFilter<
      [string, string, string],
      { name: string; oldValue: string; newValue: string }
    >;

    UpdatedUint256Slot(
      name?: string | null,
      oldValue?: null,
      newValue?: null
    ): TypedEventFilter<
      [string, BigNumber, BigNumber],
      { name: string; oldValue: BigNumber; newValue: BigNumber }
    >;
  };

  estimateGas: {
    VERSION(overrides?: CallOverrides): Promise<BigNumber>;

    addRewardTokens(
      _vaults: string[],
      _rt: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    changeVaultsStatuses(
      _targets: string[],
      _statuses: boolean[],
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

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

    initializeVaultControllerStorage(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    isController(_adr: string, overrides?: CallOverrides): Promise<BigNumber>;

    isGovernance(_adr: string, overrides?: CallOverrides): Promise<BigNumber>;

    removeRewardTokens(
      _vaults: string[],
      _rt: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    rewardBoostDuration(overrides?: CallOverrides): Promise<BigNumber>;

    rewardRatioWithoutBoost(overrides?: CallOverrides): Promise<BigNumber>;

    setRewardBoostDuration(
      duration: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    setRewardRatioWithoutBoost(
      ratio: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    stopVault(
      _vault: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    stopVaultsBatch(
      _vaults: string[],
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    VERSION(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    addRewardTokens(
      _vaults: string[],
      _rt: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    changeVaultsStatuses(
      _targets: string[],
      _statuses: boolean[],
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

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

    initializeVaultControllerStorage(
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

    removeRewardTokens(
      _vaults: string[],
      _rt: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    rewardBoostDuration(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    rewardRatioWithoutBoost(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    setRewardBoostDuration(
      duration: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    setRewardRatioWithoutBoost(
      ratio: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    stopVault(
      _vault: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    stopVaultsBatch(
      _vaults: string[],
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;
  };
}