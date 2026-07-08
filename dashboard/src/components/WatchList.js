import React, {useState, useEffect, useRef} from "react";
import CircularProgress from "@mui/material/CircularProgress";

import WatchListItem from "./WatchListItem";

import {io} from "socket.io-client";


const WatchList = () => {

  const [watchlist, setWatchList] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);

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
    <div className="watchlist-container">
      <div className="search-container">
        <input
          type="text"
          name="search"
          id="search"
          placeholder="Search eg:infy, bse, nifty fut weekly, gold mcx"
          className="search"
        />
        <span className="counts"> {watchlist.length} / 50</span>
      </div>

      <ul className="list">
        {
          watchlist.map((stock, index) => (
            <WatchListItem stock = {stock} key = {index} />
          ))
        }
      </ul>
    </div>
  );
};

export default WatchList;
