import React, {useState, useEffect} from "react";
import CircularProgress from "@mui/material/CircularProgress";


// import { watchlist } from "../data/data";

import WatchListItem from "./WatchListItem";

const WatchList = () => {

  const [watchlist, setWatchList] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);

  const fetchWatchList = async () => {
    try{
      const res = await fetch(process.env.MARKET_URL, {
        credentials: "include"
      });

      if(!res.ok){
        throw new Error("No data found!");
      }

      const data = await res.json();

      setWatchList(data);
      setIsLoading(false);
    }
    catch(err){
      console.log(err.message);
      setIsError(true);
      setIsLoading(false)
    }
  }

  useEffect(() => {
    fetchWatchList()
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
