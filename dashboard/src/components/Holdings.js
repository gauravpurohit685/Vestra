import React, {useContext, useEffect, useState} from "react";
import WatchListContext from "../context/watchListContext";

import CircularProgress from "@mui/material/CircularProgress";

import { holdings } from "../data/data";

const getStockDetails = (watchListData, symbol) => {
  const stock = watchListData.find(
    (stock) => stock.symbol === symbol
  );

  if (!stock) {
    return {
      currentPrice: 0,
      percentChange: 0,
    };
  }

  return {
    currentPrice: stock.currentPrice,
    percentChange: stock.percentChange,
  };
};

const Holdings = () => {

  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);
  const [holdings, setHoldings] = useState([]);

  const {watchListData} = useContext(WatchListContext);

  useEffect(() => {
    const fetchHolding = async () => {
      try{
        const holdingres = await fetch(process.env.REACT_APP_GETHOLDING, {
          credentials: "include"
        });

        if(!holdingres.ok){
          throw new Error("No valid holding object returned");
        }

        const holdingData = await holdingres.json();
        setHoldings(holdingData.holdings);
      }
      catch(err){
        console.log(err.message);
        setIsError(true);
      }
      finally{
        setIsLoading(false);
      }
    }

    fetchHolding()
  }, [])

  if(isLoading){
    return(
          <div style={{display: "flex", justifyContent: "center", alignItems: "center", height: "100%"}}>
            <CircularProgress />
          </div>
    )
  }

  if(isError){
    return(
      <div style={{display: "flex", justifyContent: "center", alignItems: "center", height: "100%"}}>
        <p style = {{textAlign: "center"}}>Error getting the holdings data!</p>
      </div>
    )
  }

  return (
    <>
      <h3 className="title">Holdings ({holdings.length})</h3>

      <div className="order-table">
        <table>
          <tr>
            <th>Instrument</th>
            <th>Qty.</th>
            <th>Avg. cost</th>
            <th>LTP</th>
            <th>Cur. val</th>
            <th>P&L</th>
            <th>Net chg.</th>
            <th>Day chg.</th>
          </tr>

          {
            holdings.map((stocks, index) => {

              const { currentPrice, percentChange } = getStockDetails(
                watchListData,
                stocks.symbol
              );

              const currPrice = currentPrice;
              const totPrice = currPrice*stocks.quantity;
              const isProfit = currPrice - stocks.averagePrice >= 0.0;
              const profClass = isProfit? "profit" : "loss";
              const isLoss = percentChange < 0;
              const dayClass = isLoss ? "loss": "profit";

              const netChange = ((currPrice - stocks.averagePrice)/stocks.averagePrice)*100;

              

              return (
                <tr key={stocks.symbol}>
                  <td>{stocks.symbol}</td>
                  <td>{stocks.quantity}</td>
                  <td>{stocks.averagePrice.toFixed(2)}</td>
                  <td>{currPrice.toFixed(2)}</td>
                  <td>{totPrice.toFixed(2)}</td>
                  <td className={profClass}>
                      {(totPrice - stocks.averagePrice * stocks.quantity).toFixed(2)}
                  </td>
                  <td className={profClass}>
                    {netChange.toFixed(2)}%
                  </td>
                  <td className={dayClass}>
                    {percentChange.toFixed(2)}%
                  </td>
                </tr>
              )
            })
          }
        </table>
      </div>

      <div className="row">
        
      </div>
    </>
  );
};

export default Holdings;
