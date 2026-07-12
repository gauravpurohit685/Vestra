import React, {useEffect, useState, useContext} from "react";
import TransferComponent from "./TransferComponent";
import WatchListContext from "../context/watchListContext";

const calculateNetPL = (watchListData, positions) => {

    const currentPriceMap = new Map();

    watchListData.forEach((stock) => {
        currentPriceMap.set(stock.symbol, stock.currentPrice);
    });

    let netProfit = 0;

    positions.forEach((position) => {

        const currentPrice = currentPriceMap.get(position.symbol);

        if (currentPrice === undefined) {
            return;
        }

        netProfit +=
            (currentPrice - position.averagePrice) *
            position.quantity;

    });

    return netProfit;

};

const usedMarginCalculator = (positions) => {

    let usedMargin = 0;

    positions.forEach((position) => {

        usedMargin +=
            position.averagePrice * position.quantity;

    });

    return usedMargin;

};

const Funds = () => {

  const [transferType, setTransferType] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);

  const [positions, setPositions] = useState([]);
  const [account, setAccount] = useState(null);

  const {watchListData} = useContext(WatchListContext);

  useEffect(() => {

      const fetchData = async () => {

          try {

              const [positionResponse, bankResponse] = await Promise.all([
                  fetch(process.env.REACT_APP_GETPOSITION, {
                      credentials: "include"
                  }),
                  fetch(process.env.REACT_APP_GETBANK, {
                      credentials: "include"
                  })
              ]);

              const positionData = await positionResponse.json();
              const bankData = await bankResponse.json();

              if (!positionResponse.ok) {
                  throw new Error(positionData.message);
              }

              if (!bankResponse.ok) {
                  throw new Error(bankData.message);
              }

              setPositions(positionData.positions);
              setAccount(bankData.account);

          }
          catch (err) {
              console.error(err);
              setIsError(true);
          }
          finally {
              setIsLoading(false);
          }

      };

      fetchData();

  }, []);  

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

  const netPL = calculateNetPL(watchListData, positions);
  const availableMargin = Math.max(
    0,
    account.tradingBalance + netPL
  );
  const usedMargin = usedMarginCalculator(positions);
  const availableCash = account.tradingBalance;
  const payin = account.payIn;
  const payout = account.payOut;
  

  return (

    <>
      <div className="funds">
        <p>Instant, zero-cost fund transfers with UPI </p>
      </div>
      <div className="funds">
        <Button className="btn btn-green" onClick = {() => setTransferType("DEPOSIT")}>Add funds</Button>
        <Button className="btn btn-blue" onClick = {() => setTransferType("WITHDRAW")}>Withdraw</Button>
      </div>

      <div className="d-flex justify-content-center">
        <div className="col">
          <span>
            <p>Equity</p>
          </span>
          <div className="table">
            <div className="data">
              <p>Available margin</p>
              <p className="imp colored">{availableMargin.toFixed(2)}</p>
            </div>
            <div className="data">
              <p>Used margin</p>
              <p className="imp">{usedMargin.toFixed(2)}</p>
            </div>
            <div className="data">
              <p>Available cash</p>
              <p className="imp">{availableCash.toFixed(2)}</p>
            </div>
            <hr />
            <div className="data">
              <p>Payin</p>
              <p>{payin.toFixed(2)}</p>
            </div>
            <div className="data">
              <p>Payout</p>
              <p>{payout.toFixed(2)}</p>
            </div>
            <hr />
          </div>
        </div>
      </div>

      {transferType && (
        <TransferComponent 
          type = {transferType}
          onclose = {() => setTransferType(null)}
        />
      )}

    </>
  );
};

export default Funds;