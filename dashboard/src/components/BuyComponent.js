import { useState, useContext } from "react";
import WatchListContext from "../context/watchListContext";

const getStockPrice = (watchListData, symbol) => {
  const stock = watchListData.find(
    (stock) => stock.symbol === symbol
  );

  return stock ? stock.currentPrice : 0;
};

const BuyComponent = ({ symbol, onClose }) => {

  const { watchListData } = useContext(WatchListContext);

  const price = getStockPrice(watchListData, symbol);

  const [quantity, setQuantity] = useState(1);
  const [product, setProduct] = useState("CNC");
  const [isLoading, setIsLoading] = useState(false);

  const handleBuy = async () => {

    if (quantity <= 0) {
      alert("Enter a valid quantity.");
      return;
    }

    const url =
      product === "CNC"
        ? process.env.REACT_APP_BUYHOLDING
        : process.env.REACT_APP_BUYPOSITION;

    try {

      setIsLoading(true);

      const response = await fetch(url, {
        method: "POST",
        credentials: "include",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          symbol,
          quantity,
          price
        }),
      });

      if (!response.ok) {
        throw new Error("Failed to place order.");
      }

      alert("Order placed successfully!");


    } catch (err) {

      console.error(err);
      alert("Unable to place order.");

    } finally {

      setIsLoading(false);

    }

  };

  return (
     <div className="buy-dialog">

        <button
            className="close-btn"
            onClick={onClose}
        >
            ×
        </button>

        <h3>{symbol}</h3>

        <h2 className="stock-price">
            ₹{price.toFixed(2)}
        </h2>

        <div>

            <label className="label">
            Quantity
            </label>

            <input
            type="number"
            min="1"
            step="1"
            value={quantity}
            onChange={(e) => setQuantity(Number(e.target.value))}
            className="quantity-input"
            />

        </div>

        <div>

            <label className="label">
            Product
            </label>

            <label className="radio-label">
            <input
                type="radio"
                value="MIS"
                checked={product === "MIS"}
                onChange={(e) => setProduct(e.target.value)}
            />
            MIS
            </label>

            <label className="radio-label">
            <input
                type="radio"
                value="CNC"
                checked={product === "CNC"}
                onChange={(e) => setProduct(e.target.value)}
            />
            CNC
            </label>

        </div>

        <button
            className="buy-btn"
            onClick={handleBuy}
            disabled={isLoading}
        >
            {isLoading ? "Placing Order..." : "BUY"}
        </button>

    </div>
  );
};

export default BuyComponent;