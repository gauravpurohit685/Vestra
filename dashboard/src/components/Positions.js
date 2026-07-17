import React, {useEffect, useState, useContext} from "react";

import CircularProgress from "@mui/material/CircularProgress";

import PositionsItem from "./PositionsItems";

import ConfirmDialogBox from "./ConfirmDialogBox";

import WatchListContext from "../context/watchListContext";

const getPrices = (watchListData, positions) => {
    const prices = {};

    // Create a set of all position symbols for O(1) lookup
    const positionSymbols = new Set(
        positions.map((position) => position.symbol)
    );

    watchListData.forEach((stock) => {
        if (positionSymbols.has(stock.symbol)) {
            prices[stock.symbol] = stock.currentPrice;
        }
    });

    return prices;
};

const Positions = () => {

    const [isLoading, setIsLoading] = useState(true);
    const [isError, setIsError] = useState(false);
    const [positions, setPositions] = useState([]);

    const {watchListData} = useContext(WatchListContext);

    const [dialogData, setDialogData] = useState(null);

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
          <p style = {{textAlign: "center"}}>Error getting the positions data!</p>
        </div>
      )
    }

    const prices = getPrices(watchListData, positions);

    const handleCloseAll = async () => {
      try{
          const response = await fetch(process.env.REACT_APP_CLOSEALL, {
          method: "POST",
          credentials: "include",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            prices
          }),
        });

        if (!response.ok) {
          throw new Error("Failed to place order.");
        }

        alert("All positions closed successfully!");

        window.location.reload();
      }
      catch(err){
        console.log(err.message);
        alert("Unable to close positions")
      }
    }

  return (
    <>
      <div className="positions-header">
      <h3 className="title">Positions ({positions.length})</h3>

      <button
        className="close-all-btn"
        onClick={handleCloseAll}
        disabled={positions.length === 0}
      >
        Close All
      </button>
    </div>

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
            positions.map((stocks) => (
              <PositionsItem stocks = {stocks} setDialogData = {setDialogData}  key = {stocks.symbol}/>
            ))
        }
        </table>
        {
          dialogData && (
            <ConfirmDialogBox 
              dialogData = {dialogData}
              onClose = {() => setDialogData(null)}
            />
          )
        }
      </div>
    </>
  );
};

export default Positions;
