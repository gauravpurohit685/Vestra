import React, {useState} from "react";
import { Route, Routes } from "react-router-dom";

import Funds from "./Funds";
import Holdings from "./Holdings";

import Orders from "./Orders";
import Positions from "./Positions";
import Summary from "./Summary";
import Profile from "./Profile";
import WatchList from "./WatchList";
import WatchListContext from "../context/watchListContext";

const Dashboard = () => {

  const [watchListData, setWatchListData] = useState({});

  return (
    <WatchListContext.Provider
      value={{ watchListData, setWatchListData }}
    >
      <div className="dashboard-container">
        <WatchList />
        <div className="content">
          <Routes>
            <Route exact path="/" element={<Summary />} />
            <Route path="/orders" element={<Orders />} />
            <Route path="/holdings" element={<Holdings />} />
            <Route path="/positions" element={<Positions />} />
            <Route path="/funds" element={<Funds />} />
            <Route path="/profile" element = {<Profile />} />
          </Routes>
        </div>
      </div>
    </ WatchListContext.Provider>
  );
};

export default Dashboard;
