// THIS IS AN AUTOGENERATED FILE. DO NOT EDIT THIS FILE DIRECTLY.

import {
  ethereum,
  JSONValue,
  TypedMap,
  Entity,
  Bytes,
  Address,
  BigInt
} from "@graphprotocol/graph-ts";

export class DeployedHumanAccount extends ethereum.Event {
  get params(): DeployedHumanAccount__Params {
    return new DeployedHumanAccount__Params(this);
  }
}

export class DeployedHumanAccount__Params {
  _event: DeployedHumanAccount;

  constructor(event: DeployedHumanAccount) {
    this._event = event;
  }

  get account(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get username(): string {
    return this._event.parameters[1].value.toString();
  }

  get owner(): Address {
    return this._event.parameters[2].value.toAddress();
  }
}

export class OwnershipTransferred extends ethereum.Event {
  get params(): OwnershipTransferred__Params {
    return new OwnershipTransferred__Params(this);
  }
}

export class OwnershipTransferred__Params {
  _event: OwnershipTransferred;

  constructor(event: OwnershipTransferred) {
    this._event = event;
  }

  get previousOwner(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get newOwner(): Address {
    return this._event.parameters[1].value.toAddress();
  }
}

export class HumanAccountFactory extends ethereum.SmartContract {
  static bind(address: Address): HumanAccountFactory {
    return new HumanAccountFactory("HumanAccountFactory", address);
  }

  accountImplementation(): Address {
    let result = super.call(
      "accountImplementation",
      "accountImplementation():(address)",
      []
    );

    return result[0].toAddress();
  }

