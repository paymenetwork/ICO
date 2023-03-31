/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import {
  Signer,
  utils,
  Contract,
  ContractFactory,
  BigNumberish,
  Overrides,
} from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../../common";
import type {
  PayMEMultiSigWallet,
  PayMEMultiSigWalletInterface,
} from "../../contracts/PayMEMultiSigWallet";

const _abi = [
  {
    inputs: [
      {
        internalType: "address[]",
        name: "_owners",
        type: "address[]",
      },
      {
        internalType: "uint256",
        name: "_numConfirmationsRequired",
        type: "uint256",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "uint256",
        name: "txIndex",
        type: "uint256",
      },
    ],
    name: "ConfirmTransaction",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "sender",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "balance",
        type: "uint256",
      },
    ],
    name: "Deposit",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "uint256",
        name: "txIndex",
        type: "uint256",
      },
    ],
    name: "ExecuteTransaction",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "uint256",
        name: "txIndex",
        type: "uint256",
      },
    ],
    name: "RevokeConfirmation",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "uint256",
        name: "txIndex",
        type: "uint256",
      },
      {
        indexed: true,
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "bytes",
        name: "data",
        type: "bytes",
      },
    ],
    name: "SubmitTransaction",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_txIndex",
        type: "uint256",
      },
    ],
    name: "confirmTransaction",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_txIndex",
        type: "uint256",
      },
    ],
    name: "executeTransaction",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "getOwners",
    outputs: [
      {
        internalType: "address[]",
        name: "",
        type: "address[]",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_txIndex",
        type: "uint256",
      },
    ],
    name: "getTransaction",
    outputs: [
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
      {
        internalType: "bytes",
        name: "data",
        type: "bytes",
      },
      {
        internalType: "bool",
        name: "executed",
        type: "bool",
      },
      {
        internalType: "uint256",
        name: "numConfirmations",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "getTransactionCount",
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
    inputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    name: "isConfirmed",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    name: "isOwner",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "numConfirmationsRequired",
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
    inputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    name: "owners",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_txIndex",
        type: "uint256",
      },
    ],
    name: "revokeConfirmation",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "_value",
        type: "uint256",
      },
      {
        internalType: "bytes",
        name: "_data",
        type: "bytes",
      },
    ],
    name: "submitTransaction",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    name: "transactions",
    outputs: [
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
      {
        internalType: "bytes",
        name: "data",
        type: "bytes",
      },
      {
        internalType: "bool",
        name: "executed",
        type: "bool",
      },
      {
        internalType: "uint256",
        name: "numConfirmations",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    stateMutability: "payable",
    type: "receive",
  },
];

