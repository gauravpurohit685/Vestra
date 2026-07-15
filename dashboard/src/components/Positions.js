import React, {useEffect, useState, useContext} from "react";

import CircularProgress from "@mui/material/CircularProgress";

import PositionsItem from "./PositionsItems";

import ConfirmDialogBox from "./ConfirmDialogBox";


const Positions = () => {

    const [isLoading, setIsLoading] = useState(true);
    const [isError, setIsError] = useState(false);
    const [positions, setPositions] = useState([]);

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
