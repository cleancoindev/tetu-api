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

interface IBookkeeperInterface extends ethers.utils.Interface {
  functions: {
    "addStrategy(address)": FunctionFragment;
    "addVault(address)": FunctionFragment;
    "lastHardWork(address)": FunctionFragment;
    "lastPpfsChange(address)": FunctionFragment;
    "registerFundKeeperEarned(address,uint256)": FunctionFragment;
    "registerPpfsChange(address,uint256)": FunctionFragment;
    "registerStrategyEarned(uint256)": FunctionFragment;
    "registerUserAction(address,uint256,bool)": FunctionFragment;
    "registerUserEarned(address,address,address,uint256)": FunctionFragment;
    "registerVaultTransfer(address,address,uint256)": FunctionFragment;
    "strategies()": FunctionFragment;
    "strategiesLength()": FunctionFragment;
    "targetTokenEarned(address)": FunctionFragment;
    "userEarned(address,address,address)": FunctionFragment;
    "vaultUsersBalances(address,address)": FunctionFragment;
    "vaultUsersQuantity(address)": FunctionFragment;
    "vaults()": FunctionFragment;
    "vaultsLength()": FunctionFragment;
  };

  encodeFunctionData(functionFragment: "addStrategy", values: [string]): string;
  encodeFunctionData(functionFragment: "addVault", values: [string]): string;
  encodeFunctionData(
    functionFragment: "lastHardWork",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "lastPpfsChange",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "registerFundKeeperEarned",
    values: [string, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "registerPpfsChange",
    values: [string, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "registerStrategyEarned",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "registerUserAction",
    values: [string, BigNumberish, boolean]
  ): string;
  encodeFunctionData(
    functionFragment: "registerUserEarned",
    values: [string, string, string, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "registerVaultTransfer",
    values: [string, string, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "strategies",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "strategiesLength",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "targetTokenEarned",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "userEarned",
    values: [string, string, string]
  ): string;
  encodeFunctionData(
    functionFragment: "vaultUsersBalances",
    values: [string, string]
  ): string;
  encodeFunctionData(
    functionFragment: "vaultUsersQuantity",
    values: [string]
  ): string;
  encodeFunctionData(functionFragment: "vaults", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "vaultsLength",
    values?: undefined
  ): string;

  decodeFunctionResult(
    functionFragment: "addStrategy",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "addVault", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "lastHardWork",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "lastPpfsChange",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "registerFundKeeperEarned",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "registerPpfsChange",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "registerStrategyEarned",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "registerUserAction",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "registerUserEarned",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "registerVaultTransfer",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "strategies", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "strategiesLength",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "targetTokenEarned",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "userEarned", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "vaultUsersBalances",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "vaultUsersQuantity",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "vaults", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "vaultsLength",
    data: BytesLike
  ): Result;

  events: {};
}

export class IBookkeeper extends BaseContract {
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

  interface: IBookkeeperInterface;

  functions: {
    addStrategy(
      _strategy: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    addVault(
      _vault: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    lastHardWork(
      vault: string,
      overrides?: CallOverrides
    ): Promise<
      [
        [string, BigNumber, BigNumber, BigNumber] & {
          strategy: string;
          block: BigNumber;
          time: BigNumber;
          targetTokenAmount: BigNumber;
        }
      ]
    >;

    lastPpfsChange(
      vault: string,
      overrides?: CallOverrides
    ): Promise<
      [
        [
          string,
          BigNumber,
          BigNumber,
          BigNumber,
          BigNumber,
          BigNumber,
          BigNumber
        ] & {
          vault: string;
          block: BigNumber;
          time: BigNumber;
          value: BigNumber;
          oldBlock: BigNumber;
          oldTime: BigNumber;
          oldValue: BigNumber;
        }
      ]
    >;

    registerFundKeeperEarned(
      _token: string,
      _fundTokenAmount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    registerPpfsChange(
      vault: string,
      value: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    registerStrategyEarned(
      _targetTokenAmount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    registerUserAction(
      _user: string,
      _amount: BigNumberish,
      _deposit: boolean,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    registerUserEarned(
      _user: string,
      _vault: string,
      _rt: string,
      _amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    registerVaultTransfer(
      from: string,
      to: string,
      amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    strategies(overrides?: CallOverrides): Promise<[string[]]>;

    strategiesLength(overrides?: CallOverrides): Promise<[BigNumber]>;

    targetTokenEarned(
      vault: string,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    userEarned(
      user: string,
      vault: string,
      token: string,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    vaultUsersBalances(
      vault: string,
      user: string,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    vaultUsersQuantity(
      vault: string,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    vaults(overrides?: CallOverrides): Promise<[string[]]>;

    vaultsLength(overrides?: CallOverrides): Promise<[BigNumber]>;
  };

  addStrategy(
    _strategy: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  addVault(
    _vault: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  lastHardWork(
    vault: string,
    overrides?: CallOverrides
  ): Promise<
    [string, BigNumber, BigNumber, BigNumber] & {
      strategy: string;
      block: BigNumber;
      time: BigNumber;
      targetTokenAmount: BigNumber;
    }
  >;

  lastPpfsChange(
    vault: string,
    overrides?: CallOverrides
  ): Promise<
    [
      string,
      BigNumber,
      BigNumber,
      BigNumber,
      BigNumber,
      BigNumber,
      BigNumber
    ] & {
      vault: string;
      block: BigNumber;
      time: BigNumber;
      value: BigNumber;
      oldBlock: BigNumber;
      oldTime: BigNumber;
      oldValue: BigNumber;
    }
  >;

  registerFundKeeperEarned(
    _token: string,
    _fundTokenAmount: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  registerPpfsChange(
    vault: string,
    value: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  registerStrategyEarned(
    _targetTokenAmount: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  registerUserAction(
    _user: string,
    _amount: BigNumberish,
    _deposit: boolean,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  registerUserEarned(
    _user: string,
    _vault: string,
    _rt: string,
    _amount: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  registerVaultTransfer(
    from: string,
    to: string,
    amount: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  strategies(overrides?: CallOverrides): Promise<string[]>;

  strategiesLength(overrides?: CallOverrides): Promise<BigNumber>;

  targetTokenEarned(
    vault: string,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  userEarned(
    user: string,
    vault: string,
    token: string,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  vaultUsersBalances(
    vault: string,
    user: string,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  vaultUsersQuantity(
    vault: string,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  vaults(overrides?: CallOverrides): Promise<string[]>;

  vaultsLength(overrides?: CallOverrides): Promise<BigNumber>;

  callStatic: {
    addStrategy(_strategy: string, overrides?: CallOverrides): Promise<void>;

    addVault(_vault: string, overrides?: CallOverrides): Promise<void>;

    lastHardWork(
      vault: string,
      overrides?: CallOverrides
    ): Promise<
      [string, BigNumber, BigNumber, BigNumber] & {
        strategy: string;
        block: BigNumber;
        time: BigNumber;
        targetTokenAmount: BigNumber;
      }
    >;

    lastPpfsChange(
      vault: string,
      overrides?: CallOverrides
    ): Promise<
      [
        string,
        BigNumber,
        BigNumber,
        BigNumber,
        BigNumber,
        BigNumber,
        BigNumber
      ] & {
        vault: string;
        block: BigNumber;
        time: BigNumber;
        value: BigNumber;
        oldBlock: BigNumber;
        oldTime: BigNumber;
        oldValue: BigNumber;
      }
    >;

    registerFundKeeperEarned(
      _token: string,
      _fundTokenAmount: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    registerPpfsChange(
      vault: string,
      value: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    registerStrategyEarned(
      _targetTokenAmount: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    registerUserAction(
      _user: string,
      _amount: BigNumberish,
      _deposit: boolean,
      overrides?: CallOverrides
    ): Promise<void>;

    registerUserEarned(
      _user: string,
      _vault: string,
      _rt: string,
      _amount: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    registerVaultTransfer(
      from: string,
      to: string,
      amount: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    strategies(overrides?: CallOverrides): Promise<string[]>;

    strategiesLength(overrides?: CallOverrides): Promise<BigNumber>;

    targetTokenEarned(
      vault: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    userEarned(
      user: string,
      vault: string,
      token: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    vaultUsersBalances(
      vault: string,
      user: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    vaultUsersQuantity(
      vault: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    vaults(overrides?: CallOverrides): Promise<string[]>;

    vaultsLength(overrides?: CallOverrides): Promise<BigNumber>;
  };

  filters: {};

  estimateGas: {
    addStrategy(
      _strategy: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    addVault(
      _vault: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    lastHardWork(vault: string, overrides?: CallOverrides): Promise<BigNumber>;

    lastPpfsChange(
      vault: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    registerFundKeeperEarned(
      _token: string,
      _fundTokenAmount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    registerPpfsChange(
      vault: string,
      value: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    registerStrategyEarned(
      _targetTokenAmount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    registerUserAction(
      _user: string,
      _amount: BigNumberish,
      _deposit: boolean,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    registerUserEarned(
      _user: string,
      _vault: string,
      _rt: string,
      _amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    registerVaultTransfer(
      from: string,
      to: string,
      amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    strategies(overrides?: CallOverrides): Promise<BigNumber>;

    strategiesLength(overrides?: CallOverrides): Promise<BigNumber>;

    targetTokenEarned(
      vault: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    userEarned(
      user: string,
      vault: string,
      token: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    vaultUsersBalances(
      vault: string,
      user: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    vaultUsersQuantity(
      vault: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    vaults(overrides?: CallOverrides): Promise<BigNumber>;

    vaultsLength(overrides?: CallOverrides): Promise<BigNumber>;
  };

  populateTransaction: {
    addStrategy(
      _strategy: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    addVault(
      _vault: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    lastHardWork(
      vault: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    lastPpfsChange(
      vault: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    registerFundKeeperEarned(
      _token: string,
      _fundTokenAmount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    registerPpfsChange(
      vault: string,
      value: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    registerStrategyEarned(
      _targetTokenAmount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    registerUserAction(
      _user: string,
      _amount: BigNumberish,
      _deposit: boolean,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    registerUserEarned(
      _user: string,
      _vault: string,
      _rt: string,
      _amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    registerVaultTransfer(
      from: string,
      to: string,
      amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    strategies(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    strategiesLength(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    targetTokenEarned(
      vault: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    userEarned(
      user: string,
      vault: string,
      token: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    vaultUsersBalances(
      vault: string,
      user: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    vaultUsersQuantity(
      vault: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    vaults(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    vaultsLength(overrides?: CallOverrides): Promise<PopulatedTransaction>;
  };
}