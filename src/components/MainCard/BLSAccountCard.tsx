import React, { useEffect, useState } from "react";

// hooks and services
import { useStoreState } from "../../store/globalStore";

// components, styles and UI
import { Icon, Loader } from "semantic-ui-react";
import BurnAccountModal from "../Modals/BurnAccountModal";
import NewAccountModal from "../Modals/NewAccountModal";
import QRCodeGenerator from "../QRCode/QRCodeGenerator";
import DropdownAccounts from "./DropdownAccounts";
import useWalletAccounts from "../../hooks/useWalletAccounts";
import SendTokenModal from "../Modals/SendTokenModal";
import useBls from "../../hooks/useBls";

const BLSAccountCard: React.FunctionComponent = () => {
  const { currentAccount } = useStoreState((state) => state);
  const { checkExistingAccounts } = useWalletAccounts();
  const { hashPublicKeys } = useBls();

  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      await checkExistingAccounts();
      setLoading(false);
    };

    fetchData();
    // eslint-disable-next-line
  }, []);

  return (
    <div className="main-card-left">
      <h3 className="app-title">
        <span>Hubble Wallet</span>
        <Icon name="binoculars" />
      </h3>

      {loading ? (
        <div className="loading-bls">
          <Loader active inline size="big" />
          <h4>Loading L2 Accounts...</h4>
        </div>
      ) : (
        <>
          <br />
          <DropdownAccounts />

          <QRCodeGenerator address={hashPublicKeys(currentAccount.publicKey)} />

          <SendTokenModal />
          <div className="button-group">
            <NewAccountModal />
            <BurnAccountModal />
          </div>
        </>
      )}
    </div>
  );
};

export default BLSAccountCard;
