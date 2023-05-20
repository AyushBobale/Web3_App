import "./SectionLayout.css";

import { useAccount, useBalance, useEnsName } from "wagmi";

import { Outlet } from "react-router-dom";
import React from "react";
import wallet from "../../assets/images/Wallet.svg";

export const SectionLayout = () => {
  const { address, isConnected } = useAccount();
  const { data: ensName } = useEnsName({ address });
  const { data, isError, isLoading } = useBalance({
    address: address,
    watch: true,
  });
  return (
    <div>
      <div className="section-header">
        <h2>Section</h2>
        <div className="section-end">
          <div className="balance-btn">
            <img src={wallet} alt="" />
            {isConnected ? `${data.formatted} ${data.symbol}` : "Please login"}
            <button className="btn-light-bal">Tier 1</button>
          </div>
        </div>
      </div>
      <div className="section-content">
        <Outlet />
      </div>
    </div>
  );
};
