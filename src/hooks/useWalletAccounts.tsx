import { useEffect } from "react";
import {
  IWalletAccount,
  useStoreActions,
  useStoreState,
} from "../store/globalStore";
import useBls from "./useBls";
import useCommander from "./useCommander";

/**
 * utilities to perform operations on L2 burner wallet
 */
const useWalletAccounts = () => {
  const setCurrentAccountGlobal = useStoreActions(
    (actions) => actions.setCurrentAccount
  );
  const setWalletAccountsGlobal = useStoreActions(
    (actions) => actions.setWalletAccounts
  );

  /**
   * external hooks
   */
  const { walletAccounts } = useStoreState((state) => state);
  const { getNewKeyPair, getNewKeyPairFromSecret, hashPublicKeys } = useBls();
  const { getStateFromPubKey } = useCommander();

  /**
   * fetches a list of accounts from the localstorage
   */
  const getLocalAccounts = (): IWalletAccount[] => {
    const localAccounts = localStorage.getItem("walletAccounts");
    if (localAccounts) {
      return JSON.parse(localAccounts);
    } else {
      return [];
    }
  };

  /**
   * saves an array of walletAccounts to local storage
   * @param walletAccounts array of accounts
   */
  const setLocalAccounts = (walletAccounts: IWalletAccount[]): void => {
    localStorage.setItem("walletAccounts", JSON.stringify(walletAccounts));
    updateGlobalState(walletAccounts);
  };

  useEffect(() => {
    // @ts-ignore
    if (walletAccounts.length) {
      localStorage.setItem("walletAccounts", JSON.stringify(walletAccounts));
    }
  }, [walletAccounts]);

  /**
   * updates redux state for current and all accounts
   * @param walletAccounts
   */
  const updateGlobalState = (walletAccounts: IWalletAccount[]): void => {
    setWalletAccountsGlobal(walletAccounts);
    setCurrentAccountGlobal({
      publicKey: walletAccounts[walletAccounts.length - 1].publicKey,
      hubbleAddress: walletAccounts[walletAccounts.length - 1].hubbleAddress,
      reducedSecretKey:
        walletAccounts[walletAccounts.length - 1].reducedSecretKey,
      registered: walletAccounts[walletAccounts.length - 1].registered,
      accountId: walletAccounts[walletAccounts.length - 1].accountId,
    });
  };

  /**
   * picks up the current account in use and saves to state
   * @param hubbleAddress hashed public keys
   */
  const setCurrentAccountUser = (hubbleAddress: string): void => {
    let localAccounts = getLocalAccounts();
    const newAccount = localAccounts.filter(
      (account) => account.hubbleAddress === hubbleAddress
    )[0];
    setCurrentAccountGlobal({
      publicKey: newAccount.publicKey,
      hubbleAddress: newAccount.hubbleAddress,
      reducedSecretKey: newAccount.reducedSecretKey,
      registered: newAccount.registered,
      accountId: newAccount.accountId,
    });
  };

  /**
   * checks if an account exists locally
   */
  const checkExistingAccounts = async (): Promise<void> => {
    let walletAccounts = getLocalAccounts();
    if (walletAccounts && walletAccounts.length === 0) {
      await createFirstAccount();
    } else {
      updateGlobalState(walletAccounts);
    }
  };

  /**
   * If no account is already present in the local storage
   * a new account is created for the user
   */
  const createFirstAccount = async () => {
    const newKeys = await getNewKeyPair();
    let newAccount: IWalletAccount = {
      publicKey: newKeys.publicKey,
      hubbleAddress: newKeys.hubbleAddress,
      reducedSecretKey: newKeys.reducedSecretKey,
      registered: false,
      accountId: null,
    };
    let walletAccounts = Array<IWalletAccount>();
    walletAccounts.push(newAccount);
    setLocalAccounts(walletAccounts);
  };

  /**
   * Explicitly creates a new account for the user on demand
   * @param walletAccount object with private and public key
   */
  const createNewAccountFromSecret = async (secret: string): Promise<void> => {
    const newKeys = await getNewKeyPairFromSecret(secret);

    let newAccount: IWalletAccount;
    try {
      const res = await getStateFromPubKey(hashPublicKeys(newKeys.publicKey));
      newAccount = {
        publicKey: newKeys.publicKey,
        hubbleAddress: newKeys.hubbleAddress,
        reducedSecretKey: newKeys.reducedSecretKey,
        registered: true,
        accountId: "0x" + res.account_id.toString(16),
      };
    } catch (error) {
      newAccount = {
        publicKey: newKeys.publicKey,
        hubbleAddress: newKeys.hubbleAddress,
        reducedSecretKey: newKeys.reducedSecretKey,
        registered: false,
        accountId: null,
      };
    }

    let localAccounts = getLocalAccounts();
    localAccounts.push(newAccount);
    setLocalAccounts(localAccounts);
  };

  /**
   * Explicitly creates a new account for the user on demand
   * @param walletAccount object with private and public key
   */
  const createNewAccount = async (): Promise<void> => {
    const newKeys = await getNewKeyPair();
    let newAccount: IWalletAccount = {
      publicKey: newKeys.publicKey,
      hubbleAddress: newKeys.hubbleAddress,
      reducedSecretKey: newKeys.reducedSecretKey,
      registered: false,
      accountId: null,
    };
    let localAccounts = getLocalAccounts();
    localAccounts.push(newAccount);
    setLocalAccounts(localAccounts);
  };

  /**
   * Removes a reference to the account from local storage
   * if the last remaining account is deleted
   * then a new account is created
   * @param publicKey of the account to be deleted
   */
  const burnAccount = (hubbleAddress: string): void => {
    let localAccounts = getLocalAccounts();
    let updatedAccounts = localAccounts.filter(
      (account) => account.hubbleAddress !== hubbleAddress
    );
    if (updatedAccounts.length === 0) {
      createFirstAccount();
    } else {
      setLocalAccounts(updatedAccounts);
    }
  };

  return {
    checkExistingAccounts,
    createNewAccount,
    burnAccount,
    setCurrentAccountUser,
    createNewAccountFromSecret,
  };
};

export default useWalletAccounts;