const _bytecode =
  "0x60806040523480156200001157600080fd5b506040516200144838038062001448833981016040819052620000349162000282565b60008251116200007d5760405162461bcd60e51b815260206004820152600f60248201526e1bdddb995c9cc81c995c5d5a5c9959608a1b60448201526064015b60405180910390fd5b6000811180156200008f575081518111155b620000ee5760405162461bcd60e51b815260206004820152602860248201527f696e76616c6964206e756d626572206f6620726571756972656420636f6e6669604482015267726d6174696f6e7360c01b606482015260840162000074565b60005b8251811015620002445760008382815181106200011257620001126200035c565b6020026020010151905060006001600160a01b0316816001600160a01b03161415620001715760405162461bcd60e51b815260206004820152600d60248201526c34b73b30b634b21037bbb732b960991b604482015260640162000074565b6001600160a01b03811660009081526001602052604090205460ff1615620001cf5760405162461bcd60e51b815260206004820152601060248201526f6f776e6572206e6f7420756e6971756560801b604482015260640162000074565b6001600160a01b031660008181526001602081905260408220805460ff191682179055815490810182559080527f290decd9548b62a8d60345a988386fc84ba6bc95484008f6362f93160ef3e5630180546001600160a01b0319169091179055806200023b8162000372565b915050620000f1565b50600255506200039c565b634e487b7160e01b600052604160045260246000fd5b80516001600160a01b03811681146200027d57600080fd5b919050565b600080604083850312156200029657600080fd5b82516001600160401b0380821115620002ae57600080fd5b818501915085601f830112620002c357600080fd5b8151602082821115620002da57620002da6200024f565b8160051b604051601f19603f830116810181811086821117156200030257620003026200024f565b6040529283528183019350848101820192898411156200032157600080fd5b948201945b838610156200034a576200033a8662000265565b8552948201949382019362000326565b97909101519698969750505050505050565b634e487b7160e01b600052603260045260246000fd5b60006000198214156200039557634e487b7160e01b600052601160045260246000fd5b5060010190565b61109c80620003ac6000396000f3fe6080604052600436106100ab5760003560e01c80639ace38c2116100645780639ace38c21461021b578063a0e67e2b1461023b578063c01a8c841461025d578063c64274741461027d578063d0549b851461029d578063ee22610b146102b357600080fd5b8063025e7c27146100f157806320ea8d861461012e5780632e7700f0146101505780632f54bf6e1461016f57806333ea3dc8146101af57806380f59a65146101e057600080fd5b366100ec576040805134815247602082015233917f90890809c654f11d6e72a28fa60149770a0d11ec6c92319d6ceb2bb0a4ea1a15910160405180910390a2005b600080fd5b3480156100fd57600080fd5b5061011161010c366004610c5f565b6102d3565b6040516001600160a01b0390911681526020015b60405180910390f35b34801561013a57600080fd5b5061014e610149366004610c5f565b6102fd565b005b34801561015c57600080fd5b506004545b604051908152602001610125565b34801561017b57600080fd5b5061019f61018a366004610c94565b60016020526000908152604090205460ff1681565b6040519015158152602001610125565b3480156101bb57600080fd5b506101cf6101ca366004610c5f565b610488565b604051610125959493929190610d03565b3480156101ec57600080fd5b5061019f6101fb366004610d3e565b600360209081526000928352604080842090915290825290205460ff1681565b34801561022757600080fd5b506101cf610236366004610c5f565b610583565b34801561024757600080fd5b5061025061065c565b6040516101259190610d6a565b34801561026957600080fd5b5061014e610278366004610c5f565b6106be565b34801561028957600080fd5b5061014e610298366004610dcd565b61084c565b3480156102a957600080fd5b5061016160025481565b3480156102bf57600080fd5b5061014e6102ce366004610c5f565b6109d3565b600081815481106102e357600080fd5b6000918252602090912001546001600160a01b0316905081565b3360009081526001602052604090205460ff166103355760405162461bcd60e51b815260040161032c90610e98565b60405180910390fd5b600454819081106103585760405162461bcd60e51b815260040161032c90610ebb565b816004818154811061036c5761036c610ee6565b600091825260209091206003600590920201015460ff16156103a05760405162461bcd60e51b815260040161032c90610efc565b6000600484815481106103b5576103b5610ee6565b600091825260208083208784526003825260408085203386529092529220546005909102909101915060ff166104205760405162461bcd60e51b815260206004820152601060248201526f1d1e081b9bdd0818dbdb999a5c9b595960821b604482015260640161032c565b60018160040160008282546104359190610f3f565b90915550506000848152600360209081526040808320338085529252808320805460ff191690555186927ff0dca620e2e81f7841d07bcc105e1704fb01475b278a9d4c236e1c62945edd5591a350505050565b60008060606000806000600487815481106104a5576104a5610ee6565b6000918252602090912060059091020180546001820154600383015460048401546002850180549596506001600160a01b039094169492939260ff9092169183906104ef90610f56565b80601f016020809104026020016040519081016040528092919081815260200182805461051b90610f56565b80156105685780601f1061053d57610100808354040283529160200191610568565b820191906000526020600020905b81548152906001019060200180831161054b57829003601f168201915b50505050509250955095509550955095505091939590929450565b6004818154811061059357600080fd5b60009182526020909120600590910201805460018201546002830180546001600160a01b0390931694509092916105c990610f56565b80601f01602080910402602001604051908101604052809291908181526020018280546105f590610f56565b80156106425780601f1061061757610100808354040283529160200191610642565b820191906000526020600020905b81548152906001019060200180831161062557829003601f168201915b505050506003830154600490930154919260ff1691905085565b606060008054806020026020016040519081016040528092919081815260200182805480156106b457602002820191906000526020600020905b81546001600160a01b03168152600190910190602001808311610696575b5050505050905090565b3360009081526001602052604090205460ff166106ed5760405162461bcd60e51b815260040161032c90610e98565b600454819081106107105760405162461bcd60e51b815260040161032c90610ebb565b816004818154811061072457610724610ee6565b600091825260209091206003600590920201015460ff16156107585760405162461bcd60e51b815260040161032c90610efc565b6000838152600360209081526040808320338452909152902054839060ff16156107bb5760405162461bcd60e51b81526020600482015260146024820152731d1e08185b1c9958591e4818dbdb999a5c9b595960621b604482015260640161032c565b6000600485815481106107d0576107d0610ee6565b9060005260206000209060050201905060018160040160008282546107f59190610f91565b90915550506000858152600360209081526040808320338085529252808320805460ff191660011790555187927f5cbe105e36805f7820e291f799d5794ff948af2a5f664e580382defb6339004191a35050505050565b3360009081526001602052604090205460ff1661087b5760405162461bcd60e51b815260040161032c90610e98565b600480546040805160a0810182526001600160a01b0387811682526020808301888152938301878152600060608501819052608085018190526001870188559690965282517f8a35acfbc15ff81a39ae7d344fd709f28e8600b4aa8c65c6b64bfe7fe36bd19b6005870290810180546001600160a01b0319169290941691909117835593517f8a35acfbc15ff81a39ae7d344fd709f28e8600b4aa8c65c6b64bfe7fe36bd19c8501559451805194959294919361095f937f8a35acfbc15ff81a39ae7d344fd709f28e8600b4aa8c65c6b64bfe7fe36bd19d90910192910190610bc6565b50606082015160038201805460ff19169115159190911790556080909101516004909101556040516001600160a01b03851690829033907fd5a05bf70715ad82a09a756320284a1b54c9ff74cd0f8cce6219e79b563fe59d906109c59088908890610fa9565b60405180910390a450505050565b3360009081526001602052604090205460ff16610a025760405162461bcd60e51b815260040161032c90610e98565b60045481908110610a255760405162461bcd60e51b815260040161032c90610ebb565b8160048181548110610a3957610a39610ee6565b600091825260209091206003600590920201015460ff1615610a6d5760405162461bcd60e51b815260040161032c90610efc565b600060048481548110610a8257610a82610ee6565b9060005260206000209060050201905060025481600401541015610adc5760405162461bcd60e51b81526020600482015260116024820152700c6c2dcdcdee840caf0cac6eae8ca40e8f607b1b604482015260640161032c565b60038101805460ff191660019081179091558154908201546040516000926001600160a01b03169190610b13906002860190610fca565b60006040518083038185875af1925050503d8060008114610b50576040519150601f19603f3d011682016040523d82523d6000602084013e610b55565b606091505b5050905080610b925760405162461bcd60e51b81526020600482015260096024820152681d1e0819985a5b195960ba1b604482015260640161032c565b604051859033907f5445f318f4f5fcfb66592e68e0cc5822aa15664039bd5f0ffde24c5a8142b1ac90600090a35050505050565b828054610bd290610f56565b90600052602060002090601f016020900481019282610bf45760008555610c3a565b82601f10610c0d57805160ff1916838001178555610c3a565b82800160010185558215610c3a579182015b82811115610c3a578251825591602001919060010190610c1f565b50610c46929150610c4a565b5090565b5b80821115610c465760008155600101610c4b565b600060208284031215610c7157600080fd5b5035919050565b80356001600160a01b0381168114610c8f57600080fd5b919050565b600060208284031215610ca657600080fd5b610caf82610c78565b9392505050565b6000815180845260005b81811015610cdc57602081850181015186830182015201610cc0565b81811115610cee576000602083870101525b50601f01601f19169290920160200192915050565b60018060a01b038616815284602082015260a060408201526000610d2a60a0830186610cb6565b931515606083015250608001529392505050565b60008060408385031215610d5157600080fd5b82359150610d6160208401610c78565b90509250929050565b6020808252825182820181905260009190848201906040850190845b81811015610dab5783516001600160a01b031683529284019291840191600101610d86565b50909695505050505050565b634e487b7160e01b600052604160045260246000fd5b600080600060608486031215610de257600080fd5b610deb84610c78565b925060208401359150604084013567ffffffffffffffff80821115610e0f57600080fd5b818601915086601f830112610e2357600080fd5b813581811115610e3557610e35610db7565b604051601f8201601f19908116603f01168101908382118183101715610e5d57610e5d610db7565b81604052828152896020848701011115610e7657600080fd5b8260208601602083013760006020848301015280955050505050509250925092565b6020808252600990820152683737ba1037bbb732b960b91b604082015260600190565b6020808252601190820152701d1e08191bd95cc81b9bdd08195e1a5cdd607a1b604082015260600190565b634e487b7160e01b600052603260045260246000fd5b6020808252601390820152721d1e08185b1c9958591e48195e1958dd5d1959606a1b604082015260600190565b634e487b7160e01b600052601160045260246000fd5b600082821015610f5157610f51610f29565b500390565b600181811c90821680610f6a57607f821691505b60208210811415610f8b57634e487b7160e01b600052602260045260246000fd5b50919050565b60008219821115610fa457610fa4610f29565b500190565b828152604060208201526000610fc26040830184610cb6565b949350505050565b600080835481600182811c915080831680610fe657607f831692505b602080841082141561100657634e487b7160e01b86526022600452602486fd5b81801561101a576001811461102b57611058565b60ff19861689528489019650611058565b60008a81526020902060005b868110156110505781548b820152908501908301611037565b505084890196505b50949897505050505050505056fea264697066735822122039e23f90c3a5c89f971ae945f2c958057823dfd636eb7b1363adb7ca85c319de64736f6c63430008090033";

type PayMEMultiSigWalletConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: PayMEMultiSigWalletConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class PayMEMultiSigWallet__factory extends ContractFactory {
  constructor(...args: PayMEMultiSigWalletConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    _owners: PromiseOrValue<string>[],
    _numConfirmationsRequired: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<PayMEMultiSigWallet> {
    return super.deploy(
      _owners,
      _numConfirmationsRequired,
      overrides || {}
    ) as Promise<PayMEMultiSigWallet>;
  }
  override getDeployTransaction(
    _owners: PromiseOrValue<string>[],
    _numConfirmationsRequired: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(
      _owners,
      _numConfirmationsRequired,
      overrides || {}
    );
  }
  override attach(address: string): PayMEMultiSigWallet {
    return super.attach(address) as PayMEMultiSigWallet;
  }
  override connect(signer: Signer): PayMEMultiSigWallet__factory {
    return super.connect(signer) as PayMEMultiSigWallet__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): PayMEMultiSigWalletInterface {
    return new utils.Interface(_abi) as PayMEMultiSigWalletInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): PayMEMultiSigWallet {
    return new Contract(address, _abi, signerOrProvider) as PayMEMultiSigWallet;
  }
}
