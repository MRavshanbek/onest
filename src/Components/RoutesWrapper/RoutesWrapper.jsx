import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../Home/Home";
import Account from "../Account/Account";
import Announcements from "../Announcements/Announcements";
import Second from "../Second/Second";
import Messages from "../Announcements/Messages/Messages";
import Payments from "../Announcements/Payments/Payments";
import UpBalances from "../Announcements/Payments/UpBalance/UpBalances";
import Example from "../Example";
import Payments__right from "../Announcements/Payments/Payments__right/Payments__right";
import ChangePassword from "../Account/ChangePassword/ChangePassword";
import AccountCenter from "../InformationAccaunt/AccountCenter/AccountCenter";
import AddObject from "../AddObject/AddObject";
import Faq from "../Faq/Faq";
import AllAds from "../AllAds/AllAds";
import AdsCenter from "../AdsCenter/AdsCenter";
import Section from "../section/Section";
import ReviewsData from "../AllAds/Reviews/ReviewsData";
function RoutesWrapper() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/faq" element={<Faq />} />
        <Route path="/allAds" element={<AllAds />}>
          <Route path="adsCenter" element={<AdsCenter />}>
            <Route path="section" element={<Section />} />
            <Route path="reviewsData" element={<ReviewsData />} />
          </Route>
        </Route>
        <Route path="/addObject" element={<AddObject />} />
        <Route path="/announcements" element={<Announcements />} />
        <Route path="/Second/:id" element={<Second />} />
        <Route path="/example" element={<Example />}>
          <Route path="announcements" element={<Announcements />} />
          <Route path="messages" element={<Messages />} />
          <Route path="accaunt" element={<Account />}>
            <Route path="accountCenter" element={<AccountCenter />} />
            <Route path="changePassword" element={<ChangePassword />} />
          </Route>
          <Route path="payments" element={<Payments />}>
            <Route path="upBalances" element={<UpBalances />} />
            <Route path="payments" element={<Payments__right />} />
          </Route>
        </Route>
      </Routes>
    </>
  );
}

export default RoutesWrapper;
