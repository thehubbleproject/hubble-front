/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type {
  BLSAccountRegistry,
  BLSAccountRegistryInterface,
} from "../BLSAccountRegistry";

const _abi = [
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint256",
        name: "startID",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "endID",
        type: "uint256",
      },
    ],
    name: "BatchPubkeyRegistered",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint256",
        name: "pubkeyID",
        type: "uint256",
      },
    ],
    name: "SinglePubkeyRegistered",
    type: "event",
  },
  {
    inputs: [],
    name: "BATCH_DEPTH",
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
    name: "BATCH_SIZE",
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
    name: "DEPTH",
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
    name: "SET_SIZE",
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
    name: "WITNESS_LENGTH",
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
        name: "pubkeyID",
        type: "uint256",
      },
      {
        internalType: "uint256[4]",
        name: "pubkey",
        type: "uint256[4]",
      },
      {
        internalType: "bytes32[31]",
        name: "witness",
        type: "bytes32[31]",
      },
    ],
    name: "exists",
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
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    name: "filledSubtreesLeft",
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
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    name: "filledSubtreesRight",
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
    inputs: [],
    name: "leafIndexLeft",
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
    name: "leafIndexRight",
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
        internalType: "uint256[4]",
        name: "pubkey",
        type: "uint256[4]",
      },
    ],
    name: "register",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256[4][16]",
        name: "pubkeys",
        type: "uint256[4][16]",
      },
    ],
    name: "registerBatch",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "root",
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
    inputs: [],
    name: "rootLeft",
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
    inputs: [],
    name: "rootRight",
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
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    name: "zeros",
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
];

