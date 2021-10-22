/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer, utils, Contract, ContractFactory, Overrides } from 'ethers'
import { Provider, TransactionRequest } from '@ethersproject/providers'
import type {
  L1CustomGateway,
  L1CustomGatewayInterface,
} from '../L1CustomGateway'

const _abi = [
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: 'address',
        name: 'l1Token',
        type: 'address',
      },
      {
        indexed: true,
        internalType: 'address',
        name: '_from',
        type: 'address',
      },
      {
        indexed: true,
        internalType: 'address',
        name: '_to',
        type: 'address',
      },
      {
        indexed: true,
        internalType: 'uint256',
        name: '_sequenceNumber',
        type: 'uint256',
      },
      {
        indexed: false,
        internalType: 'uint256',
        name: '_amount',
        type: 'uint256',
      },
    ],
    name: 'DepositInitiated',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: 'address',
        name: 'l1Address',
        type: 'address',
      },
      {
        indexed: true,
        internalType: 'address',
        name: 'l2Address',
        type: 'address',
      },
    ],
    name: 'TokenSet',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: 'address',
        name: '_from',
        type: 'address',
      },
      {
        indexed: true,
        internalType: 'address',
        name: '_to',
        type: 'address',
      },
      {
        indexed: true,
        internalType: 'uint256',
        name: '_seqNum',
        type: 'uint256',
      },
      {
        indexed: false,
        internalType: 'bytes',
        name: '_data',
        type: 'bytes',
      },
    ],
    name: 'TxToL2',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: 'address',
        name: 'from',
        type: 'address',
      },
      {
        indexed: true,
        internalType: 'address',
        name: 'to',
        type: 'address',
      },
      {
        indexed: true,
        internalType: 'uint256',
        name: 'exitNum',
        type: 'uint256',
      },
      {
        indexed: false,
        internalType: 'bytes',
        name: 'newData',
        type: 'bytes',
      },
      {
        indexed: false,
        internalType: 'bytes',
        name: 'data',
        type: 'bytes',
      },
      {
        indexed: false,
        internalType: 'bool',
        name: 'madeExternalCall',
        type: 'bool',
      },
    ],
    name: 'WithdrawRedirected',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: 'address',
        name: 'l1Token',
        type: 'address',
      },
      {
        indexed: true,
        internalType: 'address',
        name: '_from',
        type: 'address',
      },
      {
        indexed: true,
        internalType: 'address',
        name: '_to',
        type: 'address',
      },
      {
        indexed: true,
        internalType: 'uint256',
        name: '_exitNum',
        type: 'uint256',
      },
      {
        indexed: false,
        internalType: 'uint256',
        name: '_amount',
        type: 'uint256',
      },
    ],
    name: 'WithdrawalFinalized',
    type: 'event',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: 'l1ERC20',
        type: 'address',
      },
    ],
    name: 'calculateL2TokenAddress',
    outputs: [
      {
        internalType: 'address',
        name: '',
        type: 'address',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'counterpartGateway',
    outputs: [
      {
        internalType: 'address',
        name: '',
        type: 'address',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'uint256',
        name: '_exitNum',
        type: 'uint256',
      },
      {
        internalType: 'address',
        name: '_initialDestination',
        type: 'address',
      },
    ],
    name: 'encodeWithdrawal',
    outputs: [
      {
        internalType: 'bytes32',
        name: '',
        type: 'bytes32',
      },
    ],
    stateMutability: 'pure',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: '_token',
        type: 'address',
      },
      {
        internalType: 'address',
        name: '_from',
        type: 'address',
      },
      {
        internalType: 'address',
        name: '_to',
        type: 'address',
      },
      {
        internalType: 'uint256',
        name: '_amount',
        type: 'uint256',
      },
      {
        internalType: 'bytes',
        name: '_data',
        type: 'bytes',
      },
    ],
    name: 'finalizeInboundTransfer',
    outputs: [],
    stateMutability: 'payable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address[]',
        name: '_l1Addresses',
        type: 'address[]',
      },
      {
        internalType: 'address[]',
        name: '_l2Addresses',
        type: 'address[]',
      },
      {
        internalType: 'uint256',
        name: '_maxGas',
        type: 'uint256',
      },
      {
        internalType: 'uint256',
        name: '_gasPriceBid',
        type: 'uint256',
      },
      {
        internalType: 'uint256',
        name: '_maxSubmissionCost',
        type: 'uint256',
      },
    ],
    name: 'forceRegisterTokenToL2',
    outputs: [
      {
        internalType: 'uint256',
        name: '',
        type: 'uint256',
      },
    ],
    stateMutability: 'payable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'uint256',
        name: '_exitNum',
        type: 'uint256',
      },
      {
        internalType: 'address',
        name: '_initialDestination',
        type: 'address',
      },
      {
        internalType: 'bytes',
        name: '_initialData',
        type: 'bytes',
      },
    ],
    name: 'getExternalCall',
    outputs: [
      {
        internalType: 'address',
        name: 'target',
        type: 'address',
      },
      {
        internalType: 'bytes',
        name: 'data',
        type: 'bytes',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: '_l1Token',
        type: 'address',
      },
      {
        internalType: 'address',
        name: '_from',
        type: 'address',
      },
      {
        internalType: 'address',
        name: '_to',
        type: 'address',
      },
      {
        internalType: 'uint256',
        name: '_amount',
        type: 'uint256',
      },
      {
        internalType: 'bytes',
        name: '_data',
        type: 'bytes',
      },
    ],
    name: 'getOutboundCalldata',
    outputs: [
      {
        internalType: 'bytes',
        name: 'outboundCalldata',
        type: 'bytes',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'inbox',
    outputs: [
      {
        internalType: 'address',
        name: '',
        type: 'address',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: '_l1Counterpart',
        type: 'address',
      },
      {
        internalType: 'address',
        name: '_l1Router',
        type: 'address',
      },
      {
        internalType: 'address',
        name: '_inbox',
        type: 'address',
      },
      {
        internalType: 'address',
        name: '_owner',
        type: 'address',
      },
    ],
    name: 'initialize',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: '',
        type: 'address',
      },
    ],
    name: 'l1ToL2Token',
    outputs: [
      {
        internalType: 'address',
        name: '',
        type: 'address',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: '_l1Token',
        type: 'address',
      },
      {
        internalType: 'address',
        name: '_to',
        type: 'address',
      },
      {
        internalType: 'uint256',
        name: '_amount',
        type: 'uint256',
      },
      {
        internalType: 'uint256',
        name: '_maxGas',
        type: 'uint256',
      },
      {
        internalType: 'uint256',
        name: '_gasPriceBid',
        type: 'uint256',
      },
      {
        internalType: 'bytes',
        name: '_data',
        type: 'bytes',
      },
    ],
    name: 'outboundTransfer',
    outputs: [
      {
        internalType: 'bytes',
        name: 'res',
        type: 'bytes',
      },
    ],
    stateMutability: 'payable',
    type: 'function',
  },
  {
    inputs: [],
    name: 'owner',
    outputs: [
      {
        internalType: 'address',
        name: '',
        type: 'address',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'postUpgradeInit',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'bytes32',
        name: '',
        type: 'bytes32',
      },
    ],
    name: 'redirectedExits',
    outputs: [
      {
        internalType: 'bool',
        name: 'isExit',
        type: 'bool',
      },
      {
        internalType: 'address',
        name: '_newTo',
        type: 'address',
      },
      {
        internalType: 'bytes',
        name: '_newData',
        type: 'bytes',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: '_l2Address',
        type: 'address',
      },
      {
        internalType: 'uint256',
        name: '_maxGas',
        type: 'uint256',
      },
      {
        internalType: 'uint256',
        name: '_gasPriceBid',
        type: 'uint256',
      },
      {
        internalType: 'uint256',
        name: '_maxSubmissionCost',
        type: 'uint256',
      },
      {
        internalType: 'address',
        name: '_creditBackAddress',
        type: 'address',
      },
    ],
    name: 'registerTokenToL2',
    outputs: [
      {
        internalType: 'uint256',
        name: '',
        type: 'uint256',
      },
    ],
    stateMutability: 'payable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: '_l2Address',
        type: 'address',
      },
      {
        internalType: 'uint256',
        name: '_maxGas',
        type: 'uint256',
      },
      {
        internalType: 'uint256',
        name: '_gasPriceBid',
        type: 'uint256',
      },
      {
        internalType: 'uint256',
        name: '_maxSubmissionCost',
        type: 'uint256',
      },
    ],
    name: 'registerTokenToL2',
    outputs: [
      {
        internalType: 'uint256',
        name: '',
        type: 'uint256',
      },
    ],
    stateMutability: 'payable',
    type: 'function',
  },
  {
    inputs: [],
    name: 'router',
    outputs: [
      {
        internalType: 'address',
        name: '',
        type: 'address',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'uint256',
        name: '_exitNum',
        type: 'uint256',
      },
      {
        internalType: 'address',
        name: '_initialDestination',
        type: 'address',
      },
      {
        internalType: 'address',
        name: '_newDestination',
        type: 'address',
      },
      {
        internalType: 'bytes',
        name: '_newData',
        type: 'bytes',
      },
      {
        internalType: 'bytes',
        name: '_data',
        type: 'bytes',
      },
    ],
    name: 'transferExitAndCall',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [],
    name: 'whitelist',
    outputs: [
      {
        internalType: 'address',
        name: '',
        type: 'address',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
]

const _bytecode =
  '0x608060405234801561001057600080fd5b506129ef806100206000396000f3fe6080604052600436106101045760003560e01c8063a7e28d48116100a0578063f26bdead11610064578063f26bdead14610767578063f68a90821461079f578063f887ea40146108f6578063f8c8765e1461090b578063fb0e722b1461095657610104565b8063a7e28d48146104a7578063bcf2e6eb146104da578063bd5f3e7d146105a0578063ca346d4a1461068b578063d2ce7d65146106cd57610104565b8063020a6058146101095780631d3a689f146101545780632db09c1c1461021e5780632e567b361461024f5780638a2dc014146102e75780638da5cb5b1461031a57806393e59dc11461032f57806395fcea7814610344578063a0c76a9614610359575b600080fd5b34801561011557600080fd5b506101426004803603604081101561012c57600080fd5b50803590602001356001600160a01b031661096b565b60408051918252519081900360200190f35b610142600480360360a081101561016a57600080fd5b810190602081018135600160201b81111561018457600080fd5b82018360208201111561019657600080fd5b803590602001918460208302840111600160201b831117156101b757600080fd5b919390929091602081019035600160201b8111156101d457600080fd5b8201836020820111156101e657600080fd5b803590602001918460208302840111600160201b8311171561020757600080fd5b9193509150803590602081013590604001356109a0565b34801561022a57600080fd5b50610233610c21565b604080516001600160a01b039092168252519081900360200190f35b6102e5600480360360a081101561026557600080fd5b6001600160a01b03823581169260208101358216926040820135909216916060820135919081019060a081016080820135600160201b8111156102a757600080fd5b8201836020820111156102b957600080fd5b803590602001918460018302840111600160201b831117156102da57600080fd5b509092509050610c30565b005b3480156102f357600080fd5b506102336004803603602081101561030a57600080fd5b50356001600160a01b0316610dbb565b34801561032657600080fd5b50610233610dd6565b34801561033b57600080fd5b50610233610de5565b34801561035057600080fd5b506102e5610df4565b34801561036557600080fd5b50610432600480360360a081101561037c57600080fd5b6001600160a01b03823581169260208101358216926040820135909216916060820135919081019060a081016080820135600160201b8111156103be57600080fd5b8201836020820111156103d057600080fd5b803590602001918460018302840111600160201b831117156103f157600080fd5b91908080601f016020809104026020016040519081016040528093929190818152602001838380828437600092019190915250929550610e51945050505050565b6040805160208082528351818301528351919283929083019185019080838360005b8381101561046c578181015183820152602001610454565b50505050905090810190601f1680156104995780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b3480156104b357600080fd5b50610233600480360360208110156104ca57600080fd5b50356001600160a01b0316610f58565b3480156104e657600080fd5b50610504600480360360208110156104fd57600080fd5b5035610f76565b6040518084151515158152602001836001600160a01b03166001600160a01b0316815260200180602001828103825283818151815260200191508051906020019080838360005b8381101561056357818101518382015260200161054b565b50505050905090810190601f1680156105905780820380516001836020036101000a031916815260200191505b5094505050505060405180910390f35b3480156105ac57600080fd5b506102e5600480360360a08110156105c357600080fd5b8135916001600160a01b03602082013581169260408301359091169190810190608081016060820135600160201b8111156105fd57600080fd5b82018360208201111561060f57600080fd5b803590602001918460018302840111600160201b8311171561063057600080fd5b919390929091602081019035600160201b81111561064d57600080fd5b82018360208201111561065f57600080fd5b803590602001918460018302840111600160201b8311171561068057600080fd5b50909250905061102d565b610142600480360360a08110156106a157600080fd5b506001600160a01b0381358116916020810135916040820135916060810135916080909101351661134b565b610432600480360360c08110156106e357600080fd5b6001600160a01b0382358116926020810135909116916040820135916060810135916080820135919081019060c0810160a0820135600160201b81111561072957600080fd5b82018360208201111561073b57600080fd5b803590602001918460018302840111600160201b8311171561075c57600080fd5b5090925090506116c9565b6101426004803603608081101561077d57600080fd5b506001600160a01b038135169060208101359060408101359060600135611a04565b3480156107ab57600080fd5b50610865600480360360608110156107c257600080fd5b8135916001600160a01b0360208201351691810190606081016040820135600160201b8111156107f157600080fd5b82018360208201111561080357600080fd5b803590602001918460018302840111600160201b8311171561082457600080fd5b91908080601f016020809104026020016040519081016040528093929190818152602001838380828437600092019190915250929550611a1c945050505050565b60405180836001600160a01b03166001600160a01b0316815260200180602001828103825283818151815260200191508051906020019080838360005b838110156108ba5781810151838201526020016108a2565b50505050905090810190601f1680156108e75780820380516001836020036101000a031916815260200191505b50935050505060405180910390f35b34801561090257600080fd5b50610233611b07565b34801561091757600080fd5b506102e56004803603608081101561092e57600080fd5b506001600160a01b038135811691602081013582169160408201358116916060013516611b16565b34801561096257600080fd5b50610233611b4d565b604080516020808201949094526001600160a01b03929092168282015280518083038201815260609092019052805191012090565b6005546000906001600160a01b031633146109ef576040805162461bcd60e51b815260206004820152600a60248201526927a7262cafa7aba722a960b11b604482015290519081900360640190fd5b868514610a35576040805162461bcd60e51b815260206004820152600f60248201526e494e56414c49445f4c454e4754485360881b604482015290519081900360640190fd5b60005b87811015610b3e57868682818110610a4c57fe5b905060200201356001600160a01b0316600460008b8b85818110610a6c57fe5b905060200201356001600160a01b03166001600160a01b03166001600160a01b0316815260200190815260200160002060006101000a8154816001600160a01b0302191690836001600160a01b03160217905550868682818110610acc57fe5b905060200201356001600160a01b03166001600160a01b0316898983818110610af157fe5b905060200201356001600160a01b03166001600160a01b03167f0dd664a155dd89526bb019e22b00291bb7ca9d07ba3ec4a1a76b410da9797ceb60405160405180910390a3600101610a38565b50606063d4f5532f60e01b898989896040516024018080602001806020018381038352878782818152602001925060200280828437600083820152601f01601f19169091018481038352858152602090810191508690860280828437600083820181905260408051601f909301601f199081169095018381039095018352939093526020810180516001600160e01b03166001600160e01b0319909c169b909b17909a52506002548154999a50610c14996001600160a01b03918216995016965033955034945092508a91508c90508b89611b5c565b9998505050505050505050565b6000546001600160a01b031681565b6002546001600160a01b03166000610c4782611d6f565b9050336001600160a01b03821614610c98576040805162461bcd60e51b815260206004820152600f60248201526e4e4f545f46524f4d5f42524944474560881b604482015290519081900360640190fd5b6000610ca383611ddc565b6000549091506001600160a01b03808316911614610d03576040805162461bcd60e51b81526020600482015260186024820152774f4e4c595f434f554e544552504152545f4741544557415960401b604482015290519081900360640190fd5b60006060610d118787611f0e565b915091508051600014610d2f57506040805160208101909152600081525b610d3a828a83611a1c565b509850610d488b8a8a611fbb565b81896001600160a01b03168b6001600160a01b03167f891afe029c75c4f8c5855fc3480598bc5a53739344f6ae575bdb7ea2a79f56b38e8c60405180836001600160a01b03166001600160a01b031681526020018281526020019250505060405180910390a45050505050505050505050565b6004602052600090815260409020546001600160a01b031681565b6005546001600160a01b031681565b6006546001600160a01b031681565b6000610dfe611fda565b9050336001600160a01b03821614610e4e576040805162461bcd60e51b815260206004820152600e60248201526d2727aa2fa32927a6afa0a226a4a760911b604482015290519081900360640190fd5b50565b60408051602081019091526000815260609063172b3d9b60e11b87878787610e798689611fff565b6040516001600160a01b0380871660248301908152868216604484015290851660648301526084820184905260a060a48301908152835160c484015283519192909160e490910190602085019080838360005b83811015610ee4578181015183820152602001610ecc565b50505050905090810190601f168015610f115780820380516001836020036101000a031916815260200191505b5060408051601f198184030181529190526020810180516001600160e01b03166001600160e01b0319909a1699909917909852509597505050505050505095945050505050565b6001600160a01b039081166000908152600460205260409020541690565b600360209081526000918252604091829020805460018083018054865160026101009483161585026000190190921691909104601f810187900487028201870190975286815260ff841696929093046001600160a01b0316949091908301828280156110235780601f10610ff857610100808354040283529160200191611023565b820191906000526020600020905b81548152906001019060200180831161100657829003601f168201915b5050505050905083565b6000611049888860405180602001604052806000815250611a1c565b509050336001600160a01b0382161461109f576040805162461bcd60e51b81526020600482015260136024820152722727aa2fa2ac2822a1aa22a22fa9a2a72222a960691b604482015290519081900360640190fd5b83156110e4576040805162461bcd60e51b815260206004820152600f60248201526e1393d7d110551057d0531313d5d151608a1b604482015290519081900360640190fd5b61112688888888888080601f0160208091040260200160405190810160405280939291908181526020018383808284376000920191909152506120f192505050565b811561128e5761113e866001600160a01b0316612182565b611181576040805162461bcd60e51b815260206004820152600f60248201526e1513d7d393d517d0d3d395149050d5608a1b604482015290519081900360640190fd5b6000866001600160a01b031663592e2070838b87876040518563ffffffff1660e01b815260040180856001600160a01b03166001600160a01b03168152602001848152602001806020018281038252848482818152602001925080828437600081840152601f19601f82011690508083019250505095505050505050602060405180830381600087803b15801561121757600080fd5b505af115801561122b573d6000803e3d6000fd5b505050506040513d602081101561124157600080fd5b505190508061128c576040805162461bcd60e51b81526020600482015260126024820152711514905394d1915497d213d3d2d7d190525360721b604482015290519081900360640190fd5b505b87866001600160a01b0316826001600160a01b03167f56735ccb9dc7d2222ce4177fc3aea44c33882e2a2c73e0fb1c6b93c9c13a04d48888888860008b8b905011604051808060200180602001841515151581526020018381038352888882818152602001925080828437600083820152601f01601f191690910184810383528681526020019050868680828437600083820152604051601f909101601f1916909201829003995090975050505050505050a45050505050505050565b600061a4b160ff16336001600160a01b0316638e5f5ad16040518163ffffffff1660e01b815260040160206040518083038186803b15801561138c57600080fd5b505afa1580156113a0573d6000803e3d6000fd5b505050506040513d60208110156113b657600080fd5b505160ff16146113ff576040805162461bcd60e51b815260206004820152600f60248201526e1393d517d0549097d1539050931151608a1b604482015290519081900360640190fd5b336000908152600460205260409020546001600160a01b0316801561148457866001600160a01b0316816001600160a01b031614611484576040805162461bcd60e51b815260206004820152601b60248201527f4e4f5f5550444154455f544f5f444946464552454e545f414444520000000000604482015290519081900360640190fd5b336000908152600460205260409081902080546001600160a01b038a166001600160a01b0319909116179055805160018082528183019092526060918160200160208202803683375050604080516001808252818301909252929350606092915060208083019080368337019050509050338260008151811061150357fe5b60200260200101906001600160a01b031690816001600160a01b031681525050888160008151811061153157fe5b60200260200101906001600160a01b031690816001600160a01b0316815250508060008151811061155e57fe5b60200260200101516001600160a01b03168260008151811061157c57fe5b60200260200101516001600160a01b03167f0dd664a155dd89526bb019e22b00291bb7ca9d07ba3ec4a1a76b410da9797ceb60405160405180910390a3606063d4f5532f60e01b8383604051602401808060200180602001838103835285818151815260200191508051906020019060200280838360005b8381101561160c5781810151838201526020016115f4565b50505050905001838103825284818151815260200191508051906020019060200280838360005b8381101561164b578181015183820152602001611633565b505060408051601f199690940184810396909601845294909452506020810180516001600160e01b03166001600160e01b0319909a16999099179098525050600254600080549798506116bb976001600160a01b03928316975090911694508c935034925090508c8f8f89611b5c565b9a9950505050505050505050565b60606116d433612188565b611717576040805162461bcd60e51b815260206004820152600f60248201526e2727aa2fa32927a6afa927aaaa22a960891b604482015290519081900360640190fd5b6000806060600061172733612188565b1561174057611736878761219c565b909450915061177d565b33935086868080601f0160208091040260200160405190810160405280939291908181526020018383808284376000920191909152509294505050505b81806020019051604081101561179257600080fd5b815160208301805160405192949293830192919084600160201b8211156117b857600080fd5b9083019060208201858111156117cd57600080fd5b8251600160201b8111828201881017156117e657600080fd5b82525081516020918201929091019080838360005b838110156118135781810151838201526020016117fb565b50505050905090810190601f1680156118405780820380516001836020036101000a031916815260200191505b5060405250508151919450919250159050611898576040805162461bcd60e51b8152602060048201526013602482015272115615149057d110551057d11254d050931151606a1b604482015290519081900360640190fd5b6118aa8c6001600160a01b0316612182565b6118ed576040805162461bcd60e51b815260206004820152600f60248201526e130c57d393d517d0d3d395149050d5608a1b604482015290519081900360640190fd5b60006118f88d610f58565b90506001600160a01b038116611947576040805162461bcd60e51b815260206004820152600f60248201526e1393d7d30c97d513d2d15397d4d155608a1b604482015290519081900360640190fd5b6119528d868d6121da565b9a506119618d868e8e87610e51565b9550611971858c8c8c868b6122fa565b93505050818a6001600160a01b0316846001600160a01b03167fb8910b9960c443aac3240b98585384e3a6f109fbf6969e264c3f183d69aba7e18e8d60405180836001600160a01b03166001600160a01b031681526020018281526020019250505060405180910390a4506040805160208082019390935281518082039093018352810190529998505050505050505050565b6000611a13858585853361134b565b95945050505050565b600060606000611a2c868661096b565b600081815260036020526040902080549192509060ff1615611af65780546001808301805460408051602060026101009685161587026000190190941693909304601f8101849004840282018401909252818152939094046001600160a01b0316939192918391830182828015611ae45780601f10611ab957610100808354040283529160200191611ae4565b820191906000526020600020905b815481529060010190602001808311611ac757829003601f168201915b50505050509050935093505050611aff565b85859350935050505b935093915050565b6001546001600160a01b031681565b611b21848484612348565b600580546001600160a01b039092166001600160a01b0319928316179055600680549091169055505050565b6002546001600160a01b031681565b6000808a6001600160a01b031663679b6ded898c8a8a8e8f8c8c8c6040518a63ffffffff1660e01b815260040180896001600160a01b03166001600160a01b03168152602001888152602001878152602001866001600160a01b03166001600160a01b03168152602001856001600160a01b03166001600160a01b0316815260200184815260200183815260200180602001828103825283818151815260200191508051906020019080838360005b83811015611c23578181015183820152602001611c0b565b50505050905090810190601f168015611c505780820380516001836020036101000a031916815260200191505b5099505050505050505050506020604051808303818588803b158015611c7557600080fd5b505af1158015611c89573d6000803e3d6000fd5b50505050506040513d6020811015611ca057600080fd5b81019080805190602001909291905050509050808a6001600160a01b03168a6001600160a01b03167fc1d1490cf25c3b40d600dfb27c7680340ed1ab901b7e8f3551280968a3b372b0866040518080602001828103825283818151815260200191508051906020019080838360005b83811015611d27578181015183820152602001611d0f565b50505050905090810190601f168015611d545780820380516001836020036101000a031916815260200191505b509250505060405180910390a49a9950505050505050505050565b6000816001600160a01b031663e78cea926040518163ffffffff1660e01b815260040160206040518083038186803b158015611daa57600080fd5b505afa158015611dbe573d6000803e3d6000fd5b505050506040513d6020811015611dd457600080fd5b505192915050565b600080611de883611d6f565b6001600160a01b031663ab5d89436040518163ffffffff1660e01b815260040160206040518083038186803b158015611e2057600080fd5b505afa158015611e34573d6000803e3d6000fd5b505050506040513d6020811015611e4a57600080fd5b505160408051634032458160e11b815290519192506000916001600160a01b038416916380648b02916004808301926020929190829003018186803b158015611e9257600080fd5b505afa158015611ea6573d6000803e3d6000fd5b505050506040513d6020811015611ebc57600080fd5b505190506001600160a01b038116611f07576040805162461bcd60e51b81526020600482015260096024820152682727afa9a2a72222a960b91b604482015290519081900360640190fd5b9392505050565b6000606083836040811015611f2257600080fd5b81359190810190604081016020820135600160201b811115611f4357600080fd5b820183602082011115611f5557600080fd5b803590602001918460018302840111600160201b83111715611f7657600080fd5b91908080601f016020809104026020016040519081016040528093929190818152602001838380828437600092019190915250969b929a509198505050505050505050565b611fd56001600160a01b038416838363ffffffff61235316565b505050565b7fb53127684a568b3173ae13b9f8a6016e243e63b6e8ee1178d6a717850b5d61035490565b60608282604051602001808060200180602001838103835285818151815260200191508051906020019080838360005b8381101561204757818101518382015260200161202f565b50505050905090810190601f1680156120745780820380516001836020036101000a031916815260200191505b50838103825284518152845160209182019186019080838360005b838110156120a757818101518382015260200161208f565b50505050905090810190601f1680156120d45780820380516001836020036101000a031916815260200191505b5060408051601f1981840301815291905298975050505050505050565b60006120fd858561096b565b6040805160608101825260018082526001600160a01b0387811660208085019182528486018981526000888152600383529690962085518154935160ff1990941690151517610100600160a81b03191661010093909416929092029290921781559351805195965092946121789392850192909101906128ce565b5050505050505050565b3b151590565b6001546001600160a01b0390811691161490565b60006060838360408110156121b057600080fd5b6001600160a01b038235169190810190604081016020820135600160201b811115611f4357600080fd5b604080516370a0823160e01b8152306004820152905160009182916001600160a01b038716916370a08231916024808301926020929190829003018186803b15801561222557600080fd5b505afa158015612239573d6000803e3d6000fd5b505050506040513d602081101561224f57600080fd5b5051905061226e6001600160a01b03861685308663ffffffff6123a516565b604080516370a0823160e01b815230600482015290516000916001600160a01b038816916370a0823191602480820192602092909190829003018186803b1580156122b857600080fd5b505afa1580156122cc573d6000803e3d6000fd5b505050506040513d60208110156122e257600080fd5b505190506122f08183612405565b9695505050505050565b600254600080546040805160608101825286815260208101899052908101879052919261233d926001600160a01b0391821692909116908a903490869088612462565b979650505050505050565b611fd583838361248d565b604080516001600160a01b038416602482015260448082018490528251808303909101815260649091019091526020810180516001600160e01b031663a9059cbb60e01b179052611fd590849061254a565b604080516001600160a01b0380861660248301528416604482015260648082018490528251808303909101815260849091019091526020810180516001600160e01b03166323b872dd60e01b1790526123ff90859061254a565b50505050565b60008282111561245c576040805162461bcd60e51b815260206004820152601e60248201527f536166654d6174683a207375627472616374696f6e206f766572666c6f770000604482015290519081900360640190fd5b50900390565b60006124818888888888886000015189602001518a604001518a611b5c565b98975050505050505050565b61249783836125fb565b6001600160a01b0382166124df576040805162461bcd60e51b815260206004820152600a6024820152692120a22fa927aaaa22a960b11b604482015290519081900360640190fd5b6001600160a01b038116612526576040805162461bcd60e51b81526020600482015260096024820152680848288be929c849eb60bb1b604482015290519081900360640190fd5b600280546001600160a01b0319166001600160a01b03929092169190911790555050565b606061259f826040518060400160405280602081526020017f5361666545524332303a206c6f772d6c6576656c2063616c6c206661696c6564815250856001600160a01b03166126c79092919063ffffffff16565b805190915015611fd5578080602001905160208110156125be57600080fd5b5051611fd55760405162461bcd60e51b815260040180806020018281038252602a815260200180612990602a913960400191505060405180910390fd5b6001600160a01b03821661264c576040805162461bcd60e51b81526020600482015260136024820152721253959053125117d0d3d55395115494105495606a1b604482015290519081900360640190fd5b6000546001600160a01b031615612699576040805162461bcd60e51b815260206004820152600c60248201526b1053149150511657d253925560a21b604482015290519081900360640190fd5b600080546001600160a01b039384166001600160a01b03199182161790915560018054929093169116179055565b60606126d684846000856126de565b949350505050565b60608247101561271f5760405162461bcd60e51b815260040180806020018281038252602681526020018061296a6026913960400191505060405180910390fd5b61272885612182565b612779576040805162461bcd60e51b815260206004820152601d60248201527f416464726573733a2063616c6c20746f206e6f6e2d636f6e7472616374000000604482015290519081900360640190fd5b60006060866001600160a01b031685876040518082805190602001908083835b602083106127b85780518252601f199092019160209182019101612799565b6001836020036101000a03801982511681845116808217855250505050505090500191505060006040518083038185875af1925050503d806000811461281a576040519150601f19603f3d011682016040523d82523d6000602084013e61281f565b606091505b509150915061233d82828660608315612839575081611f07565b8251156128495782518084602001fd5b8160405162461bcd60e51b81526004018080602001828103825283818151815260200191508051906020019080838360005b8381101561289357818101518382015260200161287b565b50505050905090810190601f1680156128c05780820380516001836020036101000a031916815260200191505b509250505060405180910390fd5b828054600181600116156101000203166002900490600052602060002090601f016020900481019282601f1061290f57805160ff191683800117855561293c565b8280016001018555821561293c579182015b8281111561293c578251825591602001919060010190612921565b5061294892915061294c565b5090565b61296691905b808211156129485760008155600101612952565b9056fe416464726573733a20696e73756666696369656e742062616c616e636520666f722063616c6c5361666545524332303a204552433230206f7065726174696f6e20646964206e6f742073756363656564a2646970667358221220f04d6b4fff301c7935dd37c53ed9da4c18d8664bad3991c939b2180d4a385f7964736f6c634300060b0033'

export class L1CustomGateway__factory extends ContractFactory {
  constructor(signer?: Signer) {
    super(_abi, _bytecode, signer)
  }

  deploy(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<L1CustomGateway> {
    return super.deploy(overrides || {}) as Promise<L1CustomGateway>
  }
  getDeployTransaction(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {})
  }
  attach(address: string): L1CustomGateway {
    return super.attach(address) as L1CustomGateway
  }
  connect(signer: Signer): L1CustomGateway__factory {
    return super.connect(signer) as L1CustomGateway__factory
  }
  static readonly bytecode = _bytecode
  static readonly abi = _abi
  static createInterface(): L1CustomGatewayInterface {
    return new utils.Interface(_abi) as L1CustomGatewayInterface
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): L1CustomGateway {
    return new Contract(address, _abi, signerOrProvider) as L1CustomGateway
  }
}