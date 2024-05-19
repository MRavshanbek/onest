import React from "react";
import "./Account.scss";
import { Outlet } from "react-router-dom";
import AccountSection from '../AccountSection/AccountSection'
import InformationAccaunt from "../InformationAccaunt/InformationAccaunt";

function Account() {
  return (
    <>
        <main className="InformationAccaunt__main container">
        <AccountSection/>
        <Outlet/>
        <InformationAccaunt/>
        </main>

    </>
  );
}

export default Account;
