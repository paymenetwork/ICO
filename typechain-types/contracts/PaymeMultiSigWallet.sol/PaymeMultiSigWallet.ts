/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import type {
  BaseContract,
  BigNumber,
  BigNumberish,
  BytesLike,
  CallOverrides,
  ContractTransaction,
  Overrides,
  PopulatedTransaction,
  Signer,
  utils,
} from "ethers";
import type {
  FunctionFragment,
  Result,
  EventFragment,
} from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type {
  TypedEventFilter,
  TypedEvent,
  TypedListener,
  OnEvent,
  PromiseOrValue,
} from "../../common";

export interface PaymeMultiSigWalletInterface extends utils.Interface {
  functions: {
    "confirmTransaction(uint256)": FunctionFragment;
    "executeTransaction(uint256)": FunctionFragment;
    "getOwners()": FunctionFragment;
    "getTransaction(uint256)": FunctionFragment;
    "getTransactionCount()": FunctionFragment;
    "isConfirmed(uint256,address)": FunctionFragment;
    "isOwner(address)": FunctionFragment;
    "numConfirmationsRequired()": FunctionFragment;
    "owners(uint256)": FunctionFragment;
    "revokeConfirmation(uint256)": FunctionFragment;
    "submitTransaction(address,uint256,bytes)": FunctionFragment;
    "transactions(uint256)": FunctionFragment;
  };

  getFunction(
    nameOrSignatureOrTopic:
      | "confirmTransaction"
      | "executeTransaction"
      | "getOwners"
      | "getTransaction"
      | "getTransactionCount"
      | "isConfirmed"
      | "isOwner"
      | "numConfirmationsRequired"
      | "owners"
      | "revokeConfirmation"
      | "submitTransaction"
      | "transactions"
  ): FunctionFragment;

