import React, {useContext, useEffect, useState} from "react";
import WatchListContext from "../context/watchListContext";
import CircularProgress from "@mui/material/CircularProgress";

//helper function
const getTotalInvestment = (data) => {
  return data.reduce((total, item) => {
    return total + item.quantity * item.averagePrice;
  }, 0);
};

const getCurrentValue = (watchList, data) => {
  return data.reduce((total, item) => {
    const stock = watchList.find(
      stock => stock.symbol === item.symbol
    );

    if (!stock) return total;

    return total + item.quantity * stock.currentPrice;
  }, 0);
};

const Summary = () => {

  const {watchListData} = useContext(WatchListContext);

  const [holdings, setHoldings] = useState([]);
  const [positions, setPositions] = useState([]);
  const [bank, setBank] = useState(null);

  const [isError, setIsError] = useState(false);
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const fetchSummaryData = async () => {
      try {
        const [holdingsRes, positionsRes, bankRes] = await Promise.all([
          fetch(process.env.REACT_APP_GETHOLDING, {
            credentials: "include",
          }),
          fetch(process.env.REACT_APP_GETPOSITION, {
            credentials: "include",
          }),
          fetch(process.env.REACT_APP_GETBANK, {
            credentials: "include",
          }),
        ]);

        if (!holdingsRes.ok || !positionsRes.ok || !bankRes.ok) {
          throw new Error("Failed to fetch summary data");
        }

        const [holdingsData, positionsData, bankData] = await Promise.all([
          holdingsRes.json(),
          positionsRes.json(),
          bankRes.json(),
        ]);

        setHoldings(holdingsData.holdings);
        setPositions(positionsData.positions);
        setBank(bankData.account);
      } catch (err) {
        console.error("Error fetching summary data:", err);
        setIsError(true);
      }
      finally{
        setIsLoading(false);
      }
    };

    fetchSummaryData();
  }, []);


  if(isLoading){
    return (
      <div style = {{display: "flex", justifyContent: "center", alignItems: "center", color: "red", height: "100%"}}>
          <CircularProgress />
      </div>
    )
  }

  if(isError){
    return (
      <div style = {{display: "flex", justifyContent: "center", alignItems: "center", color: "red", height: "100%"}}>
        <p>Error getting the details!</p>
      </div>
    )
  }

  let tradeBalance = (bank?.tradingBalance/1000);
  let holdInvestment = (getTotalInvestment(holdings)/1000);
  let possInvestment = (getTotalInvestment(positions)/1000);

  let holdProfit = (getCurrentValue(watchListData, holdings)/1000);
  let possProfit = (getCurrentValue(watchListData, positions)/1000);

  const holdPercent =
    holdInvestment === 0
        ? 0
        : ((holdProfit - holdInvestment) / holdInvestment) * 100;

  const possPercent =
    possInvestment === 0
        ? 0
        : ((possProfit - possInvestment) / possInvestment) * 100;

  return (
    <>
      <div className="username">
        <h6>Hi, User!</h6>
        <hr className="divider" />
      </div>

      <div className="section">
        <span>
          <p>Equity</p>
        </span>

        <div className="data">
          <div className="first">
            <h3>${(tradeBalance + holdProfit + possProfit).toFixed(2)}K</h3>
          </div>
          <hr />

          <div className="second">
            <p>
              Account Balance <span>${tradeBalance.toFixed(2)}K</span>{" "}
            </p>
            <p>
              Portfolio Balance <span>${(holdProfit + possProfit).toFixed(2)}K</span>{" "}
            </p>
          </div>
        </div>
        <hr className="divider" />
      </div>

      <div className="section">
        <span>
          <p>Holdings ({holdings.length})</p>
        </span>

        <div className="data">
          <div className="first">
            <h3 className="profit">
              ${(holdProfit - holdInvestment).toFixed(2)}K <small>{(holdProfit - holdInvestment) >= 0 ? "+": "-"}{holdPercent.toFixed(2)}%</small>{" "}
            </h3>
            <p>P&L</p>
          </div>
          <hr />

          <div className="second">
            <p>
              Current Value <span>${holdProfit.toFixed(2)}K</span>{" "}
            </p>
            <p>
              Investment <span>${holdInvestment.toFixed(2)}K</span>{" "}
            </p>
          </div>
        </div>
        <hr className="divider" />
      </div>

      <div className="section">
        <span>
          <p>positions ({positions.length})</p>
        </span>

        <div className="data">
          <div className="first">
            <h3 className="profit">
              ${(possProfit - possInvestment).toFixed(2)}K<small>{(possProfit - possInvestment)>= 0 ? "+":"-"}{possPercent.toFixed(2)}%</small>{" "}
            </h3>
            <p>P&L</p>
          </div>
          <hr />

          <div className="second">
            <p>
              Current Value <span>${possProfit.toFixed(2)}K</span>{" "}
            </p>
            <p>
              Investment <span>${possInvestment.toFixed(2)}K</span>{" "}
            </p>
          </div>
        </div>
        <hr className="divider" />
      </div>
    </>
  );
};

export default Summary;
