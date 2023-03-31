/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../../../../common";
import type {
  TestMockTokenVesting,
  TestMockTokenVestingInterface,
} from "../../../../contracts/mocks/test/TestMockTokenVesting";

const _abi = [
  {
    inputs: [],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "previousOwner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "OwnershipTransferred",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "Released",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [],
    name: "Revoked",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "beneficiary",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "TokenReleasedAtTGE",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    name: "VestingScheduleCreated",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "holder",
        type: "address",
      },
    ],
    name: "computeNextVestingScheduleIdForHolder",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "vestingScheduleId",
        type: "bytes32",
      },
    ],
    name: "computeReleasableAmount",
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
        internalType: "address",
        name: "holder",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "index",
        type: "uint256",
      },
    ],
    name: "computeVestingScheduleIdForAddressAndIndex",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    stateMutability: "pure",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "iBeneficiary",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "iStart",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "iCliff",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "iDuration",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "iSlicePeriodSeconds",
        type: "uint256",
      },
      {
        internalType: "bool",
        name: "iRevocable",
        type: "bool",
      },
      {
        internalType: "uint256",
        name: "iAmount",
        type: "uint256",
      },
      {
        internalType: "bool",
        name: "iReleaseAtTGE",
        type: "bool",
      },
    ],
    name: "createVestingSchedule",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "crowdsalesAddress",
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
    inputs: [],
    name: "getCurrentTime",
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
        internalType: "address",
        name: "holder",
        type: "address",
      },
    ],
    name: "getLastVestingScheduleForHolder",
    outputs: [
      {
        components: [
          {
            internalType: "bool",
            name: "initialized",
            type: "bool",
          },
          {
            internalType: "address",
            name: "beneficiary",
            type: "address",
          },
          {
            internalType: "uint256",
            name: "cliff",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "start",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "duration",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "slicePeriodSeconds",
            type: "uint256",
          },
          {
            internalType: "bool",
            name: "revocable",
            type: "bool",
          },
          {
            internalType: "uint256",
            name: "amountTotal",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "released",
            type: "uint256",
          },
          {
            internalType: "bool",
            name: "revoked",
            type: "bool",
          },
          {
            internalType: "bool",
            name: "releaseAtTGE",
            type: "bool",
          },
        ],
        internalType: "struct PaymeTokenVesting.VestingSchedule",
        name: "",
        type: "tuple",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "getTGEOpeningTime",
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
    inputs: [],
    name: "getTgeTotalAmount",
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
    inputs: [],
    name: "getToken",
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
    inputs: [],
    name: "getTotalInvestmentAmountBalance",
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
        name: "index",
        type: "uint256",
      },
    ],
    name: "getVestingIdAtIndex",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "vestingScheduleId",
        type: "bytes32",
      },
    ],
    name: "getVestingSchedule",
    outputs: [
      {
        components: [
          {
            internalType: "bool",
            name: "initialized",
            type: "bool",
          },
          {
            internalType: "address",
            name: "beneficiary",
            type: "address",
          },
          {
            internalType: "uint256",
            name: "cliff",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "start",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "duration",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "slicePeriodSeconds",
            type: "uint256",
          },
          {
            internalType: "bool",
            name: "revocable",
            type: "bool",
          },
          {
            internalType: "uint256",
            name: "amountTotal",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "released",
            type: "uint256",
          },
          {
            internalType: "bool",
            name: "revoked",
            type: "bool",
          },
          {
            internalType: "bool",
            name: "releaseAtTGE",
            type: "bool",
          },
        ],
        internalType: "struct PaymeTokenVesting.VestingSchedule",
        name: "",
        type: "tuple",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "holder",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "index",
        type: "uint256",
      },
    ],
    name: "getVestingScheduleByAddressAndIndex",
    outputs: [
      {
        components: [
          {
            internalType: "bool",
            name: "initialized",
            type: "bool",
          },
          {
            internalType: "address",
            name: "beneficiary",
            type: "address",
          },
          {
            internalType: "uint256",
            name: "cliff",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "start",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "duration",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "slicePeriodSeconds",
            type: "uint256",
          },
          {
            internalType: "bool",
            name: "revocable",
            type: "bool",
          },
          {
            internalType: "uint256",
            name: "amountTotal",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "released",
            type: "uint256",
          },
          {
            internalType: "bool",
            name: "revoked",
            type: "bool",
          },
          {
            internalType: "bool",
            name: "releaseAtTGE",
            type: "bool",
          },
        ],
        internalType: "struct PaymeTokenVesting.VestingSchedule",
        name: "",
        type: "tuple",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "getVestingSchedulesCount",
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
        internalType: "address",
        name: "iBeneficiary",
        type: "address",
      },
    ],
    name: "getVestingSchedulesCountByBeneficiary",
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
    inputs: [],
    name: "getVestingSchedulesTotalAmount",
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
    inputs: [],
    name: "getWithdrawableAmount",
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
    inputs: [],
    name: "owner",
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
        internalType: "bytes32",
        name: "vestingScheduleId",
        type: "bytes32",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "release",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "vestingScheduleId",
        type: "bytes32",
      },
    ],
    name: "releaseForTGE",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "renounceOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "vestingScheduleId",
        type: "bytes32",
      },
    ],
    name: "revoke",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "icrowdsalesAddress",
        type: "address",
      },
    ],
    name: "setCrowdsaleAddress",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_time",
        type: "uint256",
      },
    ],
    name: "setCurrentTime",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "tgeOpeningTime",
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
    inputs: [],
    name: "tgePercent",
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
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    name: "tgeTokenParticipants",
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
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "transferOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "withdraw",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];

