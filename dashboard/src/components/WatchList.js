import React, {useState, useEffect, useRef, useContext} from "react";
import CircularProgress from "@mui/material/CircularProgress";

import WatchListItem from "./WatchListItem";
import BuyComponent from "./BuyComponent";
import SellComponent from "./SellComponent";


import WatchListContext from "../context/watchListContext";



import {io} from "socket.io-client";


const WatchList = () => {

  const [tradeDialog, setTradeDialog] = useState(null);

  const [watchlist, setWatchList] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);

  const { watchListData, setWatchListData } = useContext(WatchListContext);

  const socketRef = useRef(null);

  const fetchWatchList = async () => {
    try{
      console.log(process.env.REACT_APP_MARKET_URL);

      const res = await fetch(process.env.REACT_APP_MARKET_URL, {
        credentials: "include"
      });

      if(!res.ok){
        throw new Error("No data found!");
      }

      const data = await res.json();

      setWatchList(data.data);
      setIsLoading(false);

      socketRef.current = io(process.env.REACT_APP_BACKEND_URL, {
        withCredentials: true
      })

      socketRef.current.on("market-update", (trades) => {

        setWatchList(prev => {

            const updated = [...prev];

            trades.forEach(trade => {

                const stock = updated.find(
                    stock => stock.symbol === trade.s
                );

                if(!stock)
                    return;

                stock.currentPrice = trade.p;

                stock.change = Number(
                    (trade.p - stock.previousClose).toFixed(2)
                );

                stock.percentChange = Number(
                    (
                        ((trade.p - stock.previousClose) /
                        stock.previousClose) * 100
                    ).toFixed(2)
                );

                stock.high = Math.max(stock.high, trade.p);

                stock.low = Math.min(stock.low, trade.p);

                stock.timestamp = trade.t;

            });

            return updated;

        });

      });
    }
    catch(err){
      console.log(err.message);
      setIsError(true);
      setIsLoading(false)
    }
  }

  useEffect(() => {
    fetchWatchList()

    return () => {

      socketRef.current?.disconnect();

    }
  },[])

  useEffect(() => {
    setWatchListData(watchlist);
  }, [watchlist, setWatchListData]);

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
        <p style = {{textAlign: "center"}}>Some Error Occured!</p>
      </div>
    )
  }

  return (
    <>
    <div className="watchlist-container">
      <ul className="list">
        {
          watchlist.map((stock, index) => (
            <WatchListItem stock = {stock} key = {stock.symbol} setTradeDialog = {setTradeDialog}/>
          ))
        }
      </ul>
    </div>
    {tradeDialog?.type === "BUY" && (
        <BuyComponent
            symbol={tradeDialog.symbol}
            onClose={() => setTradeDialog(null)}
            setTradeDialog = {setTradeDialog}
        />
    )}

    {tradeDialog?.type === "SELL" && (
        <SellComponent
            symbol={tradeDialog.symbol}
            onClose={() => setTradeDialog(null)}
        />
    )}
    </>
  );
};

export default WatchList;