  encodeFunctionData(
    functionFragment: "confirmTransaction",
    values: [PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(
    functionFragment: "executeTransaction",
    values: [PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(functionFragment: "getOwners", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "getTransaction",
    values: [PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(
    functionFragment: "getTransactionCount",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "isConfirmed",
    values: [PromiseOrValue<BigNumberish>, PromiseOrValue<string>]
  ): string;
  encodeFunctionData(
    functionFragment: "isOwner",
    values: [PromiseOrValue<string>]
  ): string;
  encodeFunctionData(
    functionFragment: "numConfirmationsRequired",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "owners",
    values: [PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(
    functionFragment: "revokeConfirmation",
    values: [PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(
    functionFragment: "submitTransaction",
    values: [
      PromiseOrValue<string>,
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<BytesLike>
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "transactions",
    values: [PromiseOrValue<BigNumberish>]
  ): string;

  decodeFunctionResult(
    functionFragment: "confirmTransaction",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "executeTransaction",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "getOwners", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "getTransaction",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getTransactionCount",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "isConfirmed",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "isOwner", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "numConfirmationsRequired",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "owners", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "revokeConfirmation",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "submitTransaction",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "transactions",
    data: BytesLike
  ): Result;

  events: {
    "ConfirmTransaction(address,uint256)": EventFragment;
    "Deposit(address,uint256,uint256)": EventFragment;
    "ExecuteTransaction(address,uint256)": EventFragment;
    "RevokeConfirmation(address,uint256)": EventFragment;
    "SubmitTransaction(address,uint256,address,uint256,bytes)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "ConfirmTransaction"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "Deposit"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "ExecuteTransaction"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "RevokeConfirmation"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "SubmitTransaction"): EventFragment;
}

export interface ConfirmTransactionEventObject {
  owner: string;
  txIndex: BigNumber;
}
export type ConfirmTransactionEvent = TypedEvent<
  [string, BigNumber],
  ConfirmTransactionEventObject
>;

export type ConfirmTransactionEventFilter =
  TypedEventFilter<ConfirmTransactionEvent>;

export interface DepositEventObject {
  sender: string;
  amount: BigNumber;
  balance: BigNumber;
}
export type DepositEvent = TypedEvent<
  [string, BigNumber, BigNumber],
  DepositEventObject
>;

export type DepositEventFilter = TypedEventFilter<DepositEvent>;

export interface ExecuteTransactionEventObject {
  owner: string;
  txIndex: BigNumber;
}
export type ExecuteTransactionEvent = TypedEvent<
  [string, BigNumber],
  ExecuteTransactionEventObject
>;

export type ExecuteTransactionEventFilter =
  TypedEventFilter<ExecuteTransactionEvent>;

export interface RevokeConfirmationEventObject {
  owner: string;
  txIndex: BigNumber;
}
export type RevokeConfirmationEvent = TypedEvent<
  [string, BigNumber],
  RevokeConfirmationEventObject
>;

export type RevokeConfirmationEventFilter =
  TypedEventFilter<RevokeConfirmationEvent>;

export interface SubmitTransactionEventObject {
  owner: string;
  txIndex: BigNumber;
  to: string;
  value: BigNumber;
  data: string;
}
export type SubmitTransactionEvent = TypedEvent<
  [string, BigNumber, string, BigNumber, string],
  SubmitTransactionEventObject
>;

export type SubmitTransactionEventFilter =
  TypedEventFilter<SubmitTransactionEvent>;

export interface PaymeMultiSigWallet extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: PaymeMultiSigWalletInterface;

  queryFilter<TEvent extends TypedEvent>(
    event: TypedEventFilter<TEvent>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TEvent>>;

  listeners<TEvent extends TypedEvent>(
    eventFilter?: TypedEventFilter<TEvent>
  ): Array<TypedListener<TEvent>>;
  listeners(eventName?: string): Array<Listener>;
  removeAllListeners<TEvent extends TypedEvent>(
    eventFilter: TypedEventFilter<TEvent>
  ): this;
  removeAllListeners(eventName?: string): this;
  off: OnEvent<this>;
  on: OnEvent<this>;
  once: OnEvent<this>;
  removeListener: OnEvent<this>;

  functions: {
    confirmTransaction(
      _txIndex: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    executeTransaction(
      _txIndex: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    getOwners(overrides?: CallOverrides): Promise<[string[]]>;

    getTransaction(
      _txIndex: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<
      [string, BigNumber, string, boolean, BigNumber] & {
        to: string;
        value: BigNumber;
        data: string;
        executed: boolean;
        numConfirmations: BigNumber;
      }
    >;

    getTransactionCount(overrides?: CallOverrides): Promise<[BigNumber]>;

    isConfirmed(
      arg0: PromiseOrValue<BigNumberish>,
      arg1: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<[boolean]>;

    isOwner(
      arg0: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<[boolean]>;

    numConfirmationsRequired(overrides?: CallOverrides): Promise<[BigNumber]>;

    owners(
      arg0: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<[string]>;

    revokeConfirmation(
      _txIndex: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    submitTransaction(
      _to: PromiseOrValue<string>,
      _value: PromiseOrValue<BigNumberish>,
      _data: PromiseOrValue<BytesLike>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    transactions(
      arg0: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<
      [string, BigNumber, string, boolean, BigNumber] & {
        to: string;
        value: BigNumber;
        data: string;
        executed: boolean;
        numConfirmations: BigNumber;
      }
    >;
  };

  confirmTransaction(
    _txIndex: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  executeTransaction(
    _txIndex: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  getOwners(overrides?: CallOverrides): Promise<string[]>;

  getTransaction(
    _txIndex: PromiseOrValue<BigNumberish>,
    overrides?: CallOverrides
  ): Promise<
    [string, BigNumber, string, boolean, BigNumber] & {
      to: string;
      value: BigNumber;
      data: string;
      executed: boolean;
      numConfirmations: BigNumber;
    }
  >;

  getTransactionCount(overrides?: CallOverrides): Promise<BigNumber>;

  isConfirmed(
    arg0: PromiseOrValue<BigNumberish>,
    arg1: PromiseOrValue<string>,
    overrides?: CallOverrides
  ): Promise<boolean>;

  isOwner(
    arg0: PromiseOrValue<string>,
    overrides?: CallOverrides
  ): Promise<boolean>;

  numConfirmationsRequired(overrides?: CallOverrides): Promise<BigNumber>;

  owners(
    arg0: PromiseOrValue<BigNumberish>,
    overrides?: CallOverrides
  ): Promise<string>;

  revokeConfirmation(
    _txIndex: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  submitTransaction(
    _to: PromiseOrValue<string>,
    _value: PromiseOrValue<BigNumberish>,
    _data: PromiseOrValue<BytesLike>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  transactions(
    arg0: PromiseOrValue<BigNumberish>,
    overrides?: CallOverrides
  ): Promise<
    [string, BigNumber, string, boolean, BigNumber] & {
      to: string;
      value: BigNumber;
      data: string;
      executed: boolean;
      numConfirmations: BigNumber;
    }
  >;

  callStatic: {
    confirmTransaction(
      _txIndex: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<void>;

    executeTransaction(
      _txIndex: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<void>;

    getOwners(overrides?: CallOverrides): Promise<string[]>;

    getTransaction(
      _txIndex: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<
      [string, BigNumber, string, boolean, BigNumber] & {
        to: string;
        value: BigNumber;
        data: string;
        executed: boolean;
        numConfirmations: BigNumber;
      }
    >;

    getTransactionCount(overrides?: CallOverrides): Promise<BigNumber>;

    isConfirmed(
      arg0: PromiseOrValue<BigNumberish>,
      arg1: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<boolean>;

    isOwner(
      arg0: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<boolean>;

    numConfirmationsRequired(overrides?: CallOverrides): Promise<BigNumber>;

    owners(
      arg0: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<string>;

    revokeConfirmation(
      _txIndex: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<void>;

    submitTransaction(
      _to: PromiseOrValue<string>,
      _value: PromiseOrValue<BigNumberish>,
      _data: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<void>;

    transactions(
      arg0: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<
      [string, BigNumber, string, boolean, BigNumber] & {
        to: string;
        value: BigNumber;
        data: string;
        executed: boolean;
        numConfirmations: BigNumber;
      }
    >;
  };

  filters: {
    "ConfirmTransaction(address,uint256)"(
      owner?: PromiseOrValue<string> | null,
      txIndex?: PromiseOrValue<BigNumberish> | null
    ): ConfirmTransactionEventFilter;
    ConfirmTransaction(
      owner?: PromiseOrValue<string> | null,
      txIndex?: PromiseOrValue<BigNumberish> | null
    ): ConfirmTransactionEventFilter;

    "Deposit(address,uint256,uint256)"(
      sender?: PromiseOrValue<string> | null,
      amount?: null,
      balance?: null
    ): DepositEventFilter;
    Deposit(
      sender?: PromiseOrValue<string> | null,
      amount?: null,
      balance?: null
    ): DepositEventFilter;

    "ExecuteTransaction(address,uint256)"(
      owner?: PromiseOrValue<string> | null,
      txIndex?: PromiseOrValue<BigNumberish> | null
    ): ExecuteTransactionEventFilter;
    ExecuteTransaction(
      owner?: PromiseOrValue<string> | null,
      txIndex?: PromiseOrValue<BigNumberish> | null
    ): ExecuteTransactionEventFilter;

    "RevokeConfirmation(address,uint256)"(
      owner?: PromiseOrValue<string> | null,
      txIndex?: PromiseOrValue<BigNumberish> | null
    ): RevokeConfirmationEventFilter;
    RevokeConfirmation(
      owner?: PromiseOrValue<string> | null,
      txIndex?: PromiseOrValue<BigNumberish> | null
    ): RevokeConfirmationEventFilter;

    "SubmitTransaction(address,uint256,address,uint256,bytes)"(
      owner?: PromiseOrValue<string> | null,
      txIndex?: PromiseOrValue<BigNumberish> | null,
      to?: PromiseOrValue<string> | null,
      value?: null,
      data?: null
    ): SubmitTransactionEventFilter;
    SubmitTransaction(
      owner?: PromiseOrValue<string> | null,
      txIndex?: PromiseOrValue<BigNumberish> | null,
      to?: PromiseOrValue<string> | null,
      value?: null,
      data?: null
    ): SubmitTransactionEventFilter;
  };

  estimateGas: {
    confirmTransaction(
      _txIndex: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    executeTransaction(
      _txIndex: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    getOwners(overrides?: CallOverrides): Promise<BigNumber>;

    getTransaction(
      _txIndex: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getTransactionCount(overrides?: CallOverrides): Promise<BigNumber>;

    isConfirmed(
      arg0: PromiseOrValue<BigNumberish>,
      arg1: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    isOwner(
      arg0: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    numConfirmationsRequired(overrides?: CallOverrides): Promise<BigNumber>;

    owners(
      arg0: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    revokeConfirmation(
      _txIndex: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    submitTransaction(
      _to: PromiseOrValue<string>,
      _value: PromiseOrValue<BigNumberish>,
      _data: PromiseOrValue<BytesLike>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    transactions(
      arg0: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    confirmTransaction(
      _txIndex: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    executeTransaction(
      _txIndex: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    getOwners(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    getTransaction(
      _txIndex: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getTransactionCount(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    isConfirmed(
      arg0: PromiseOrValue<BigNumberish>,
      arg1: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    isOwner(
      arg0: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    numConfirmationsRequired(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    owners(
      arg0: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    revokeConfirmation(
      _txIndex: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    submitTransaction(
      _to: PromiseOrValue<string>,
      _value: PromiseOrValue<BigNumberish>,
      _data: PromiseOrValue<BytesLike>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    transactions(
      arg0: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;
  };
}