const _bytecode =
  "0x60806040523480156200001157600080fd5b5073098fae98ad2a2e938bbbdcede45ee82d4eeb28ba601462000037426103e862000162565b620000423362000112565b600180556001600160a01b0383166200005a57600080fd5b6000821180156200006b5750606482105b620000e25760405162461bcd60e51b815260206004820152603460248201527f5447452050657263656e74206d7573742062652067726561746572207468616e60448201527f203020616e64204c657373207468616e20313030000000000000000000000000606482015260840160405180910390fd5b600280546001600160a01b0319166001600160a01b03949094169390931790925560049190915560035562000189565b600080546001600160a01b038381166001600160a01b0319831681178455604051919092169283917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e09190a35050565b600082198211156200018457634e487b7160e01b600052601160045260246000fd5b500190565b611ef580620001996000396000f3fe608060405234801561001057600080fd5b50600436106101da5760003560e01c80638c81a7d711610104578063c8ac75d2116100a2578063f2fde38b11610071578063f2fde38b146103b2578063f51321d7146103c5578063f7c469f0146103d8578063f9079b37146103eb57600080fd5b8063c8ac75d21461036e578063c990c2f71461038e578063e2f0f42d14610396578063ea1bb3d51461039f57600080fd5b806394a3fada116100de57806394a3fada146103385780639ef346b414610340578063b75c7dc614610353578063c07aa6561461036657600080fd5b80638c81a7d71461030c5780638da5cb5b1461031f57806390be10cc1461033057600080fd5b806340a9627f1161017c578063715018a61161014b578063715018a6146102be5780637df8df92146102c65780637e913dc6146102d95780638af104da146102f957600080fd5b806340a9627f1461027157806348deb4711461027a5780635a7bb69a1461028257806366afd8ef146102ab57600080fd5b806322f8e566116101b857806322f8e56614610230578063260a51e51461024357806329cb924d146102565780632e1a7d4d1461025e57600080fd5b806313083617146101df5780631f35bc40146101f657806321df0da71461020b575b600080fd5b6005545b6040519081526020015b60405180910390f35b610209610204366004611b2f565b6103fe565b005b6002546001600160a01b03165b6040516001600160a01b0390911681526020016101ed565b61020961023e366004611b4a565b600c55565b600b54610218906001600160a01b031681565b600c546101e3565b61020961026c366004611b4a565b610496565b6101e360045481565b6007546101e3565b6101e3610290366004611b2f565b6001600160a01b031660009081526009602052604090205490565b6102096102b9366004611b63565b6105c9565b6102096107fc565b6102096102d4366004611b93565b610810565b6102ec6102e7366004611b2f565b610d7d565b6040516101ed9190611c0d565b6101e3610307366004611ca5565b610e63565b61020961031a366004611b4a565b610eaa565b6000546001600160a01b0316610218565b6101e3611112565b6004546101e3565b6102ec61034e366004611b4a565b6111a4565b610209610361366004611b4a565b611255565b6101e3611448565b6101e361037c366004611b4a565b600a6020526000908152604090205481565b6008546101e3565b6101e360035481565b6101e36103ad366004611b4a565b61145a565b6102096103c0366004611b2f565b61154b565b6102ec6103d3366004611ca5565b6115c4565b6101e36103e6366004611b2f565b6115e0565b6101e36103f9366004611b4a565b61160a565b6001600160a01b0381166104745760405162461bcd60e51b815260206004820152603260248201527f43726f776473616c65416464726573733a2043726f776473616c652041646472604482015271195cdcc818d85b9b9bdd081899481b9d5b1b60721b60648201526084015b60405180910390fd5b600b80546001600160a01b0319166001600160a01b0392909216919091179055565b600260015414156104b95760405162461bcd60e51b815260040161046b90611ccf565b60026001556104c6611692565b80306001600160a01b03166390be10cc6040518163ffffffff1660e01b815260040160206040518083038186803b15801561050057600080fd5b505afa158015610514573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906105389190611d06565b101561059a5760405162461bcd60e51b815260206004820152602b60248201527f546f6b656e56657374696e673a206e6f7420656e6f756768207769746864726160448201526a7761626c652066756e647360a81b606482015260840161046b565b6105c26105af6000546001600160a01b031690565b6002546001600160a01b031690836116ec565b5060018055565b600260015414156105ec5760405162461bcd60e51b815260040161046b90611ccf565b6002600155600082815260066020526040902054829060ff1661060e57600080fd5b60008181526006602052604090206008015460ff161561062d57600080fd5b6000838152600660205260408120805491549091336001600160a01b036101009092048216811492919091161481806106635750805b61067f5760405162461bcd60e51b815260040161046b90611d1f565b6040805161016081018252845460ff808216151583526001600160a01b03610100928390041660208401526001870154938301939093526002860154606083015260038601546080830152600486015460a083015260058601548316151560c0830152600686015460e08301526007860154818301526008860154808416151561012084015204909116151561014082015260009061071d90611743565b905085610728578095505b8581101561079e5760405162461bcd60e51b815260206004820152603d60248201527f546f6b656e56657374696e673a2063616e6e6f742072656c6561736520746f6b60448201527f656e732c206e6f7420656e6f7567682076657374656420746f6b656e73000000606482015260840161046b565b60078401546107ad9087611842565b600785810191909155845490546101009091046001600160a01b0316906107d4908861184e565b6007556002546107ee906001600160a01b031682896116ec565b505060018055505050505050565b610804611692565b61080e600061185a565b565b600b546001600160a01b031633148061083357506000546001600160a01b031633145b61086b5760405162461bcd60e51b81526020600482015260096024820152684e6f2041636365737360b81b604482015260640161046b565b81306001600160a01b03166390be10cc6040518163ffffffff1660e01b815260040160206040518083038186803b1580156108a557600080fd5b505afa1580156108b9573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906108dd9190611d06565b10156109645760405162461bcd60e51b815260206004820152604a60248201527f546f6b656e56657374696e673a2063616e6e6f7420637265617465207665737460448201527f696e67207363686564756c652062656361757365206e6f742073756666696369606482015269656e7420746f6b656e7360b01b608482015260a40161046b565b600085116109bf5760405162461bcd60e51b815260206004820152602260248201527f546f6b656e56657374696e673a206475726174696f6e206d757374206265203e604482015261020360f41b606482015260840161046b565b60008211610a0f5760405162461bcd60e51b815260206004820181905260248201527f546f6b656e56657374696e673a20616d6f756e74206d757374206265203e2030604482015260640161046b565b6001841015610a765760405162461bcd60e51b815260206004820152602d60248201527f546f6b656e56657374696e673a20736c696365506572696f645365636f6e647360448201526c206d757374206265203e3d203160981b606482015260840161046b565b604051630f7c469f60e41b81526001600160a01b0389166004820152600090309063f7c469f09060240160206040518083038186803b158015610ab857600080fd5b505afa158015610acc573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610af09190611d06565b90506000610afe8989611842565b90506040518061016001604052806001151581526020018b6001600160a01b031681526020018281526020018a81526020018881526020018781526020018615158152602001858152602001600081526020016000151581526020018415158152506006600084815260200190815260200160002060008201518160000160006101000a81548160ff02191690831515021790555060208201518160000160016101000a8154816001600160a01b0302191690836001600160a01b0316021790555060408201518160010155606082015181600201556080820151816003015560a0820151816004015560c08201518160050160006101000a81548160ff02191690831515021790555060e0820151816006015561010082015181600701556101208201518160080160006101000a81548160ff0219169083151502179055506101408201518160080160016101000a81548160ff02191690831515021790555090505060008315610c9e57610c8a6064610c84600354886118aa90919063ffffffff16565b906118b6565b600854909150610c9a9082611842565b6008555b610cb4610cab8287611d9d565b60075490611842565b6007556005805460018181019092557f036b6384b5eca791c62761152d0c79bb0604c104a5fb6f4eb0703f3154bb3db0018490556001600160a01b038c1660009081526009602052604090205490610d0d908290611842565b6001600160a01b038d16600090815260096020908152604080832093909355868252600a905281812055517f7deecc243dec36156ece079ae8e71cb3f5b8a86d4ee141e3733216e23614e0c390610d679086815260200190565b60405180910390a1505050505050505050505050565b610d85611aa8565b6001600160a01b03821660009081526009602052604081205460069190610db490859061030790600190611d9d565b81526020808201929092526040908101600020815161016081018352815460ff808216151583526001600160a01b036101009283900416958301959095526001830154938201939093526002820154606082015260038201546080820152600482015460a082015260058201548416151560c0820152600682015460e0820152600782015483820152600890910154808416151561012083015291909104909116151561014082015292915050565b6040516bffffffffffffffffffffffff19606084901b1660208201526034810182905260009060540160405160208183030381529060405280519060200120905092915050565b60026001541415610ecd5760405162461bcd60e51b815260040161046b90611ccf565b60026001556000818152600660205260408120805491549091336001600160a01b03610100909204821681149291909116148180610f085750805b610f245760405162461bcd60e51b815260040161046b90611d1f565b6008830154610100900460ff16610fa35760405162461bcd60e51b815260206004820152603860248201527f52656c65617365546f6b656e41745447453a206f6e6c7920696e766573746f7260448201527f732063616e20636c61696d20746f6b656e206174205447450000000000000000606482015260840161046b565b6000610fae600c5490565b9050600454811015610ffb5760405162461bcd60e51b81526020600482015260166024820152755447453a2074696d65206e6f7420726561636865642160501b604482015260640161046b565b6000858152600a6020526040902054156110575760405162461bcd60e51b815260206004820152601a60248201527f5447453a20546f6b656e20416c726561647920636c61696d6564000000000000604482015260640161046b565b60006110776064610c8460035488600601546118aa90919063ffffffff16565b6000878152600a60205260409020819055855460085491925061010090046001600160a01b0316906110a9908361184e565b6008556002546110c3906001600160a01b031682846116ec565b604080516001600160a01b0383168152602081018490527fd9215c0345f0d530c5101edea49413960423257c62dd4dcc18b5e6c0b63a0227910160405180910390a15050600180555050505050565b6007546002546040516370a0823160e01b815230600482015260009261119f9290916001600160a01b03909116906370a082319060240160206040518083038186803b15801561116157600080fd5b505afa158015611175573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906111999190611d06565b9061184e565b905090565b6111ac611aa8565b50600090815260066020818152604092839020835161016081018552815460ff808216151583526001600160a01b036101009283900416948301949094526001830154958201959095526002820154606082015260038201546080820152600482015460a082015260058201548316151560c08201529281015460e084015260078101548484015260080154808216151561012084015292909204909116151561014082015290565b61125d611692565b600081815260066020526040902054819060ff1661127a57600080fd5b60008181526006602052604090206008015460ff161561129957600080fd5b6000828152600660205260409020600581015460ff1661130a5760405162461bcd60e51b815260206004820152602660248201527f546f6b656e56657374696e673a2076657374696e67206973206e6f74207265766044820152656f6361626c6560d01b606482015260840161046b565b6040805161016081018252825460ff808216151583526001600160a01b03610100928390041660208401526001850154938301939093526002840154606083015260038401546080830152600484015460a083015260058401548316151560c0830152600684015460e0830152600784015481830152600884015480841615156101208401520490911615156101408201526000906113a890611743565b905080156113ba576113ba84826105c9565b60068201546008830154610100900460ff16156114075760006113f16064610c8460035487600601546118aa90919063ffffffff16565b6006850154909150611403908261184e565b9150505b600061142084600701548361184e90919063ffffffff16565b600754909150611430908261184e565b600755505050600801805460ff191660011790555050565b600060075460085461119f9190611db4565b600081815260066020526040812054829060ff1661147757600080fd5b60008181526006602052604090206008015460ff161561149657600080fd5b600083815260066020818152604092839020835161016081018552815460ff808216151583526001600160a01b036101009283900416948301949094526001830154958201959095526002820154606082015260038201546080820152600482015460a082015260058201548316151560c08201529281015460e0840152600781015484840152600881015480831615156101208501529390930416151561014082015261154390611743565b949350505050565b611553611692565b6001600160a01b0381166115b85760405162461bcd60e51b815260206004820152602660248201527f4f776e61626c653a206e6577206f776e657220697320746865207a65726f206160448201526564647265737360d01b606482015260840161046b565b6115c18161185a565b50565b6115cc611aa8565b6115d961034e8484610e63565b9392505050565b6001600160a01b038116600090815260096020526040812054611604908390610e63565b92915050565b600061161560055490565b821061166d5760405162461bcd60e51b815260206004820152602160248201527f546f6b656e56657374696e673a20696e646578206f7574206f6620626f756e646044820152607360f81b606482015260840161046b565b6005828154811061168057611680611dcc565b90600052602060002001549050919050565b6000546001600160a01b0316331461080e5760405162461bcd60e51b815260206004820181905260248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e6572604482015260640161046b565b604080516001600160a01b038416602482015260448082018490528251808303909101815260649091019091526020810180516001600160e01b031663a9059cbb60e01b17905261173e9084906118c2565b505050565b60008061174f600c5490565b60e084015161014085015191925090156117995760006117836064610c846003548860e001516118aa90919063ffffffff16565b60e0860151909150611795908261184e565b9150505b83604001518210806117ad57508361012001515b156117bc575060009392505050565b608084015160608501516117cf91611842565b82106117e65761010084015161154390829061184e565b60006117ff85606001518461184e90919063ffffffff16565b9050600061181e8660800151610c8484866118aa90919063ffffffff16565b90506118388661010001518261184e90919063ffffffff16565b9695505050505050565b60006115d98284611db4565b60006115d98284611d9d565b600080546001600160a01b038381166001600160a01b0319831681178455604051919092169283917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e09190a35050565b60006115d98284611de2565b60006115d98284611e01565b6000611917826040518060400160405280602081526020017f5361666545524332303a206c6f772d6c6576656c2063616c6c206661696c6564815250856001600160a01b03166119949092919063ffffffff16565b80519091501561173e57808060200190518101906119359190611e23565b61173e5760405162461bcd60e51b815260206004820152602a60248201527f5361666545524332303a204552433230206f7065726174696f6e20646964206e6044820152691bdd081cdd58d8d9595960b21b606482015260840161046b565b60606115438484600085856001600160a01b0385163b6119f65760405162461bcd60e51b815260206004820152601d60248201527f416464726573733a2063616c6c20746f206e6f6e2d636f6e7472616374000000604482015260640161046b565b600080866001600160a01b03168587604051611a129190611e70565b60006040518083038185875af1925050503d8060008114611a4f576040519150601f19603f3d011682016040523d82523d6000602084013e611a54565b606091505b5091509150611a64828286611a6f565b979650505050505050565b60608315611a7e5750816115d9565b825115611a8e5782518084602001fd5b8160405162461bcd60e51b815260040161046b9190611e8c565b60405180610160016040528060001515815260200160006001600160a01b031681526020016000815260200160008152602001600081526020016000815260200160001515815260200160008152602001600081526020016000151581526020016000151581525090565b80356001600160a01b0381168114611b2a57600080fd5b919050565b600060208284031215611b4157600080fd5b6115d982611b13565b600060208284031215611b5c57600080fd5b5035919050565b60008060408385031215611b7657600080fd5b50508035926020909101359150565b80151581146115c157600080fd5b600080600080600080600080610100898b031215611bb057600080fd5b611bb989611b13565b97506020890135965060408901359550606089013594506080890135935060a0890135611be581611b85565b925060c0890135915060e0890135611bfc81611b85565b809150509295985092959890939650565b81511515815261016081016020830151611c3260208401826001600160a01b03169052565b5060408301516040830152606083015160608301526080830151608083015260a083015160a083015260c0830151611c6e60c084018215159052565b5060e08381015190830152610100808401519083015261012080840151151590830152610140928301511515929091019190915290565b60008060408385031215611cb857600080fd5b611cc183611b13565b946020939093013593505050565b6020808252601f908201527f5265656e7472616e637947756172643a207265656e7472616e742063616c6c00604082015260600190565b600060208284031215611d1857600080fd5b5051919050565b60208082526042908201527f546f6b656e56657374696e673a206f6e6c792062656e6566696369617279206160408201527f6e64206f776e65722063616e2072656c656173652076657374656420746f6b656060820152616e7360f01b608082015260a00190565b634e487b7160e01b600052601160045260246000fd5b600082821015611daf57611daf611d87565b500390565b60008219821115611dc757611dc7611d87565b500190565b634e487b7160e01b600052603260045260246000fd5b6000816000190483118215151615611dfc57611dfc611d87565b500290565b600082611e1e57634e487b7160e01b600052601260045260246000fd5b500490565b600060208284031215611e3557600080fd5b81516115d981611b85565b60005b83811015611e5b578181015183820152602001611e43565b83811115611e6a576000848401525b50505050565b60008251611e82818460208701611e40565b9190910192915050565b6020815260008251806020840152611eab816040850160208701611e40565b601f01601f1916919091016040019291505056fea264697066735822122077d67df81d61ff80ded7c9557b475a42cfb3cec88df60bc29623e0843bcd4fab64736f6c63430008090033";

type TestMockTokenVestingConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: TestMockTokenVestingConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class TestMockTokenVesting__factory extends ContractFactory {
  constructor(...args: TestMockTokenVestingConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<TestMockTokenVesting> {
    return super.deploy(overrides || {}) as Promise<TestMockTokenVesting>;
  }
  override getDeployTransaction(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  override attach(address: string): TestMockTokenVesting {
    return super.attach(address) as TestMockTokenVesting;
  }
  override connect(signer: Signer): TestMockTokenVesting__factory {
    return super.connect(signer) as TestMockTokenVesting__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): TestMockTokenVestingInterface {
    return new utils.Interface(_abi) as TestMockTokenVestingInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): TestMockTokenVesting {
    return new Contract(
      address,
      _abi,
      signerOrProvider
    ) as TestMockTokenVesting;
  }
}
