import { Action, action, createTypedHooks } from "easy-peasy";
import * as mcl from "@thehubbleproject/bls/dist/mcl";
import { ethers, Signer } from "ethers";

export interface IWalletAccount {
  publicKey: mcl.PublicKey | null;
  hubbleAddress: string | "";
  reducedSecretKey: string | "";
  registered: boolean;
  accountId: string | null;
}

export interface IGlobalStore {
  account: Signer;
  network: string;
  connected: boolean;
  walletAccounts: (IWalletAccount | null)[];
  currentAccount: IWalletAccount;
  shouldUpdate: boolean;

  // actions
  setAccount: Action<IGlobalStore, Signer>;
  setNetwork: Action<IGlobalStore, string>;
  setConnected: Action<IGlobalStore, boolean>;
  setWalletAccounts: Action<IGlobalStore, IWalletAccount[]>;
  setCurrentAccount: Action<IGlobalStore, object>;
  updateCurrentAccount: Action<IGlobalStore, string>;
  setShouldUpdate: Action<IGlobalStore, boolean>;
}

const globalStore: IGlobalStore = {
  account: new ethers.VoidSigner(""),
  network: "",
  connected: false,
  walletAccounts: [],
  currentAccount: {
    publicKey: null,
    hubbleAddress: "",
    reducedSecretKey: "",
    registered: false,
    accountId: null,
  },
  shouldUpdate: false,

  // actions
  setAccount: action((state, payload: Signer) => {
    state.account = payload;
  }),

  setNetwork: action((state, payload: string) => {
    state.network = payload;
  }),

  setConnected: action((state, payload: boolean) => {
    state.connected = payload;
  }),

  setWalletAccounts: action((state, payload: IWalletAccount[]) => {
    state.walletAccounts = payload;
  }),

  setCurrentAccount: action((state, payload: IWalletAccount) => {
    state.currentAccount.publicKey = payload.publicKey;
    state.currentAccount.hubbleAddress = payload.hubbleAddress;
    state.currentAccount.reducedSecretKey = payload.reducedSecretKey;
    state.currentAccount.registered = payload.registered;
    state.currentAccount.accountId = payload.accountId;
  }),

  updateCurrentAccount: action((state, payload: string) => {
    state.currentAccount.registered = true;
    state.currentAccount.accountId = payload;

    let walletAccountsUpdated = state.walletAccounts.filter(
      (account) => account?.hubbleAddress !== state.currentAccount.hubbleAddress
    );
    walletAccountsUpdated.push(state.currentAccount);

    state.walletAccounts = walletAccountsUpdated;
  }),

  setShouldUpdate: action((state, payload: boolean) => {
    state.shouldUpdate = payload;
  }),
};

export default globalStore;

const { useStoreActions, useStoreState } = createTypedHooks<IGlobalStore>();
export { useStoreActions, useStoreState };
