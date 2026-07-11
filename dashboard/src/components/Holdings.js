import React, {useContext, useEffect, useState} from "react";
import WatchListContext from "../context/watchListContext";

import { holdings } from "../data/data";

const Holdings = () => {

  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);
  const [holdings, setHoldings] = useState([]);

  const {watchListData} = useContext(WatchListContext);

  useEffect(() => {
    const fetchHolding = async () => {
      try{
        const holdingres = await fetch(process.env.REACT_APP_GETHOLDING);

        if(!holdingres){
          throw new Error("No valid holding object returned");
        }

        const holdingData = await holdingres.json();
        setHoldings(holdingData);
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
              const currPrice = watchListData.currentPrice;
              const totprice = currPrice*stocks.quantity;
              const isProfit = currPrice - stocks.averagePrice >= 0.0;
              const profClass = isProfit? "profit" : "loss";
              const isLoss = watchListData.percentChange < 0;
              const dayClass = isLoss ? "loss": "profit";

              const netChange = ((currPrice - stocks.averagePrice)/stocks.averagePrice)*100;

              return (
                <tr key={index}>
                  <td>{stocks.symbol}</td>
                  <td>{stocks.quantity}</td>
                  <td>{stocks.averagePrice.toFixed(2)}</td>
                  <td>{currPrice.toFixed(2)}</td>
                  <td>{totprice.toFixed(2)}</td>
                  <td className={profClass}>
                      {(totPrice - stocks.averagePrice * stocks.quantity).toFixed(2)}
                  </td>
                  <td className={profClass}>
                    {netChange}
                  </td>
                  <td className={dayClass}>
                    {watchListData.percentChange}
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
