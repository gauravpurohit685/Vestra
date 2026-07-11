import React, {useEffect, useState, useContext} from "react";

import CircularProgress from "@mui/material/CircularProgress";

import WatchListContext from "../context/watchListContext";


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

const Positions = () => {

    const [isLoading, setIsLoading] = useState(true);
    const [isError, setIsError] = useState(false);
    const [positions, setPositions] = useState([]);
  
    const {watchListData} = useContext(WatchListContext);

  
    useEffect(() => {
      const fetchPositions = async () => {
        try{
          const positionRes = await fetch(process.env.REACT_APP_GETPOSITION, {
            credentials: "include"
          });
  
          if(!positionRes.ok){
            throw new Error("No valid position object returned");
          }
  
          const positionsData = await positionRes.json();
          setPositions(positionsData.positions);
        }
        catch(err){
          console.log(err.message);
          setIsError(true);
        }
        finally{
          setIsLoading(false);
        }
      }
  
      fetchPositions()
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
      <h3 className="title">Positions ({positions.length})</h3>

      <div className="order-table">
        <table>
          <tr>
            <th>Product</th>
            <th>Instrument</th>
            <th>Qty.</th>
            <th>Avg.</th>
            <th>LTP</th>
            <th>P&L</th>
            <th>Chg.</th>
          </tr>

          {
            positions.map((stocks, index) => {

              const { currentPrice, percentChange } = getStockDetails(
                watchListData,
                stocks.symbol
              );

              const currPrice = currentPrice;
              const totPrice = currPrice * stocks.quantity;
              const isProfit = currPrice - (stocks.averagePrice) >= 0.0;
              const profClass = isProfit? "profit" : "loss";
              const dayClass = percentChange < 0 ? "loss": "profit"
          
              return (
                <tr key={stocks.symbol}>
                  <td>{stocks.product}</td>
                  <td>{stocks.symbol}</td>
                  <td>{stocks.quantity}</td>
                  <td>{stocks.averagePrice.toFixed(2)}</td>
                  <td>{currPrice.toFixed(2)}</td>
                  <td className={profClass}>
                      {(totPrice - stocks.averagePrice * stocks.quantity).toFixed(2)}
                  </td>
                  <td className={dayClass}>
                    {percentChange}%
                  </td>
                </tr>
              )
          })
        }
        </table>
      </div>
    </>
  );
};

export default Positions;
