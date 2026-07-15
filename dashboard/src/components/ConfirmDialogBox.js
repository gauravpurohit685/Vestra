import React, {useContext} from "react";

import WatchListContext from "../context/watchListContext";

const getStockPrice = (watchListData, symbol) => {
  const stock = watchListData.find(
    (stock) => stock.symbol === symbol
  );

  return stock ? stock.currentPrice : 0;
};

const ConfirmDialogBox = ({ dialogData, onClose }) => {
    
    const {watchListData} = useContext(WatchListContext);

    const price = getStockPrice(watchListData, dialogData.symbol);


  const handleClosePosition = async () => {
    try {
      const response = await fetch(
        process.env.REACT_APP_CLOSEINDIVIDUALPOSITION + dialogData.id,
        {
          method: "POST",
          credentials: "include",
          headers: {
                "Content-Type": "application/json",
          },
          body: JSON.stringify({
            price
          }),
        }
      );

      if (!response.ok) {
        throw new Error("Could not close position");
      }

      alert("Position closed successfully.");
      window.location.reload();
    } catch (err) {
      console.log(err);
      alert("Could not close the position.");
    }
  };

  return (
    <div className="close-position-overlay">
      <div className="close-position-dialog">
        <button className="close-btn" onClick={onClose}>
          &times;
        </button>

        <h3>Close Position</h3>

        <div className="position-details">
          <p>
            <strong>Symbol:</strong> {dialogData.symbol}
          </p>
          <p>
            <strong>Price:</strong> {price}
          </p>
        </div>

        <p className="dialog-message">
          Clicking the button below will lead to closing the position at the
          current market price.
        </p>

        <button
          className="confirm-btn"
          onClick={handleClosePosition}
        >
          Close Position
        </button>
      </div>
    </div>
  );
};

export default ConfirmDialogBox;