  try_accountImplementation(): ethereum.CallResult<Address> {
    let result = super.tryCall(
      "accountImplementation",
      "accountImplementation():(address)",
      []
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }

  aclModule(): Address {
    let result = super.call("aclModule", "aclModule():(address)", []);

    return result[0].toAddress();
  }

  try_aclModule(): ethereum.CallResult<Address> {
    let result = super.tryCall("aclModule", "aclModule():(address)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }

  createAccount(
    accountUsername: string,
    salt: BigInt,
    ownerKey: Address
  ): Address {
    let result = super.call(
      "createAccount",
      "createAccount(string,uint256,address):(address)",
      [
        ethereum.Value.fromString(accountUsername),
        ethereum.Value.fromUnsignedBigInt(salt),
        ethereum.Value.fromAddress(ownerKey)
      ]
    );

    return result[0].toAddress();
  }

  try_createAccount(
    accountUsername: string,
    salt: BigInt,
    ownerKey: Address
  ): ethereum.CallResult<Address> {
    let result = super.tryCall(
      "createAccount",
      "createAccount(string,uint256,address):(address)",
      [
        ethereum.Value.fromString(accountUsername),
        ethereum.Value.fromUnsignedBigInt(salt),
        ethereum.Value.fromAddress(ownerKey)
      ]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }

  getAddress(accountUsername: string, salt: BigInt): Address {
    let result = super.call(
      "getAddress",
      "getAddress(string,uint256):(address)",
      [
        ethereum.Value.fromString(accountUsername),
        ethereum.Value.fromUnsignedBigInt(salt)
      ]
    );

    return result[0].toAddress();
  }

  try_getAddress(
    accountUsername: string,
    salt: BigInt
  ): ethereum.CallResult<Address> {
    let result = super.tryCall(
      "getAddress",
      "getAddress(string,uint256):(address)",
      [
        ethereum.Value.fromString(accountUsername),
        ethereum.Value.fromUnsignedBigInt(salt)
      ]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }

  owner(): Address {
    let result = super.call("owner", "owner():(address)", []);

    return result[0].toAddress();
  }

  try_owner(): ethereum.CallResult<Address> {
    let result = super.tryCall("owner", "owner():(address)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }

  usernameToAddress(param0: string): Address {
    let result = super.call(
      "usernameToAddress",
      "usernameToAddress(string):(address)",
      [ethereum.Value.fromString(param0)]
    );

    return result[0].toAddress();
  }

  try_usernameToAddress(param0: string): ethereum.CallResult<Address> {
    let result = super.tryCall(
      "usernameToAddress",
      "usernameToAddress(string):(address)",
      [ethereum.Value.fromString(param0)]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }
}

export class ConstructorCall extends ethereum.Call {
  get inputs(): ConstructorCall__Inputs {
    return new ConstructorCall__Inputs(this);
  }

  get outputs(): ConstructorCall__Outputs {
    return new ConstructorCall__Outputs(this);
  }
}

export class ConstructorCall__Inputs {
  _call: ConstructorCall;

  constructor(call: ConstructorCall) {
    this._call = call;
  }

  get _entryPoint(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get _owner(): Address {
    return this._call.inputValues[1].value.toAddress();
  }
}

export class ConstructorCall__Outputs {
  _call: ConstructorCall;

  constructor(call: ConstructorCall) {
    this._call = call;
  }
}

export class CreateAccountCall extends ethereum.Call {
  get inputs(): CreateAccountCall__Inputs {
    return new CreateAccountCall__Inputs(this);
  }

  get outputs(): CreateAccountCall__Outputs {
    return new CreateAccountCall__Outputs(this);
  }
}

export class CreateAccountCall__Inputs {
  _call: CreateAccountCall;

  constructor(call: CreateAccountCall) {
    this._call = call;
  }

  get accountUsername(): string {
    return this._call.inputValues[0].value.toString();
  }

  get salt(): BigInt {
    return this._call.inputValues[1].value.toBigInt();
  }

  get ownerKey(): Address {
    return this._call.inputValues[2].value.toAddress();
  }
}

export class CreateAccountCall__Outputs {
  _call: CreateAccountCall;

  constructor(call: CreateAccountCall) {
    this._call = call;
  }

  get ret(): Address {
    return this._call.outputValues[0].value.toAddress();
  }
}

export class DepositEthCall extends ethereum.Call {
  get inputs(): DepositEthCall__Inputs {
    return new DepositEthCall__Inputs(this);
  }

  get outputs(): DepositEthCall__Outputs {
    return new DepositEthCall__Outputs(this);
  }
}

export class DepositEthCall__Inputs {
  _call: DepositEthCall;

  constructor(call: DepositEthCall) {
    this._call = call;
  }
}

export class DepositEthCall__Outputs {
  _call: DepositEthCall;

  constructor(call: DepositEthCall) {
    this._call = call;
  }
}

export class RenounceOwnershipCall extends ethereum.Call {
  get inputs(): RenounceOwnershipCall__Inputs {
    return new RenounceOwnershipCall__Inputs(this);
  }

  get outputs(): RenounceOwnershipCall__Outputs {
    return new RenounceOwnershipCall__Outputs(this);
  }
}

export class RenounceOwnershipCall__Inputs {
  _call: RenounceOwnershipCall;

  constructor(call: RenounceOwnershipCall) {
    this._call = call;
  }
}

export class RenounceOwnershipCall__Outputs {
  _call: RenounceOwnershipCall;

  constructor(call: RenounceOwnershipCall) {
    this._call = call;
  }
}

export class StakeToEntryPointCall extends ethereum.Call {
  get inputs(): StakeToEntryPointCall__Inputs {
    return new StakeToEntryPointCall__Inputs(this);
  }

  get outputs(): StakeToEntryPointCall__Outputs {
    return new StakeToEntryPointCall__Outputs(this);
  }
}

export class StakeToEntryPointCall__Inputs {
  _call: StakeToEntryPointCall;

  constructor(call: StakeToEntryPointCall) {
    this._call = call;
  }
}

export class StakeToEntryPointCall__Outputs {
  _call: StakeToEntryPointCall;

  constructor(call: StakeToEntryPointCall) {
    this._call = call;
  }
}

export class TransferOwnershipCall extends ethereum.Call {
  get inputs(): TransferOwnershipCall__Inputs {
    return new TransferOwnershipCall__Inputs(this);
  }

  get outputs(): TransferOwnershipCall__Outputs {
    return new TransferOwnershipCall__Outputs(this);
  }
}

export class TransferOwnershipCall__Inputs {
  _call: TransferOwnershipCall;

  constructor(call: TransferOwnershipCall) {
    this._call = call;
  }

  get newOwner(): Address {
    return this._call.inputValues[0].value.toAddress();
  }
}

export class TransferOwnershipCall__Outputs {
  _call: TransferOwnershipCall;

  constructor(call: TransferOwnershipCall) {
    this._call = call;
  }
}

export class UnlockStakeCall extends ethereum.Call {
  get inputs(): UnlockStakeCall__Inputs {
    return new UnlockStakeCall__Inputs(this);
  }

  get outputs(): UnlockStakeCall__Outputs {
    return new UnlockStakeCall__Outputs(this);
  }
}

export class UnlockStakeCall__Inputs {
  _call: UnlockStakeCall;

  constructor(call: UnlockStakeCall) {
    this._call = call;
  }
}

export class UnlockStakeCall__Outputs {
  _call: UnlockStakeCall;

  constructor(call: UnlockStakeCall) {
    this._call = call;
  }
}

export class WithdrawEthCall extends ethereum.Call {
  get inputs(): WithdrawEthCall__Inputs {
    return new WithdrawEthCall__Inputs(this);
  }

  get outputs(): WithdrawEthCall__Outputs {
    return new WithdrawEthCall__Outputs(this);
  }
}

export class WithdrawEthCall__Inputs {
  _call: WithdrawEthCall;

  constructor(call: WithdrawEthCall) {
    this._call = call;
  }

  get amount(): BigInt {
    return this._call.inputValues[0].value.toBigInt();
  }
}

export class WithdrawEthCall__Outputs {
  _call: WithdrawEthCall;

  constructor(call: WithdrawEthCall) {
    this._call = call;
  }
}

export class WithdrawStakeCall extends ethereum.Call {
  get inputs(): WithdrawStakeCall__Inputs {
    return new WithdrawStakeCall__Inputs(this);
  }

  get outputs(): WithdrawStakeCall__Outputs {
    return new WithdrawStakeCall__Outputs(this);
  }
}

export class WithdrawStakeCall__Inputs {
  _call: WithdrawStakeCall;

  constructor(call: WithdrawStakeCall) {
    this._call = call;
  }
}

export class WithdrawStakeCall__Outputs {
  _call: WithdrawStakeCall;

  constructor(call: WithdrawStakeCall) {
    this._call = call;
  }
}