const _bytecode =
  "0x60806040526000600355600060045534801561001a57600080fd5b507f290decd9548b62a8d60345a988386fc84ba6bc95484008f6362f93160ef3e5636005819055602481905560015b601f81101561011a57600560018203601f811061006257fe5b0154600560018303601f811061007457fe5b0154604051602001808381526020018281526020019250505060405160208183030381529060405280519060200120600582601f81106100b057fe5b0155601f8110156100da57600581601f81106100c857fe5b0154602482601f81106100d757fe5b01555b806004111580156100eb575080601f115b1561011257600581601f81106100fd57fe5b0154604360048303601b811061010f57fe5b01555b600101610049565b505060235460408051602080820184905281830184905282518083038401815260608301845280519082012060008181556080840186905260a0808501969096528451808503909601865260c084018552855195830195909520600181905560e08401919091526101008084019190915283518084039091018152610120909201909252805191012060025561097d9081906101b690396000f3fe608060405234801561001057600080fd5b50600436106101005760003560e01c806395e4bf0311610097578063d7c53ea711610066578063d7c53ea7146101f6578063d8289463146101fe578063e829558814610206578063ebf0c7171461022357610100565b806395e4bf03146101ca57806398366e3514610161578063cab2da9b146101e6578063d0383d68146101ee57610100565b80635e71468b116100d35780635e71468b14610161578063693c1db714610169578063709a8b2a146101715780638d037962146101ad57610100565b8063034a29ae146101055780631c4a7a94146101345780631c76e77e1461015157806349faa4d414610159575b600080fd5b6101226004803603602081101561011b57600080fd5b503561022b565b60408051918252519081900360200190f35b610122600480360361080081101561014b57600080fd5b5061023f565b610122610308565b61012261030d565b610122610312565b610122610317565b610199600480360361048081101561018857600080fd5b50803590602081019060a00161031d565b604080519115158252519081900360200190f35b610122600480360360208110156101c357600080fd5b5035610393565b610122600480360360808110156101e057600080fd5b506103a0565b610122610420565b610122610426565b61012261042e565b610122610434565b6101226004803603602081101561021c57600080fd5b503561043a565b610122610447565b602481601f811061023857fe5b0154905081565b6000610249610932565b60005b60108110156102b557600084826010811061026357fe5b60800201604051602001808260046020028082843780830192505050915050604051602081830303815290604052805190602001209050808383601081106102a757fe5b60200201525060010161024c565b5060006102c18261044d565b60408051828152600f8301602082015281519293507f3154b80a7d9f6a143c37dde575f47deb78dacc7f280d8efc7e3ae102758a841b929081900390910190a19392505050565b600481565b601081565b601f81565b60035481565b60008083604051602001808260046020028082843780830192505050915050604051602081830303815290604052805190602001209050610388818685601f806020026040519081016040528092919082601f602002808284376000920191909152506106e7915050565b9150505b9392505050565b604381601b811061023857fe5b6000808260405160200180826004602002808284378083019250505091505060405160208183030381529060405280519060200120905060006103e2826107c3565b6040805182815290519192507f59056afed767866d7c194cf26e24ebe16974ef943cccb729452e9adc265a9ac7919081900360200190a19392505050565b60015481565b638000000081565b60045481565b60005481565b600581601f811061023857fe5b60025481565b600454600090637fffffef116104aa576040805162461bcd60e51b815260206004820152601f60248201527f4163636f756e74547265653a207269676874207365742069732066756c6c2000604482015290519081900360640190fd5b6104b2610951565b60005b600881101561052f57600181901b8481601081106104cf57fe5b60200201518582600101601081106104e357fe5b602002015160405160200180838152602001828152602001925050506040516020818303038152906040528051906020012083836008811061052157fe5b6020020152506001016104b5565b5060015b60048110156105ce5760016000196004839003011b60005b818110156105c457600181901b84816008811061056457fe5b602002015185826001016008811061057857fe5b60200201516040516020018083815260200182815260200192505050604051602081830303815290604052805190602001208583600881106105b657fe5b60200201525060010161054b565b5050600101610533565b508051600454601090046000805b601b81101561069e57826001166001141561063557604381601b81106105fe57fe5b0154846040516020018083815260200182815260200192505050604051602081830303815290604052805190602001209350610692565b8161064f5783604382601b811061064857fe5b0155600191505b83600560048301601f811061066057fe5b015460405160200180838152602001828152602001925050506040516020818303038152906040528051906020012093505b600192831c92016105dc565b5050506001819055600054604080516020808201939093528082019390935280518084038201815260609093019052815191012060025550506004805460108101909155919050565b6000637fffffff831684825b601f81101561079c57826001166001141561074e578481601f811061071457fe5b6020020151826040516020018083815260200182815260200192505050604051602081830303815290604052805190602001209150610790565b818582601f811061075b57fe5b602002015160405160200180838152602001828152602001925050506040516020818303038152906040528051906020012091505b600192831c92016106f3565b5063800000008510156107b65760005414915061038c9050565b60015414915061038c9050565b600354600090637fffffff11610820576040805162461bcd60e51b815260206004820152601e60248201527f4163636f756e74547265653a206c656674207365742069732066756c6c200000604482015290519081900360640190fd5b60035482906000805b601f8110156108e857826001166001141561088257602481601f811061084b57fe5b01548460405160200180838152602001828152602001925050506040516020818303038152906040528051906020012093506108dc565b8161089c5783602482601f811061089557fe5b0155600191505b83600582601f81106108aa57fe5b015460405160200180838152602001828152602001925050506040516020818303038152906040528051906020012093505b600192831c9201610829565b505050600081905560018054604080516020808201959095528082019290925280518083038201815260609092019052805192019190912060025560038054918201905592915050565b6040518061020001604052806010906020820280368337509192915050565b604051806101000160405280600890602082028036833750919291505056fea164736f6c634300060c000a";

export class BLSAccountRegistry__factory extends ContractFactory {
  constructor(signer?: Signer) {
    super(_abi, _bytecode, signer);
  }

  deploy(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<BLSAccountRegistry> {
    return super.deploy(overrides || {}) as Promise<BLSAccountRegistry>;
  }
  getDeployTransaction(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  attach(address: string): BLSAccountRegistry {
    return super.attach(address) as BLSAccountRegistry;
  }
  connect(signer: Signer): BLSAccountRegistry__factory {
    return super.connect(signer) as BLSAccountRegistry__factory;
  }
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): BLSAccountRegistryInterface {
    return new utils.Interface(_abi) as BLSAccountRegistryInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): BLSAccountRegistry {
    return new Contract(address, _abi, signerOrProvider) as BLSAccountRegistry;
  }
}
